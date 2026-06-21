import { techLogos } from '../../data/hero'

export default function HeroSection({ heroRef, canvasRef, drawLineSvgRef, drawPathRef }) {
  return (
    <div
      className="hero-shell"
      data-pointer="idle"
      id="home"
      ref={heroRef}
    >
      <div className="kinetic-grid" aria-hidden="true">
        <canvas className="kinetic-grid__canvas" ref={canvasRef} />
      </div>

      <svg
        aria-hidden="true"
        className="kinetic-draw-line"
        preserveAspectRatio="none"
        ref={drawLineSvgRef}
      >
        <path ref={drawPathRef} />
      </svg>

      <div className="tech-floaters" aria-hidden="true">
        {techLogos.map(({ className, name, src }) => (
          <span className={`tech-logo ${className}`} data-label={name} key={name}>
            <img alt="" src={src} />
          </span>
        ))}
      </div>

      <main className="hero-content">
        <section className="hero-layout" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 className="hero-title" id="hero-title">
              <span>Digital Experiences</span>
              <span>Built with Purpose.</span>
            </h1>
            <p className="hero-subtitle">
              I design and develop intuitive web and mobile products that combine
              usability, performance, and thoughtful user experience.
            </p>

            <div className="hero-actions">
              <a className="hero-button hero-button--primary" href="#contact">
                Start a project
              </a>
              <a className="hero-button hero-button--secondary" href="#projects">
                View projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        aria-label="Scroll to About section"
        className="hero-scroll-hint"
        href="#about"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 5v12" />
          <path d="m7 12 5 5 5-5" />
        </svg>
      </a>
    </div>
  )
}
