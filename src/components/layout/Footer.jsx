import brandLogo from '../../assets/logo ralph.png'
import { contactSocials } from '../../data/contact'
import { primaryNavItems } from '../../data/navigation'
import { renderContactSocialIcon } from '../../utils/icons/contactIcons'

const footerNavItems = [
  ...primaryNavItems,
  { id: 'contact', href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-labelledby="site-footer-thanks">
      <div className="site-footer__ambient" aria-hidden="true">
        <span className="site-footer__orb site-footer__orb--left" />
        <span className="site-footer__orb site-footer__orb--right" />
        <span className="site-footer__grid" />
      </div>

      <div className="site-footer__inner">
        <div className="site-footer__panel">
          <div className="site-footer__top">
            <div className="site-footer__brand">
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
              <p className="site-footer__brand-copy">
                Front-end developer &amp; UI/UX designer crafting clean, responsive digital experiences.
              </p>
              <div className="site-footer__socials">
                {contactSocials.map((social) => (
                  <a
                    key={social.label}
                    className={`site-footer__social site-footer__social--${social.icon}`}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    {renderContactSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            <nav className="site-footer__nav" aria-label="Footer navigation">
              <h3 className="site-footer__nav-title">Explore</h3>
              <ul>
                {footerNavItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-footer__connect">
              <h3 className="site-footer__nav-title">Let&apos;s talk</h3>
              <p>
                Open to new opportunities, collaborations, and conversations about your next project.
              </p>
              <a className="site-footer__cta-btn" href="#contact">
                Get in touch
              </a>
              <a className="site-footer__email" href="mailto:ralphmatthewpunzalan23@gmail.com">
                ralphmatthewpunzalan23@gmail.com
              </a>
            </div>
          </div>

          <div className="site-footer__divider" aria-hidden="true" />

          <div className="site-footer__hero">
            <h2 className="site-footer__thanks" id="site-footer-thanks">
              Thanks <span>for</span> stopping <span>by.</span>
            </h2>
            <p className="site-footer__lead">
              Let&apos;s create something <strong>great</strong> together.
            </p>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__tagline">Designing • Developing • Elevating</p>
            <p className="site-footer__copy">&copy; {year} R4lph. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
