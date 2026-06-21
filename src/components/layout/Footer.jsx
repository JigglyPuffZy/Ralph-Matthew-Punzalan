import brandLogo from '../../assets/logo ralph.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-labelledby="site-footer-thanks">
      <div className="site-footer__glow site-footer__glow--left" aria-hidden="true" />
      <div className="site-footer__glow site-footer__glow--right" aria-hidden="true" />

      <div className="site-footer__inner">
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

        <p className="site-footer__tagline">Designing • Developing • Elevating</p>

        <p className="site-footer__copy">&copy; {year} R4lph. All rights reserved.</p>
      </div>
    </footer>
  )
}
