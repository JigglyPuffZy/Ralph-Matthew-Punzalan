import contactUsImage from '../../assets/Contact Us Image.png'
import { contactChannels, contactLocation, contactQuotes, contactSocials } from '../../data/contact'
import { renderContactChannelIcon, renderContactSocialIcon } from '../../utils/icons/contactIcons'

export default function ContactSection({
  contactForm,
  contactQuoteIndex,
  handleContactClear,
  handleContactSubmit,
  isSubmitting,
  submitStatus,
  updateContactField,
}) {
  return (
    <section className="contact-us" id="contact" aria-labelledby="contact-title">
      <div className="contact-us__glow contact-us__glow--left" aria-hidden="true" />
      <div className="contact-us__inner">
        <div className="contact-us__hero">
          <div className="contact-us__intro">
            <h2 id="contact-title">
              Let&apos;s Work
              <span>Together</span>
            </h2>
            <p>
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
              Let&apos;s create something amazing together!
            </p>

            <div className="contact-us__channels">
              {contactChannels.map((channel) => (
                <a
                  className="contact-us__channel"
                  href={channel.href}
                  key={channel.title}
                  rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                >
                  <i>{renderContactChannelIcon(channel.icon)}</i>
                  <div>
                    <strong>{channel.title}</strong>
                    <span>{channel.detail}</span>
                  </div>
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-us__visual">
            <div className="contact-us__visual-card">
              <div className="contact-us__envelope-scene">
                <img
                  alt="Glowing purple envelope with orbital rings"
                  className="contact-us__visual-image"
                  src={contactUsImage}
                />
              </div>

              <div className="contact-us__response">
                <div className="contact-us__response-head">
                  <i>
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3 4 7v6c0 4 3 6 8 8 5-2 8-4 8-8V7l-8-4Z" />
                      <path d="m9 12 2 2 4-5" />
                    </svg>
                  </i>
                  <div>
                    <strong>
                      Quick Response
                      <span className="contact-us__online-dot" aria-hidden="true" />
                    </strong>
                    <span>Usually replies within 24 hours</span>
                  </div>
                </div>
                <blockquote className="contact-us__quote">
                  <i aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M7.17 6.17A5.001 5.001 0 0 0 2 11v5h5v-5H5.17A3.001 3.001 0 0 1 7.17 6.17Z" />
                      <path d="M17.17 6.17A5.001 5.001 0 0 0 12 11v5h5v-5h-2.83A3.001 3.001 0 0 1 17.17 6.17Z" />
                    </svg>
                  </i>
                  <p key={contactQuoteIndex}>{contactQuotes[contactQuoteIndex]}</p>
                </blockquote>
              </div>
            </div>
          </div>

          <form className="contact-us__form" onSubmit={handleContactSubmit}>
            <header className="contact-us__form-head">
              <i>
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="12" rx="2" />
                  <path d="m5 8 7 5 7-5" />
                </svg>
              </i>
              <div>
                <h3>Send a Message</h3>
                <p>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
              </div>
            </header>

            <div className="contact-us__form-grid">
              <label>
                Your Name
                <input
                  name="name"
                  onChange={updateContactField('name')}
                  placeholder="Enter your name"
                  required
                  type="text"
                  value={contactForm.name}
                />
              </label>
              <label>
                Your Email
                <input
                  name="email"
                  onChange={updateContactField('email')}
                  placeholder="Enter your email"
                  required
                  type="email"
                  value={contactForm.email}
                />
              </label>
            </div>

            <label>
              Subject
              <input
                name="subject"
                onChange={updateContactField('subject')}
                placeholder="What's this about?"
                required
                type="text"
                value={contactForm.subject}
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                onChange={updateContactField('message')}
                placeholder="Tell me about your project..."
                required
                rows={5}
                value={contactForm.message}
              />
            </label>

            <div className="contact-us__form-actions">
              <button
                className="contact-us__submit"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
              <button
                className="contact-us__clear"
                disabled={isSubmitting}
                onClick={handleContactClear}
                type="button"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                Clear Form
              </button>
            </div>

            {submitStatus ? (
              <p
                className={`contact-us__form-status contact-us__form-status--${submitStatus.type}`}
                role="status"
              >
                {submitStatus.text}
              </p>
            ) : null}

            <p className="contact-us__privacy">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              Your information is safe with me. I respect your privacy.
            </p>
          </form>
        </div>

        <div className="contact-us__info">
          <article className="contact-us__info-panel">
            <div className="contact-us__info-panel-col">
              <header className="contact-us__info-head">
                <i>
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3" />
                    <path d="M3 20a6 6 0 0 1 12 0" />
                    <circle cx="17" cy="9" r="2.5" />
                    <path d="M14 20a5 5 0 0 1 7-3" />
                  </svg>
                </i>
                <div>
                  <h3>Let&apos;s Connect</h3>
                  <p>I&apos;m active on these platforms. Feel free to reach out!</p>
                </div>
              </header>
              <div className="contact-us__socials-tray">
                <div className="contact-us__socials">
                  {contactSocials.map((social) => (
                    <a
                      aria-label={social.label}
                      className={`contact-us__socials-link contact-us__socials-link--${social.icon}`}
                      href={social.href}
                      key={social.label}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="contact-us__socials-link-icon">
                        {renderContactSocialIcon(social.icon)}
                      </span>
                      <span className="contact-us__socials-link-label">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-us__info-panel-col">
              <header className="contact-us__info-head">
                <i>
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </i>
                <div>
                  <h3>Availability</h3>
                  <p>I&apos;m currently open for new projects and collaborations.</p>
                </div>
              </header>
              <div className="contact-us__availability">
                <div className="contact-us__availability-copy">
                  <strong>
                    <span className="contact-us__online-dot" aria-hidden="true" />
                    Open to work
                  </strong>
                  <span>Available for freelance &amp; full-time</span>
                </div>
                <button aria-label="View availability calendar" className="contact-us__availability-calendar" type="button">
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <path d="M8 3v4" />
                    <path d="M16 3v4" />
                    <path d="M4 10h16" />
                    <path d="M12 14v4" />
                    <path d="M10 16h4" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="contact-us__info-panel-col">
              <header className="contact-us__info-head">
                <i>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </i>
                <div>
                  <h3>Where I&apos;m Based</h3>
                  <p>Based in the Philippines and working with clients worldwide.</p>
                </div>
              </header>
              <a
                className="contact-us__map"
                href={contactLocation.mapsUrl}
                id="contact-map"
                rel="noreferrer"
                target="_blank"
                title={`Open ${contactLocation.regionLabel} in Google Maps`}
              >
                <div className="contact-us__map-frame">
                  <iframe
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={contactLocation.embedUrl}
                    title={`Map of ${contactLocation.regionLabel}`}
                  />
                </div>
                <span className="contact-us__map-open">
                  Open Maps
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M14 3h7v7" />
                    <path d="M10 14 21 3" />
                    <path d="M21 14v7h-7" />
                    <path d="M3 10V3h7" />
                  </svg>
                </span>
                <span className="contact-us__map-pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </span>
                <span className="contact-us__map-tag">{contactLocation.regionLabel}</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
