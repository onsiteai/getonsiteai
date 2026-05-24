import { HardHat, Zap, ClipboardList, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: ClipboardList,
    title: 'Smart Estimating',
    description: 'Generate accurate job estimates in minutes, not hours.',
  },
  {
    icon: Zap,
    title: 'Instant Proposals',
    description: 'Send professional proposals to clients right from the field.',
  },
  {
    icon: Clock,
    title: 'Save Hours Daily',
    description: 'Automate the admin work so you can focus on the job.',
  },
  {
    icon: HardHat,
    title: 'Built for the Field',
    description: 'Designed for contractors who work with their hands.',
  },
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

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Nav */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900 tracking-tight">Onsite</span>
          <a
            href="#waitlist"
            className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Get early access
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          <Badge className="mb-6">Now in early access</Badge>

          <h1 className="text-5xl sm:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.08] mb-6">
            The AI App
            <br />
            for Contractors
          </h1>

          <p className="text-lg text-neutral-500 max-w-md mx-auto leading-relaxed mb-10">
            Onsite handles the paperwork so you can stay on the job. Estimates, proposals, and
            scheduling — powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              id="waitlist"
              href="mailto:hello@getonsiteai.com"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              Join the waitlist
            </a>
            <span className="text-sm text-neutral-400">Free during beta</span>
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

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div className="rounded-2xl border border-neutral-200 bg-white px-8 py-14 text-center">
            <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-3">
              Ready to work smarter?
            </h2>
            <p className="text-neutral-500 text-sm mb-8 max-w-sm mx-auto">
              Be among the first contractors to use Onsite. Sign up and we'll reach out when
              you're next in line.
            </p>
            <a
              href="mailto:hello@getonsiteai.com"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              Get early access
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xs text-neutral-400">© 2026 Onsite</span>
          <span className="text-xs text-neutral-400">getonsiteai.com</span>
        </div>
      </footer>
    </div>
  )
}
