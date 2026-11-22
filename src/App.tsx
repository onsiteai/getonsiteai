import { useEffect, useRef, useState } from 'react'
import posthog from 'posthog-js'
import { supabase } from '@/lib/supabase'
import { Icon, IconSprite, SiteFooter, SiteHeader } from '@/components/Site'

const trades = ['General remodeling', 'Kitchen & bath', 'Roofing', 'Flooring', 'Painting', 'Electrical', 'Plumbing', 'HVAC', 'Handyman', 'Other']

const steps = [
  {
    tag: 'Describe the job',
    title: 'Talk through the job like you would with a partner.',
    body: "Type or paste your walkthrough notes. Mason knows your rates, your tax, and how you like line items worded, so you don't start from a blank estimate.",
  },
  {
    tag: 'Mason drafts the bid',
    title: 'An itemized bid in the time it takes to load the truck.',
    body: 'Quantities, units, and prices are laid out line by line with tax and totals worked out. Edit anything, then send it to your customer.',
  },
  {
    tag: 'Customer says yes',
    title: 'Your customer approves it from their phone.',
    body: 'They get a branded email link. No account or password. They can accept, decline with a reason, or ask for changes, and you see it right away.',
  },
  {
    tag: 'Handle change orders',
    title: 'Scope changes, approved line by line.',
    body: 'Send a change order when the job grows. Customers approve or decline each item on its own, so the niche goes in and the heated floor can wait.',
  },
  {
    tag: 'Invoice the work',
    title: 'Close it out with a clean invoice.',
    body: "Turn the finished project into an itemized invoice that includes every approved change. Track what's paid. Online card and bank payments are coming soon.",
  },
]

const individualFeatures = ['One user', 'Unlimited jobs & invoices', 'AI estimating (Mason AI)', 'Custom estimation worksheets', 'Digital change orders & client approvals', 'Integrated payments (Stripe)', 'Client portal', 'Walkthrough photos', 'Automatic follow-ups', 'Job document hub']
const teamsFeatures = ['2 or more users', 'Every Individual feature, for everyone', 'Unlimited jobs & invoices', 'AI estimating (Mason AI)', 'Custom estimation worksheets', 'Digital change orders & client approvals', 'Integrated payments', 'Client portal', 'Walkthrough photos', 'Automatic follow-ups']

const faqs = [
  ['What does Onsite cost?', 'Individual is $75/month for one user, or $70/month billed annually. Teams is $65 per user per month, or $60 per user billed annually. Both start with a 14-day free trial, no credit card needed.'],
  ['Who is Onsite for?', 'Solo operators and crews of up to about ten people doing home renovation and remodeling, especially anyone still running bids out of spreadsheets, paper, or text threads.'],
  ['Do my customers need to sign up?', 'No. They get an email link that opens your bid. They can accept, decline, or ask for changes without creating an account or a password.'],
  ['Can I run it from my phone?', 'Yes. Onsite is built for the field first. Create bids, answer customers, and send invoices from your phone, then pick up on a laptop at home if you want a bigger screen.'],
  ['Can customers pay online?', 'Online card and bank payments are on the way. Today you can send itemized invoices and mark them paid when you collect.'],
]

