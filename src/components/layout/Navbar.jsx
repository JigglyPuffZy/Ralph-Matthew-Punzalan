import brandMark from '../../assets/logo-navbar.svg'
import { primaryNavItems } from '../../data/navigation'

export default function Navbar({ navOpen, setNavOpen, closeNav, activeNavId }) {
  return (
    <>
      {navOpen ? (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="Close menu"
          onClick={closeNav}
        />
      ) : null}

      <header className={`site-header${navOpen ? ' is-open' : ''}`}>
        <div className="site-header__accent" aria-hidden="true" />

        <div className="site-header__bar">
          <div className="site-header__inner">
            <a className="site-header__brand" href="#home" onClick={closeNav}>
              <img
                alt=""
                className="site-header__brand-mark"
                decoding="async"
                height={38}
                src={brandMark}
                width={82}
              />
              <span className="site-header__brand-divider" aria-hidden="true" />
              <span className="site-header__brand-copy">
                <strong>R4lph</strong>
                <small>Front-End & UI/UX</small>
              </span>
            </a>

            <nav className="site-header__nav" aria-label="Primary navigation">
              <div className="site-header__nav-track" id="primary-nav-links">
                {primaryNavItems.map((item, index) => (
                  <a
                    key={item.id}
                    className={`site-header__link${activeNavId === item.id ? ' is-active' : ''}`}
                    href={item.href}
                    onClick={closeNav}
                  >
                    <span className="site-header__link-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="site-header__link-label site-header__link-label--full">
                      {item.label}
                    </span>
                    <span className="site-header__link-label site-header__link-label--short">
                      {item.shortLabel}
                    </span>
                  </a>
                ))}
              </div>
            </nav>

            <div className="site-header__actions">
              <span className="site-header__status">
                <span className="site-header__status-dot" aria-hidden="true" />
                Open to work
              </span>
              <a
                className={`site-header__cta${activeNavId === 'contact' ? ' is-active' : ''}`}
                href="#contact"
                onClick={closeNav}
              >
                <span>Let&apos;s talk</span>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M7 17 17 7" fill="none" stroke="currentColor" strokeWidth="1.75" />
                  <path d="M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.75" />
                </svg>
              </a>
            </div>

            <button
              type="button"
              className="site-header__toggle"
              aria-expanded={navOpen}
              aria-controls="site-header-mobile-menu"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className="site-header__toggle-lines" aria-hidden="true">
                <span />
                <span />
              </span>
              <span className="sr-only">{navOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>

        <div
          className="site-header__mobile"
          id="site-header-mobile-menu"
          aria-hidden={!navOpen}
        >
          <div className="site-header__mobile-glow" aria-hidden="true" />

          <div className="site-header__mobile-head">
            <a className="site-header__brand site-header__brand--mobile" href="#home" onClick={closeNav}>
              <img alt="" className="site-header__brand-mark" height={38} src={brandMark} width={82} />
              <span className="site-header__brand-copy">
                <strong>R4lph</strong>
                <small>Portfolio</small>
              </span>
            </a>
            <button
              type="button"
              className="site-header__mobile-close"
              aria-label="Close menu"
              onClick={closeNav}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            </button>
          </div>

          <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
            {primaryNavItems.map((item, index) => (
              <a
                key={item.id}
                className={`site-header__mobile-link${activeNavId === item.id ? ' is-active' : ''}`}
                href={item.href}
                onClick={closeNav}
                style={{ '--nav-delay': `${index * 60}ms` }}
              >
                <span className="site-header__mobile-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="site-header__mobile-label">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="site-header__mobile-foot">
            <span className="site-header__status site-header__status--mobile">
              <span className="site-header__status-dot" aria-hidden="true" />
              Available for freelance & full-time roles
            </span>
            <a
              className="site-header__mobile-cta"
              href="#contact"
              onClick={closeNav}
            >
              Start a project
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.75" />
                <path d="m13 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
