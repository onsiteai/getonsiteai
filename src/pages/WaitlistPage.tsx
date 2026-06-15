import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import posthog from 'posthog-js'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'

const trades = [
  'General Contractor',
  'Electrician',
  'Plumber',
  'HVAC',
  'Roofer',
  'Painter',
  'Landscaper',
  'Flooring',
  'Masonry / Concrete',
  'Framing / Carpentry',
  'Other',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistPage() {
  const [formState, setFormState] = useState<FormState>(() => {
    // Check if user already submitted
    if (typeof window !== 'undefined' && localStorage.getItem('onsite_waitlist_joined')) {
      return 'success'
    }
    return 'idle'
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [fields, setFields] = useState({
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    trade: '',
  })

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    posthog.capture('waitlist_submitted', {
      trade: fields.trade || null,
      has_phone: !!fields.phone.trim(),
    })

    const { error } = await supabase.from('waitlist').insert({
      email: fields.email.trim().toLowerCase(),
      full_name: fields.full_name.trim(),
      company_name: fields.company_name.trim(),
      phone: fields.phone.trim() || null,
      trade: fields.trade || null,
      referral_source: 'website',
    })

    if (error) {
      if (error.code === '23505') {
        posthog.capture('waitlist_already_registered')
        localStorage.setItem('onsite_waitlist_joined', '1')
        setFormState('success')
      } else {
        posthog.capture('waitlist_error', { error_code: error.code })
        setErrorMsg('Something went wrong. Try emailing us at hello@getonsiteai.com.')
        setFormState('error')
      }
    } else {
      posthog.identify(fields.email.trim().toLowerCase(), {
        name: fields.full_name.trim(),
        company: fields.company_name.trim(),
        trade: fields.trade || null,
      })
      posthog.capture('waitlist_joined', {
        trade: fields.trade || null,
        has_phone: !!fields.phone.trim(),
      })
      localStorage.setItem('onsite_waitlist_joined', '1')
      setFormState('success')
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Nav */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold text-neutral-900 tracking-tight hover:text-neutral-600 transition-colors">
            Onsite
          </Link>
          <a
            href="https://onsite-modules.onrender.com/login"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Sign in
          </a>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          {formState === 'success' ? (
            <div className="bg-white rounded-2xl border border-neutral-200 px-8 py-12 text-center">
              <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <p className="text-sm font-semibold text-neutral-900 mb-1">You're on the list.</p>
              <p className="text-sm text-neutral-500 mb-6">We'll reach out when your spot is ready.</p>
              <Link to="/" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                ← Back to home
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-neutral-200 px-8 py-10">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Early access</p>
                <h1 className="text-xl font-semibold text-neutral-900 tracking-tight mb-1">
                  Request access to Onsite
                </h1>
                <p className="text-sm text-neutral-500">
                  Free during beta. We'll reach out when your spot is ready.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  value={fields.full_name}
                  onChange={set('full_name')}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                />
                <input
                  required
                  type="text"
                  placeholder="Company name"
                  value={fields.company_name}
                  onChange={set('company_name')}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Work email"
                  value={fields.email}
                  onChange={set('email')}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={fields.phone}
                    onChange={set('phone')}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                  />
                  <select
                    value={fields.trade}
                    onChange={set('trade')}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-400 focus:bg-white transition-colors appearance-none"
                  >
                    <option value="">Trade</option>
                    {trades.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {formState === 'error' && (
                  <p className="text-xs text-red-500 text-center">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors mt-1',
                    formState !== 'loading'
                      ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                      : 'bg-neutral-100 text-neutral-400 cursor-not-allowed',
                  )}
                >
                  {formState === 'loading' ? 'Submitting…' : 'Request early access'}
                  {formState !== 'loading' && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
