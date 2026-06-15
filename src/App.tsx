import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HardHat, Zap, ClipboardList, Clock, CheckCircle2, ArrowRight, Handshake } from 'lucide-react'
import posthog from 'posthog-js'
import { cn } from '@/lib/utils'

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

const proPlanFeatures = [
  'Mason AI assistant',
  'Unlimited estimates & proposals',
  'AI-powered bid generation',
  'Client portal & approvals',
  'Change order management',
  'CRM & customer management',
  'Dashboard & analytics',
  'Invoicing',
  'File attachments',
]

const partnerPlanFeatures = [
  'Everything in Pro',
  'Priority support & onboarding',
  'Custom branding & templates',
  'Affiliate partner program',
  'Early access to new features',
]

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

function BillingToggle() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <div className="flex flex-col items-center">
      {/* Toggle */}
      <div className="inline-flex items-center rounded-lg border border-neutral-200 bg-white p-1 mb-10">
        <button
          onClick={() => setIsAnnual(false)}
          className={cn(
            'px-4 py-1.5 text-xs font-medium rounded-md transition-colors',
            !isAnnual ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-neutral-900',
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={cn(
            'px-4 py-1.5 text-xs font-medium rounded-md transition-colors',
            isAnnual ? 'bg-neutral-900 text-white' : 'text-neutral-500 hover:text-neutral-900',
          )}
        >
          Annual (Save 10%)
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
        {/* Pro */}
        <div className="rounded-xl border-2 border-neutral-900 bg-white p-8 flex flex-col gap-6 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
              30-day free trial included
            </span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Pro
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              {isAnnual ? (
                <>
                  <span className="text-4xl font-semibold text-neutral-900">$45</span>
                  <span className="text-sm text-neutral-500">/ month</span>
                  <span className="text-sm text-neutral-400 line-through ml-1">$50</span>
                </>
              ) : (
                <>
                  <span className="text-4xl font-semibold text-neutral-900">$50</span>
                  <span className="text-sm text-neutral-500">/ month</span>
                </>
              )}
            </div>
            <p className="text-sm text-neutral-500">
              {isAnnual ? 'Billed annually.' : 'Everything you need to run your business.'}
            </p>
          </div>

          <ul className="flex flex-col gap-2.5 flex-1">
            {proPlanFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-700 mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-neutral-600">{f}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/waitlist"
            onClick={() =>
              posthog.capture('cta_clicked', {
                location: 'pricing',
                label: 'start_trial',
                billing: isAnnual ? 'annual' : 'monthly',
              })
            }
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors w-full"
          >
            Start free trial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Partner */}
        <div className="rounded-xl border-2 border-neutral-900 bg-neutral-900 p-8 flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              Partner
            </p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-semibold text-white">Custom</span>
            </div>
            <p className="text-sm text-neutral-400">Grow with us.</p>
          </div>

          <ul className="flex flex-col gap-2.5 flex-1">
            {partnerPlanFeatures.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-300 mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-sm text-neutral-300">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="mailto:hello@getonsiteai.com?subject=Partner inquiry"
            onClick={() => posthog.capture('cta_clicked', { location: 'pricing', label: 'partner_contact' })}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            <Handshake className="w-4 h-4" />
            Get in contact
          </a>
        </div>
      </div>
    </div>
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
              href="https://onsite-modules.onrender.com/login"
              onClick={() => posthog.capture('cta_clicked', { location: 'nav', label: 'sign_in' })}
              className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Sign in
            </a>
            <Link
              to="/waitlist"
              onClick={() => posthog.capture('cta_clicked', { location: 'nav', label: 'start_trial' })}
              className="text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors px-3.5 py-2 rounded-lg"
            >
              Start free trial
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          <Badge className="mb-6">Free for 30 days</Badge>

          <h1 className="text-5xl sm:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.08] mb-6">
            AI for the job site,
            <br />
            not the office.
          </h1>

          <p className="text-lg text-neutral-500 max-w-md mx-auto leading-relaxed mb-10">
            Estimates, proposals, change orders, and invoices — generated in minutes so you can
            stay on the job.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/waitlist"
              onClick={() => posthog.capture('cta_clicked', { location: 'hero', label: 'start_trial' })}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              Start free trial <ArrowRight className="w-4 h-4" />
            </Link>
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
            Try Onsite free for 30 days.
          </h2>
          <p className="text-sm text-neutral-500 text-center mb-8 max-w-sm mx-auto">
            Full access to Mason AI and every feature. No limits. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <BillingToggle />
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 pb-24 pt-4">
          <div className="rounded-2xl border border-neutral-200 bg-white px-8 py-14 text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-3">
              Ready to work smarter?
            </h2>
            <p className="text-neutral-500 text-sm mb-8 max-w-sm mx-auto">
              Start your 30-day free trial today. Full access to Mason AI and every feature.
            </p>
            <Link
              to="/waitlist"
              onClick={() => posthog.capture('cta_clicked', { location: 'bottom_cta', label: 'start_trial' })}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              Start free trial <ArrowRight className="w-4 h-4" />
            </Link>
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
