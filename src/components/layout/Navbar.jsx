import { useEffect, useState } from 'react'
import navbarLogo from '../../assets/logo-navbar.svg'
import { primaryNavItems } from '../../data/navigation'

function NavbarBrand({ className, onNavigate, compact = false }) {
  return (
    <a className={className} href="#home" onClick={onNavigate}>
      <img
        alt=""
        aria-hidden="true"
        className="glass-navbar__mark"
        decoding="async"
        height={38}
        src={navbarLogo}
        width={82}
      />
      {!compact ? (
        <span className="glass-navbar__brand-copy">
          <strong>R4lph</strong>
          <small>Front-End Developer</small>
        </span>
      ) : null}
    </a>
  )
}

export default function Navbar({ navOpen, setNavOpen, closeNav, activeNavId }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {navOpen ? (
        <button
          type="button"
          className="glass-navbar__backdrop"
          aria-label="Close menu"
          onClick={closeNav}
        />
      ) : null}

      <header
        className={`glass-navbar${navOpen ? ' is-open' : ''}${isScrolled ? ' is-scrolled' : ''}`}
      >
        <nav className="glass-navbar__bar" aria-label="Primary navigation">
          <NavbarBrand
            className="glass-navbar__brand glass-navbar__brand--bar"
            onNavigate={closeNav}
          />

          <button
            type="button"
            className="glass-navbar__menu"
            aria-expanded={navOpen}
            aria-controls="primary-nav-links"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span className="sr-only">{navOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <div className="glass-navbar__panel" id="primary-nav-links">
            <div className="glass-navbar__panel-head">
              <NavbarBrand
                className="glass-navbar__brand glass-navbar__brand--panel"
                compact
                onNavigate={closeNav}
              />
              <button
                type="button"
                className="glass-navbar__sidebar-close"
                aria-label="Close menu"
                onClick={closeNav}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <div className="glass-navbar__links">
              {primaryNavItems.map((item, index) => (
                <a
                  key={item.id}
                  className={`glass-navbar__item${activeNavId === item.id ? ' is-active' : ''}`}
                  href={item.href}
                  onClick={closeNav}
                >
                  <span className="glass-navbar__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="glass-navbar__label glass-navbar__label--full">{item.label}</span>
                  <span className="glass-navbar__label glass-navbar__label--short">
                    {item.shortLabel}
                  </span>
                </a>
              ))}
            </div>

            <div className="glass-navbar__actions">
              <a
                className={`glass-navbar__connect${activeNavId === 'contact' ? ' is-active' : ''}`}
                href="#contact"
                onClick={closeNav}
              >
                <span>Let&apos;s talk</span>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 17 17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
