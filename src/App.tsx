import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HardHat, Zap, ClipboardList, Clock, CheckCircle2, ArrowRight, Building2 } from 'lucide-react'
import posthog from 'posthog-js'
import { cn } from '@/lib/utils'
import { supabase } from '@/lib/supabase'

const features = [
  {
    icon: ClipboardList,
    title: 'Smart Estimating',
    description: 'Generate accurate job estimates in minutes. Describe the job, get a detailed bid.',
  },
  {
    icon: Zap,
    title: 'Instant Proposals',
    description: 'Send professional, branded proposals to clients right from the field.',
  },
  {
    icon: Clock,
    title: 'Save Hours Daily',
    description: 'Automate the admin work — invoicing, change orders, and follow-ups handled for you.',
  },
  {
    icon: HardHat,
    title: 'Built for the Field',
    description: 'Designed for contractors who work with their hands, not behind a desk.',
  },
]

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

const freePlanFeatures = [
  'Unlimited estimates & proposals',
  'AI-powered bid generation',
  'Client portal & approvals',
  'Change order management',
  'Invoicing',
]

const enterprisePlanFeatures = [
  'Everything in Free Trial',
  'Multi-crew management',
  'Priority support & onboarding',
  'Custom branding & templates',
  'API access & integrations',
  'Dedicated account manager',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 tracking-wide',
        className,
      )}
    >
      {children}
    </span>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 flex flex-col gap-3">
      <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center">
        <Icon className="w-4.5 h-4.5 text-neutral-700" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">{title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>('idle')
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
        // unique violation — already on waitlist
        posthog.capture('waitlist_already_registered')
        setFormState('success')
      } else {
        posthog.capture('waitlist_error', { error_code: error.code })
        setErrorMsg("Something went wrong. Try emailing us at hello@getonsiteai.com.")
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
      setFormState('success')
    }
  }

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-6">
        <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-neutral-900 mb-1">You're on the list.</p>
          <p className="text-sm text-neutral-500">We'll reach out when your spot is ready.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <input
          required
          type="text"
          placeholder="Full name"
          value={fields.full_name}
          onChange={set('full_name')}
          className="col-span-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-colors"
        />
        <input
          required
          type="text"
          placeholder="Company name"
          value={fields.company_name}
          onChange={set('company_name')}
          className="col-span-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-colors"
        />
        <input
          required
          type="email"
          placeholder="Work email"
          value={fields.email}
          onChange={set('email')}
          className="col-span-2 sm:col-span-1 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-colors"
        />
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={fields.phone}
          onChange={set('phone')}
          className="col-span-2 sm:col-span-1 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 transition-colors"
        />
        <select
          value={fields.trade}
          onChange={set('trade')}
          className="col-span-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-900 outline-none focus:border-neutral-400 transition-colors appearance-none"
        >
          <option value="">Trade (optional)</option>
          {trades.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {formState === 'error' && (
        <p className="text-xs text-red-500 text-center">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors disabled:opacity-60"
      >
        {formState === 'loading' ? 'Submitting…' : 'Request early access'}
        {formState !== 'loading' && <ArrowRight className="w-4 h-4" />}
      </button>

      <p className="text-xs text-neutral-400 text-center">Free during beta. No credit card required.</p>
    </form>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Nav */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900 tracking-tight">Onsite</span>
          <nav className="flex items-center gap-6">
            <a
              href="#pricing"
              className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#waitlist"
              className="text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors px-3.5 py-2 rounded-lg"
            >
              Get early access
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          <Badge className="mb-6">Now in early access</Badge>

          <h1 className="text-5xl sm:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.08] mb-6">
            The AI App
            <br />
            for Contractors
          </h1>

          <p className="text-lg text-neutral-500 max-w-md mx-auto leading-relaxed mb-10">
            Onsite handles the paperwork so you can stay on the job. Estimates, proposals, and
            change orders — powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#waitlist"
              onClick={() => posthog.capture('cta_clicked', { location: 'hero', label: 'get_early_access' })}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              Get early access <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              onClick={() => posthog.capture('cta_clicked', { location: 'hero', label: 'see_pricing' })}
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              See pricing →
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-neutral-200" />
        </div>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 text-center mb-10">
            What Onsite does
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-neutral-200" />
        </div>

        {/* Pricing */}
        <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 text-center mb-2">
            Pricing
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight text-center mb-3">
            Start for free. Scale when you're ready.
          </h2>
          <p className="text-sm text-neutral-500 text-center mb-12 max-w-sm mx-auto">
            No limits during the beta. Get full access today and we'll work with you on pricing as
            we grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free Trial */}
            <div className="rounded-xl border border-neutral-200 bg-white p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  Free Trial
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-semibold text-neutral-900">$0</span>
                  <span className="text-sm text-neutral-500">/ month</span>
                </div>
                <p className="text-sm text-neutral-500">Full access. No credit card required.</p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {freePlanFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-700 mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm text-neutral-600">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                onClick={() => posthog.capture('cta_clicked', { location: 'pricing', label: 'free_trial' })}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                Get started today <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Enterprise */}
            <div className="rounded-xl border-2 border-neutral-900 bg-neutral-900 p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                  Enterprise
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-semibold text-white">Custom</span>
                </div>
                <p className="text-sm text-neutral-400">For larger teams and contractors.</p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {enterprisePlanFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-neutral-300 mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-sm text-neutral-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@getonsiteai.com?subject=Enterprise inquiry"
                onClick={() => posthog.capture('cta_clicked', { location: 'pricing', label: 'enterprise_contact' })}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                <Building2 className="w-4 h-4" />
                Get in contact
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-neutral-200" />
        </div>

        {/* Waitlist */}
        <section id="waitlist" className="max-w-5xl mx-auto px-6 py-24">
          <div className="rounded-2xl border border-neutral-200 bg-white px-8 py-14 text-center max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-3">
              Ready to work smarter?
            </h2>
            <p className="text-neutral-500 text-sm mb-8 max-w-sm mx-auto">
              Join the waitlist and be among the first contractors to use Onsite. We'll reach out
              when your spot is ready.
            </p>
            <WaitlistForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xs text-neutral-400">© 2026 Onsite</span>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">
              Terms
            </Link>
            <a
              href="mailto:hello@getonsiteai.com"
              className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              hello@getonsiteai.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
