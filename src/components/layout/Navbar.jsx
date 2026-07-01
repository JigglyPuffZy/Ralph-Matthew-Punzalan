import brandLogo from '../../assets/logo ralph.png'
import { primaryNavItems } from '../../data/navigation'

function NavbarBrand({ className, onNavigate }) {
  return (
    <a className={className} href="#home" onClick={onNavigate}>
      <img
        alt="R4lph"
        className="glass-navbar__brand-logo"
        decoding="async"
        height={128}
        src={brandLogo}
        width={460}
      />
    </a>
  )
}

export default function Navbar({ navOpen, setNavOpen, closeNav, activeNavId }) {
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

      <nav
        className={`glass-navbar${navOpen ? ' is-open' : ''}`}
        aria-label="Primary navigation"
      >
        <NavbarBrand className="glass-navbar__brand glass-navbar__brand--mobile" onNavigate={closeNav} />

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

        <div className="glass-navbar__inner">
          <div className="glass-navbar__sidebar-head">
            <NavbarBrand
              className="glass-navbar__brand glass-navbar__brand--sidebar"
              onNavigate={closeNav}
            />
            <button
              type="button"
              className="glass-navbar__sidebar-close"
              aria-label="Close menu"
              onClick={closeNav}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <NavbarBrand
            className="glass-navbar__brand glass-navbar__brand--desktop"
            onNavigate={closeNav}
          />

          <div className="glass-navbar__links" id="primary-nav-links">
            {primaryNavItems.map((item) => (
              <a
                key={item.id}
                className={`glass-navbar__item${activeNavId === item.id ? ' is-active' : ''}`}
                href={item.href}
                onClick={closeNav}
              >
                <span className="glass-navbar__label glass-navbar__label--full">{item.label}</span>
                <span className="glass-navbar__label glass-navbar__label--short">
                  {item.shortLabel}
                </span>
              </a>
            ))}
          </div>

          <a
            className={`glass-navbar__connect${activeNavId === 'contact' ? ' is-active' : ''}`}
            href="#contact"
            onClick={closeNav}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  )
}
