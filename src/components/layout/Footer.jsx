import brandLogo from '../../assets/logo ralph.png'

function FooterSpark() {
  return (
    <svg aria-hidden="true" className="site-footer__spark-icon" viewBox="0 0 24 24">
      <path d="M12 2l1.4 6.2L20 12l-6.6 3.8L12 22l-1.4-6.2L4 12l6.6-3.8L12 2Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-labelledby="site-footer-thanks">
      <div className="site-footer__glow site-footer__glow--left" aria-hidden="true" />
      <div className="site-footer__glow site-footer__glow--right" aria-hidden="true" />

      <div className="site-footer__inner">
        <div className="site-footer__spark" aria-hidden="true">
          <FooterSpark />
        </div>

        <h2 className="site-footer__thanks" id="site-footer-thanks">
          Thanks <span>for</span> stopping <span>by.</span>
        </h2>

        <p className="site-footer__lead">
          I&apos;m always open to new opportunities, collaborations, and interesting conversations.
        </p>

        <div className="site-footer__divider site-footer__divider--soft" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <p className="site-footer__cta">
          Let&apos;s create something <strong>great</strong> together.
        </p>

        <div className="site-footer__divider site-footer__divider--glow" aria-hidden="true" />

        <div className="site-footer__brand">
          <div className="site-footer__brand-row" aria-hidden="true">
            <span className="site-footer__brand-line" />
            <FooterSpark />
            <span className="site-footer__brand-line" />
          </div>

          <a className="site-footer__logo" href="#home">
            <img
              alt="R4lph"
              className="site-footer__logo-image"
              decoding="async"
              height={72}
              loading="lazy"
              src={brandLogo}
              width={260}
            />
          </a>

          <p className="site-footer__tagline">Designing • Developing • Elevating</p>
        </div>

        <p className="site-footer__copy">&copy; {year} R4lph. All rights reserved.</p>
      </div>
    </footer>
  )
}
