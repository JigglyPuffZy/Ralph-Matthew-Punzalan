import { Fragment } from 'react'
import matthewPhoto from '../../assets/Matthew pic.png'
import { contactLocation } from '../../data/contact'
import StatsCounter from '../ui/stats-counter'
import ToolsShowcase from './ToolsShowcase'
import { workflowSteps, videoWorkflowSteps } from '../../data/workflow'

const specialties = [
  {
    title: 'Interface Design',
    description: 'Clear, modern layouts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
        <path d="M8.5 9h7M8.5 13h5" />
      </svg>
    ),
  },
  {
    title: 'Front-End Build',
    description: 'Responsive web systems',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8.5 8-3.5 4 3.5 4M15.5 8l3.5 4-3.5 4M13.5 5.5l-3 13" />
      </svg>
    ),
  },
  {
    title: 'UX Polish',
    description: 'Smooth user flows',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5 9.5 8.2 3 9.1l4.5 4.2-1.2 6L12 16.3l5.7 3-1.2-6 4.5-4.2-6.5-.9L12 2.5Z" />
      </svg>
    ),
  },
]

const stats = [
  {
    value: 3,
    suffix: '+',
    label: 'Years of experience',
    shortLabel: 'Years exp.',
    minWidth: '2.75ch',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v3M16 2v3M4 9h16M5 5h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    value: 20,
    suffix: '+',
    label: 'Delivered web projects',
    shortLabel: 'Projects',
    minWidth: '3.5ch',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5.5l-4 13" />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: '+',
    label: 'Client collaborations',
    shortLabel: 'Clients',
    minWidth: '3.25ch',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 19h6M19 16v6M4 19a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      </svg>
    ),
  },
]

const infoItems = [
  { label: 'Focus', value: 'Web & Mobile Interfaces' },
  { label: 'Location', value: contactLocation.label },
  { label: 'Availability', value: 'Open to work', live: true },
  {
    label: 'Email',
    value: 'ralphmatthewpunzalan23@gmail.com',
    href: 'mailto:ralphmatthewpunzalan23@gmail.com',
  },
]

const mindsetTags = ['Problem Solving', 'Continuous Learning', 'Persistence']

