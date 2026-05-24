import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'

type Mode = 'signin' | 'forgot'
type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Login() {
  const [mode, setMode] = useState<Mode>('signin')
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    if (!agreed) return
    setFormState('loading')
    setErrorMsg('')

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    })

    if (error) {
      setErrorMsg(
        error.message === 'Invalid login credentials'
          ? 'Incorrect email or password.'
          : error.message,
      )
      setFormState('error')
    } else {
      setFormState('success')
    }
  }

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim().toLowerCase(),
      { redirectTo: `${window.location.origin}/login` },
    )

    if (error) {
      setErrorMsg(error.message)
      setFormState('error')
    } else {
      setFormState('success')
    }
  }

  const canSubmit = agreed && email.trim().length > 0 && (mode === 'forgot' || password.length > 0)

  if (formState === 'success' && mode === 'forgot') {
    return <SuccessCard message="Check your email for a password reset link." onBack={() => { setMode('signin'); setFormState('idle') }} />
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Nav */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
          <Link to="/" className="text-sm font-semibold text-neutral-900 tracking-tight hover:text-neutral-600 transition-colors">
            Onsite
          </Link>
        </div>
      </header>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl border border-neutral-200 px-8 py-10 shadow-sm">

            {/* Header */}
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center mb-5">
                <span className="text-white text-sm font-bold tracking-tight">O</span>
              </div>
              <h1 className="text-xl font-semibold text-neutral-900 tracking-tight mb-1">
                {mode === 'signin' ? 'Sign in to Onsite' : 'Reset your password'}
              </h1>
              <p className="text-sm text-neutral-500">
                {mode === 'signin'
                  ? 'Welcome back. Enter your credentials to continue.'
                  : "We'll send a reset link to your email address."}
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={mode === 'signin' ? handleSignIn : handleForgotPassword}
              className="flex flex-col gap-4"
            >
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-neutral-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                />
              </div>

              {/* Password */}
              {mode === 'signin' && (
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-xs font-medium text-neutral-700">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => { setMode('forgot'); setFormState('idle'); setErrorMsg('') }}
                      className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      autoComplete="current-password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 pr-10 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-400 focus:bg-white transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Agreement checkbox */}
              <label className={cn(
                'flex items-start gap-3 cursor-pointer rounded-lg border p-3.5 transition-colors',
                agreed ? 'border-neutral-300 bg-neutral-50' : 'border-neutral-200 bg-white',
              )}>
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={cn(
                    'w-4 h-4 rounded flex items-center justify-center border transition-colors',
                    agreed ? 'bg-neutral-900 border-neutral-900' : 'bg-white border-neutral-300',
                  )}>
                    {agreed && (
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-neutral-600 leading-relaxed">
                  I have read and agree to the{' '}
                  <Link
                    to="/terms"
                    target="_blank"
                    className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/privacy"
                    target="_blank"
                    className="text-neutral-900 font-medium underline underline-offset-2 hover:text-neutral-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Error */}
              {formState === 'error' && errorMsg && (
                <p className="text-xs text-red-500 text-center">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmit || formState === 'loading'}
                className={cn(
                  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors',
                  canSubmit && formState !== 'loading'
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                    : 'bg-neutral-100 text-neutral-400 cursor-not-allowed',
                )}
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {mode === 'signin' ? 'Signing in…' : 'Sending link…'}
                  </>
                ) : (
                  <>
                    {mode === 'signin' ? 'Sign in' : 'Send reset link'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Back to sign in */}
            {mode === 'forgot' && (
              <button
                type="button"
                onClick={() => { setMode('signin'); setFormState('idle'); setErrorMsg('') }}
                className="mt-4 w-full text-center text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                ← Back to sign in
              </button>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-neutral-400">
            Don't have an account?{' '}
            <Link to="/#waitlist" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
              Join the waitlist
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

function SuccessCard({ message, onBack }: { message: string; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
          <Link to="/" className="text-sm font-semibold text-neutral-900 tracking-tight hover:text-neutral-600 transition-colors">
            Onsite
          </Link>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-neutral-200 px-8 py-10 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mx-auto mb-5">
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none">
              <path d="M3 10L8 15L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-neutral-900 mb-1">Check your email</p>
          <p className="text-sm text-neutral-500 mb-6">{message}</p>
          <button
            onClick={onBack}
            className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← Back to sign in
          </button>
        </div>
      </div>
    </div>
  )
}