function Phone({ screen }: { screen: number }) {
  const on = (i: number) => `scr${screen === i ? ' on' : ''}`
  return (
    <div className="phone" aria-hidden="true">
      <div className="screens">
        <div className={on(0)}>
          <div className="scr-head"><div><b>Mason</b><small>Guest bath, Ortiz</small></div><span className="badge b">New bid</span></div>
          <div className="scr-body">
            <div className="bubble-me">Guest bath for Dana Ortiz on Alder St. Demo tub surround, 48 sq ft tile, 36" vanity, reset toilet, about 16 hrs plumbing.</div>
            <div className="bubble-mason"><div className="who"><Icon name="mason" className="" />Mason</div>On it. Using your $95/hr plumbing rate and 8.25% tax.</div>
            <div className="typing"><i /><i /><i /></div>
          </div>
        </div>
        <div className={on(1)}>
          <div className="scr-head"><div><b>Bid B-0217</b><small>Dana Ortiz</small></div><span className="badge plain">Draft</span></div>
          <div className="scr-body">
            <div className="lines">
              <div className="line"><span>Demo &amp; haul-away</span><small>1 job × $850.00</small><span className="amt">$850.00</span></div>
              <div className="line"><span>Tile surround</span><small>48 sq ft × $18.50</small><span className="amt">$888.00</span></div>
              <div className="line"><span>36" vanity install</span><small>1 ea × $1,240.00</small><span className="amt">$1,240.00</span></div>
              <div className="line"><span>Toilet reset</span><small>1 ea × $485.00</small><span className="amt">$485.00</span></div>
              <div className="line"><span>Plumbing rough-in</span><small>16 hr × $95.00</small><span className="amt">$1,520.00</span></div>
            </div>
            <div className="totals">
              <div><span>Subtotal</span><span>$4,983.00</span></div>
              <div><span>Tax 8.25%</span><span>$411.10</span></div>
              <div className="t"><span>Total</span><span>$5,394.10</span></div>
            </div>
            <div className="scr-btn">Send to Dana</div>
          </div>
        </div>
        <div className={on(2)}>
          <div className="scr-head"><div><b>Ridgeline Remodeling</b><small>Bid for Dana Ortiz</small></div><span className="badge g">Accepted</span></div>
          <div className="scr-body">
            <div className="scr-card"><span className="label">Guest bath remodel</span><span className="figure num">$5,394.10</span><span className="muted">Sent Oct 8, accepted Oct 9</span></div>
            <div className="bubble-mason"><div className="who">Dana Ortiz</div>Looks great, see you Monday!</div>
            <div className="scr-btn">Bid accepted</div>
            <div className="scr-btn alt">Request changes</div>
          </div>
        </div>
        <div className={on(3)}>
          <div className="scr-head"><div><b>Change order #1</b><small>Guest bath, Ortiz</small></div><span className="badge plain">2 items</span></div>
          <div className="scr-body">
            <div className="co"><span>Recessed shower niche</span><small>+$320.00</small><span className="badge g">Accepted</span></div>
            <div className="co"><span>Heated floor mat</span><small>+$1,150.00</small><span className="badge r">Declined</span></div>
            <div className="totals" style={{ marginTop: '2cqw' }}>
              <div><span>Original bid</span><span>$5,394.10</span></div>
              <div><span>Niche with tax</span><span>$346.40</span></div>
              <div className="t"><span>New total</span><span>$5,740.50</span></div>
            </div>
          </div>
        </div>
        <div className={on(4)}>
          <div className="scr-head"><div><b>Invoice INV-1042</b><small>Dana Ortiz</small></div><span className="badge g">Paid</span></div>
          <div className="scr-body">
            <div className="scr-card">
              <span className="label">Collected</span>
              <span className="figure num">$5,740.50</span>
              <div className="scr-meter"><span className="g" style={{ width: '100%' }} /></div>
              <span className="muted">Paid in full Oct 24</span>
            </div>
            <div className="totals">
              <div><span>Bid B-0217</span><span>$5,394.10</span></div>
              <div><span>Change order #1</span><span>$346.40</span></div>
              <div className="t"><span>Total</span><span>$5,740.50</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Story() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  // The active step is whichever one's top region is closest to a line 45% down the viewport, so a step stays lit until the next one is clearly in view.
  useEffect(() => {
    let ticking = false
    function pick() {
      ticking = false
      const line = innerHeight * 0.45
      let best = 0
      let bestD = Infinity
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const d = Math.abs(r.top + Math.min(r.height, innerHeight * 0.35) / 2 - line)
        if (d < bestD) { bestD = d; best = i }
      })
      setActive(best)
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(pick) }
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  function jump(i: number) {
    setActive(i)
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    stepRefs.current[i]?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })
  }

  return (
    <div className="story">
      <div className="phone-wrap"><Phone screen={active} /></div>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.tag} ref={(el) => { stepRefs.current[i] = el }} className={`step${active === i ? ' is-on' : ''}`}>
            <button className="step-tag" type="button" onClick={() => jump(i)}><b>{i + 1}</b>{s.tag}</button>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