export default function AboutSection() {
  return (
    <section className="about-dashboard" id="about" aria-labelledby="about-title">
      <div className="about-dashboard__ambient" aria-hidden="true">
        <span className="about-dashboard__orb about-dashboard__orb--one" />
        <span className="about-dashboard__orb about-dashboard__orb--two" />
        <span className="about-dashboard__grid" />
      </div>

      <div className="about-dashboard__main">
        <div className="about-dashboard__layout">
          <article className="about-dashboard__tile about-dashboard__showcase">
            <div className="about-dashboard__showcase-media">
              <div className="about-dashboard__photo-ring" aria-hidden="true" />
              <figure className="about-dashboard__photo">
                <img alt="R4lph Matthew Punzalan portrait" src={matthewPhoto} />
              </figure>
              <div className="about-dashboard__photo-badge">
                <span aria-hidden="true" />
                Open to work
              </div>
            </div>

            <div className="about-dashboard__showcase-copy">
              <p className="about-dashboard__role">Front-end developer &amp; UI/UX designer</p>
              <h2 id="about-title">
                R4lph Matthew <span>Punzalan</span>
              </h2>
              <p className="about-dashboard__bio">
                I build clean, responsive interfaces with thoughtful user experience
                and reliable implementation — from first wireframe to shipped code.
              </p>

              <div className="about-dashboard__skills-row" aria-label="Core specialties">
                {specialties.map((item) => (
                  <article key={item.title} className="about-dashboard__skill">
                    <span className="about-dashboard__skill-icon" aria-hidden="true">{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="about-dashboard__actions">
                <a className="about-dashboard__cta about-dashboard__cta--primary" href="#contact">
                  Start a project
                </a>
                <a className="about-dashboard__cta about-dashboard__cta--ghost" href="#projects">
                  View work
                </a>
              </div>
            </div>
          </article>

          <div className="about-dashboard__tile about-dashboard__metrics" aria-label="Experience highlights">
            {stats.map((item, index) => (
              <Fragment key={item.label}>
                {index > 0 ? <span className="about-dashboard__metrics-divider" aria-hidden="true" /> : null}
                <article className="about-dashboard__metric">
                  <span className="about-dashboard__metric-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <strong>
                    <StatsCounter
                      className="about-dashboard__metric-count"
                      duration={2}
                      style={{ minWidth: item.minWidth }}
                      suffix={item.suffix}
                      value={item.value}
                    />
                  </strong>
                  <span className="about-dashboard__metric-label">
                    <span className="about-dashboard__metric-label-full">{item.label}</span>
                    <span className="about-dashboard__metric-label-short">{item.shortLabel}</span>
                  </span>
                </article>
              </Fragment>
            ))}
          </div>

          <div className="about-dashboard__insights">
            <blockquote className="about-dashboard__tile about-dashboard__quote">
              <p>Every bug has a solution. Keep learning, keep building, and never stop improving.</p>
              <footer>
                {mindsetTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </footer>
            </blockquote>

            <article className="about-dashboard__tile about-dashboard__details">
              <h3 className="about-dashboard__info-title">Quick details</h3>
              <dl className="about-dashboard__info-grid">
                {infoItems.map((item) => (
                  <div key={item.label} className="about-dashboard__info-card">
                    <dt>{item.label}</dt>
                    <dd>
                      {item.live ? <span className="about-dashboard__dot" aria-hidden="true" /> : null}
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </div>

      <div className="about-dashboard__bottom">
        <section className="dashboard-panel dashboard-panel--approach" id="workflow">
          <h3>Project Workflow</h3>
          <div className="studio-workflow" aria-label="Product studio workflow">
            <div className="workflow-canvas">
              <svg className="workflow-map" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className="workflow-path workflow-path--halo"
                  d="M16.7 16.7 V50 V83.3 H50 V50 V16.7 H83.3 V50 V83.3"
                />
                <path
                  className="workflow-path workflow-path--base"
                  d="M16.7 16.7 V50 V83.3 H50 V50 V16.7 H83.3 V50 V83.3"
                />
                <path
                  className="workflow-path workflow-path--glow"
                  d="M16.7 16.7 V50 V83.3 H50 V50 V16.7 H83.3 V50 V83.3"
                  pathLength="100"
                />
                {[
                  ['16.7', '16.7'],
                  ['16.7', '50'],
                  ['16.7', '83.3'],
                  ['50', '50'],
                  ['83.3', '16.7'],
                  ['83.3', '50'],
                  ['83.3', '83.3'],
                ].map(([cx, cy]) => (
                  <circle className="workflow-node" cx={cx} cy={cy} r="1.65" key={`${cx}-${cy}`} />
                ))}
              </svg>
              {workflowSteps.map(({ className, description, icon, step, tag, title }, index) => (
                <Fragment key={step}>
                  <article className={`workflow-module ${className}`} tabIndex={0}>
                    <small>{step}</small>
                    <span className="workflow-module__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">{icon}</svg>
                    </span>
                    <div>
                      <span>{tag}</span>
                      <strong>{title}</strong>
                    </div>
                    <p className="workflow-module__description">{description}</p>
                  </article>
                  {index < workflowSteps.length - 1 ? (
                    <div className="workflow-connector" aria-hidden="true">
                      <svg viewBox="0 0 40 40" preserveAspectRatio="none">
                        <path className="workflow-path workflow-path--halo" d="M20 0 V40" />
                        <path className="workflow-path workflow-path--base" d="M20 0 V40" />
                        <path
                          className="workflow-path workflow-path--glow"
                          d="M20 0 V40"
                          pathLength="100"
                          style={{ animationDelay: `${index * 420}ms` }}
                        />
                        <circle
                          className="workflow-node"
                          cx="20"
                          cy="20"
                          r="2.2"
                          style={{ animationDelay: `${index * 420 + 200}ms` }}
                        />
                      </svg>
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="dashboard-panel dashboard-panel--approach" id="video-workflow">
          <h3>Video Editing Workflow</h3>
          <div className="studio-workflow" aria-label="Video editing workflow">
            <div className="workflow-canvas">
              <svg className="workflow-map" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className="workflow-path workflow-path--halo"
                  d="M16.7 16.7 V50 V83.3 H50 V50 V16.7 H83.3 V50 V83.3"
                />
                <path
                  className="workflow-path workflow-path--base"
                  d="M16.7 16.7 V50 V83.3 H50 V50 V16.7 H83.3 V50 V83.3"
                />
                <path
                  className="workflow-path workflow-path--glow"
                  d="M16.7 16.7 V50 V83.3 H50 V50 V16.7 H83.3 V50 V83.3"
                  pathLength="100"
                />
                {[
                  ['16.7', '16.7'],
                  ['16.7', '50'],
                  ['16.7', '83.3'],
                  ['50', '50'],
                  ['83.3', '16.7'],
                  ['83.3', '50'],
                  ['83.3', '83.3'],
                ].map(([cx, cy]) => (
                  <circle className="workflow-node" cx={cx} cy={cy} r="1.65" key={`${cx}-${cy}`} />
                ))}
              </svg>
              {videoWorkflowSteps.map(({ className, description, icon, step, tag, title }, index) => (
                <Fragment key={step}>
                  <article className={`workflow-module ${className}`} tabIndex={0}>
                    <small>{step}</small>
                    <span className="workflow-module__icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">{icon}</svg>
                    </span>
                    <div>
                      <span>{tag}</span>
                      <strong>{title}</strong>
                    </div>
                    <p className="workflow-module__description">{description}</p>
                  </article>
                  {index < videoWorkflowSteps.length - 1 ? (
                    <div className="workflow-connector" aria-hidden="true">
                      <svg viewBox="0 0 40 40" preserveAspectRatio="none">
                        <path className="workflow-path workflow-path--halo" d="M20 0 V40" />
                        <path className="workflow-path workflow-path--base" d="M20 0 V40" />
                        <path
                          className="workflow-path workflow-path--glow"
                          d="M20 0 V40"
                          pathLength="100"
                          style={{ animationDelay: `${index * 420}ms` }}
                        />
                        <circle
                          className="workflow-node"
                          cx="20"
                          cy="20"
                          r="2.2"
                          style={{ animationDelay: `${index * 420 + 200}ms` }}
                        />
                      </svg>
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="dashboard-panel dashboard-panel--tools" id="tools">
          <div className="dashboard-panel--tools__head">
            <h3>Technologies &amp; Tools</h3>
            <p>Design, build, and ship with a stack I use every day.</p>
          </div>
          <ToolsShowcase />
        </section>
      </div>
    </section>
  )
}
