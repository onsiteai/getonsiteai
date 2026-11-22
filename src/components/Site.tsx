import { useEffect, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { APP_LOGIN_URL } from '@/lib/links'

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="logo" viewBox="0 0 1677 1677">
        <g fill="none" stroke="currentColor" strokeWidth="138.214" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1579.63 796.728H1580.74V1580.74L796.728 1580.74V1579.63C405.566 1558.41 94.4459 1234.05 94.4459 837.594C94.4459 427.44 427.439 94.4464 837.593 94.4464C1234.05 94.4464 1558.41 405.566 1579.63 796.728Z" />
          <path d="M1580.74 1145.6C1580.74 1385.76 1385.76 1580.74 1145.6 1580.74C905.433 1580.74 710.453 1385.76 710.453 1145.6C710.453 905.436 905.433 710.456 1145.6 710.456C1385.76 710.456 1580.74 905.436 1580.74 1145.6ZM1580.74 1565.6V1505.06H1486.9V1565.6H1580.74Z" />
        </g>
      </symbol>
      <symbol id="mason" viewBox="0 0 24 24">
        <path d="M12 2.6 21.4 12 12 21.4 2.6 12Z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M12 8.4 15.6 12 12 15.6 8.4 12Z" fill="currentColor" />
      </symbol>
      <symbol id="check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></symbol>
      <symbol id="plus" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M12 5v14" /></symbol>
      <symbol id="arrowUp" viewBox="0 0 24 24"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></symbol>
      <symbol id="arrowLeft" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></symbol>
      <symbol id="memory" viewBox="0 0 24 24">
        <path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" />
        <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" />
      </symbol>
    </svg>
  )
}

export function Icon({ name, className = 'i' }: { name: string; className?: string }) {
  return <svg className={className} aria-hidden="true"><use href={`#${name}`} /></svg>
}

// On the home page section links are plain anchors; from other routes they navigate home first.
function SectionLink({ home, id, children }: { home: boolean; id: string; children: ReactNode }) {
  return home ? <a href={`#${id}`}>{children}</a> : <Link to={{ pathname: '/', hash: `#${id}` }}>{children}</Link>
}

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className="site-head gutter">
      <div className="wrap">
        <Link className="brand-link" to="/"><Icon name="logo" className="" />Onsite</Link>
        <nav className="site-nav" aria-label="Main">
          <SectionLink home={home} id="how">How it works</SectionLink>
          <SectionLink home={home} id="features">Features</SectionLink>
          <SectionLink home={home} id="pricing">Pricing</SectionLink>
          <SectionLink home={home} id="faq">FAQ</SectionLink>
        </nav>
        <div className="head-actions">
          <a className="btn ghost sm" href={APP_LOGIN_URL}>Sign in</a>
          {home
            ? <a className="btn brand sm" href="#join">Start free</a>
            : <Link className="btn brand sm" to={{ pathname: '/', hash: '#join' }}>Start free</Link>}
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="gutter">
      <div className="wrap">
        <div className="foot-top">
          <Link className="brand-link" to="/"><Icon name="logo" className="" />Onsite</Link>
          <span>Bid-to-invoice for home renovation contractors.</span>
        </div>
        <div className="foot-legal">
          <span>© {new Date().getFullYear()} Onsite AI, Inc.</span>
          <nav aria-label="Legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <IconSprite />
      <SiteHeader />
      <main className="legal gutter">
        <div className="legal-inner">
          <Link className="back" to="/"><Icon name="arrowLeft" className="i" />Back to Onsite</Link>
          <h1>{title}</h1>
          <p className="eff">{updated}</p>
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

// React Router keeps the old scroll position between routes; reset it, or jump to the #section a link asked for.
export function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}