type FormState = 'idle' | 'loading' | 'success' | 'error'

function SignupForm() {
  const [state, setState] = useState<FormState>(() =>
    typeof window !== 'undefined' && localStorage.getItem('onsite_waitlist_joined') ? 'success' : 'idle',
  )
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState({ name: '', email: '' })
  const [fields, setFields] = useState({ full_name: '', company_name: '', email: '', phone: '', trade: trades[0] })

  function set(key: keyof typeof fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setFields((f) => ({ ...f, [key]: e.target.value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const email = fields.email.trim().toLowerCase()
    const name = fields.full_name.trim()
    const company = fields.company_name.trim()
    const missing = [!name && 'your name', !company && 'your company', !email && 'your email'].filter(Boolean)
    if (missing.length) { setError(`Add ${missing.join(', ')} to request access.`); setState('error'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('That email looks incomplete. Check it and try again.'); setState('error'); return }

    setState('loading')
    setError('')
    posthog.capture('waitlist_submitted', { trade: fields.trade || null, has_phone: !!fields.phone.trim() })

    const { error: dbError } = await supabase.from('waitlist').insert({
      email,
      full_name: name,
      company_name: company,
      phone: fields.phone.trim() || null,
      trade: fields.trade || null,
      referral_source: 'website',
    })

    if (dbError && dbError.code !== '23505') {
      posthog.capture('waitlist_error', { error_code: dbError.code })
      setError('Something went wrong. Try again, or email us at hello@getonsiteai.com.')
      setState('error')
      return
    }
    if (dbError) {
      posthog.capture('waitlist_already_registered')
    } else {
      posthog.identify(email, { name, company, trade: fields.trade || null })
      posthog.capture('waitlist_joined', { trade: fields.trade || null, has_phone: !!fields.phone.trim() })
    }
    localStorage.setItem('onsite_waitlist_joined', '1')
    setSubmitted({ name: name.split(' ')[0], email })
    setState('success')
  }

  if (state === 'success') {
    return (
      <div className="signup">
        <div className="done">
          <span className="badge g">Request received</span>
          <b>You're on the list.</b>
          <p>
            {submitted.email
              ? `Thanks, ${submitted.name}. We'll email your sign-in link to ${submitted.email} as soon as your account is approved.`
              : "We'll email your sign-in link as soon as your account is approved."}{' '}
            Your 14-day free trial starts when you're in.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="signup" onSubmit={onSubmit} noValidate>
      <p className="intro">Tell us about your business and we'll set up your account. Your 14-day free trial starts as soon as you're approved, and you don't need a credit card.</p>
      <div className="two">
        <div className="field"><label htmlFor="wl-name">Full name</label><input id="wl-name" autoComplete="name" placeholder="Jane Smith" value={fields.full_name} onChange={set('full_name')} required /></div>
        <div className="field"><label htmlFor="wl-company">Company</label><input id="wl-company" autoComplete="organization" placeholder="Ridgeline Remodeling" value={fields.company_name} onChange={set('company_name')} required /></div>
      </div>
      <div className="field"><label htmlFor="wl-email">Email</label><input id="wl-email" type="email" autoComplete="email" placeholder="jane@ridgelineremodel.com" value={fields.email} onChange={set('email')} required /></div>
      <div className="two">
        <div className="field"><label htmlFor="wl-phone">Phone (optional)</label><input id="wl-phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" value={fields.phone} onChange={set('phone')} /></div>
        <div className="field"><label htmlFor="wl-trade">Main trade</label>
          <select id="wl-trade" value={fields.trade} onChange={set('trade')}>
            {trades.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      {state === 'error' && <p className="err" role="alert">{error}</p>}
      <button className="btn brand" type="submit" disabled={state === 'loading'}>{state === 'loading' ? 'Sending…' : 'Request access'}</button>
      <p className="fine">No credit card needed.</p>
    </form>
  )
}

export default function App() {
  return (
    <>
      <IconSprite />
      <SiteHeader home />
      <main className="gutter">
        <section className="hero wrap" aria-labelledby="hero-h">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="label">For remodelers and small crews</span>
              <h1 id="hero-h">Bid the job before you leave the driveway.</h1>
              <p className="lede">Onsite is the bid-to-invoice app for home renovation contractors. Tell Mason about the job and it builds an itemized bid you can send from your phone.</p>
              <div className="hero-ctas">
                <a className="btn brand" href="#join" onClick={() => posthog.capture('cta_clicked', { location: 'hero', label: 'start_free' })}>Start free</a>
                <a className="btn" href="#how">See how it works</a>
              </div>
              <p className="offer">Free for 14 days. No credit card needed.</p>
            </div>
            <figure className="hero-media">
              <img src="/images/kitchen.jpg" width={1000} height={667} alt="Finished kitchen remodel with white shaker cabinets, hex tile backsplash and a walnut island" />
              <div className="float mason-card reveal">
                <Icon name="mason" className="" />
                <p><b>Mason</b> drafted 14 line items from your walkthrough notes. Total <b className="num">$48,500.00</b>, ready to send.</p>
              </div>
              <div className="float cash reveal">
                <div className="top"><span className="label">Johnson kitchen</span><span className="badge g">Accepted</span></div>
                <span className="figure sm">$24,250.00</span>
                <div className="meter thin"><span className="g" style={{ width: '50%' }} /><span className="a" style={{ width: '25%' }} /></div>
                <span className="label" style={{ fontSize: 12 }}>Collected of $48,500.00</span>
              </div>
            </figure>
          </div>
          <div className="trades" aria-label="Trades Onsite is built for">
            <span className="label">Built for</span>
            {['General remodeling', 'Kitchen & bath', 'Roofing', 'Flooring', 'Painting', 'Handyman'].map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </section>

        <section className="block wrap" id="how" aria-labelledby="how-h">
          <div className="sec-head">
            <span className="label">How it works</span>
            <h2 id="how-h">From walkthrough to paid invoice, in one app.</h2>
            <p>Most contractors spend their evenings rebuilding estimates in spreadsheets. Onsite handles the paperwork for the whole job, from the first bid to the final invoice.</p>
          </div>
          <Story />
        </section>

        <section className="block wrap" id="features" aria-labelledby="feat-h">
          <div className="sec-head">
            <span className="label">What's inside</span>
            <h2 id="feat-h">Everything a small crew needs to run the paperwork.</h2>
          </div>
          <div className="bento">
            <article className="widget w-mason">
              <span className="label w-label"><Icon name="mason" className="" />Mason, your AI estimator</span>
              <h3>Tell it once. It remembers how you work.</h3>
              <p>Mason keeps notes on your pricing and preferences across every conversation. Add standing instructions for your company and every bid follows them.</p>
              <div className="memories">
                {['Plumbing labor is $95/hr, electrical is $110/hr.', 'Add 10% material overage on all tile jobs.', 'Always list demo and haul-away as its own line.'].map((m) => (
                  <div key={m} className="memory"><Icon name="memory" />{m}</div>
                ))}
              </div>
              <div className="composer" aria-hidden="true"><span>Ask Mason…</span><b><Icon name="arrowUp" /></b></div>
            </article>
            <article className="widget w-photo">
              <img src="/images/bathroom.jpg" width={1000} height={668} alt="Renovated bathroom with a tiled walk-in shower" loading="lazy" />
              <div className="body">
                <span className="label">Customer portal</span>
                <h3>A professional look on every job.</h3>
                <p>Bids, change orders, and invoices arrive with your logo, license number, and payment terms.</p>
              </div>
            </article>
            <article className="widget w-3">
              <span className="label">Reuse past work</span>
              <h3>Start from your last bathroom.</h3>
              <div className="rows">
                <div><span>Tile surround <small>48 sq ft</small></span><span>$888.00</span></div>
                <div><span>36" vanity install <small>1 ea</small></span><span>$1,240.00</span></div>
                <div><span>Plumbing rough-in <small>16 hr</small></span><span>$1,520.00</span></div>
              </div>
              <p>Copy line items from a past project and adjust quantities instead of rebuilding them.</p>
            </article>
            <article className="widget w-2">
              <span className="label">Job photos</span>
              <h3>Photos in the order you took them.</h3>
              <div className="thumbs">
                <figure><img src="/images/interior.jpg" alt="Living room during renovation" loading="lazy" /><figcaption>Oct 9</figcaption></figure>
                <figure><img src="/images/bathroom.jpg" alt="Bathroom tile work" loading="lazy" /><figcaption>Oct 13</figcaption></figure>
                <figure><img src="/images/kitchen.jpg" alt="Finished kitchen" loading="lazy" /><figcaption>Oct 20</figcaption></figure>
              </div>
              <p>Every upload lands on the project timeline by the date it was shot.</p>
            </article>
            <article className="widget w-2">
              <span className="label w-label">Schedule <span className="soon">Soon</span></span>
              <h3>See every job and due date.</h3>
              <div className="today">
                <div className="date-tile"><small>Thu</small><strong>16</strong></div>
                <ul className="stops">
                  <li><span>8:00 AM Ortiz tile</span><span className="badge b">Work</span></li>
                  <li><span>Invoice INV-1043</span><span className="badge a">Due</span></li>
                </ul>
              </div>
              <p>A calendar of work windows and payment due dates, plus a to-do list of what needs you next.</p>
            </article>
            <article className="widget w-2">
              <span className="label">Your crew</span>
              <h3>Bring the team in.</h3>
              <div className="avatars"><span className="avatar b">JR</span><span className="avatar g">MK</span><span className="avatar a">TS</span></div>
              <p>Invite teammates by email and share one customer list across every project.</p>
            </article>
          </div>
        </section>

        <section className="block wrap" id="pricing" aria-labelledby="price-h">
          <div className="sec-head">
            <span className="label">Pricing</span>
            <h2 id="price-h">Simple pricing. Start free for 14 days.</h2>
            <p>No credit card needed to start.</p>
          </div>
          <div className="plans">
            <article className="plan">
              <span className="plan-name">Individual <small>Single user</small></span>
              <div className="price"><sup>$</sup>75</div>
              <span className="per">per month</span>
              <p className="annual">or $70/month billed annually, save $60/yr</p>
              <ul className="checks">{individualFeatures.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>
              <div className="plan-cta">
                <a className="btn" href="#join" onClick={() => posthog.capture('cta_clicked', { location: 'pricing', label: 'individual' })}>Start free, 14 days</a>
                <small>No card required to start</small>
              </div>
            </article>
            <article className="plan plan-team">
              <span className="plan-name">Teams <span className="best">Best value</span></span>
              <div className="price"><sup>$</sup>65</div>
              <span className="per">per user / per month</span>
              <p className="annual">or $60/user/month billed annually, save $60 per user/yr</p>
              <div className="team-note">
                <p>Everything in Individual, at a lower price per person. The more people on your account, the less each one costs.</p>
                <p><b>2 users $130/mo</b> &nbsp; <b>3 users $195/mo</b></p>
              </div>
              <ul className="checks">{teamsFeatures.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>
              <div className="plan-cta">
                <a className="btn" href="#join" onClick={() => posthog.capture('cta_clicked', { location: 'pricing', label: 'teams' })}>Start free, 14 days</a>
                <small>No card required to start</small>
              </div>
            </article>
          </div>
        </section>

        <section className="block wrap" id="join" aria-labelledby="join-h">
          <div className="join">
            <div className="join-photo">
              <img src="/images/interior.jpg" alt="Bright, open living space after a renovation" loading="lazy" />
              <div className="caption">
                <h2 id="join-h">Get your evenings back.</h2>
                <ul>
                  <li><Icon name="check" />Full access to Mason and every feature</li>
                  <li><Icon name="check" />Works on any phone, no app store needed</li>
                  <li><Icon name="check" />Talk directly with the team building it</li>
                </ul>
              </div>
            </div>
            <SignupForm />
          </div>
        </section>

        <section className="block wrap faq" id="faq" aria-labelledby="faq-h">
          <div className="sec-head">
            <span className="label">FAQ</span>
            <h2 id="faq-h">Questions from the jobsite.</h2>
          </div>
          <div>
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}<Icon name="plus" /></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter home />
    </>
  )
}
