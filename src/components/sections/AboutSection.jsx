import { Fragment } from 'react'
import matthewPhoto from '../../assets/Matthew pic.png'
import { contactLocation } from '../../data/contact'
import { toolGridItems } from '../../data/tools'
import { workflowSteps } from '../../data/workflow'

export default function AboutSection() {
  return (
    <section className="about-dashboard" id="about" aria-labelledby="about-title">
      <div className="about-dashboard__main">
        <div className="about-dashboard__intro">
          <h2 id="about-title">
            <span>R4lph Matthew Punzalan</span>
          </h2>
          <p>
            Front-end developer and UI/UX designer focused on building clean,
            responsive interfaces with thoughtful user experience and reliable
            implementation.
          </p>
          <div className="profile-specialties" aria-label="Core specialties">
            <span>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="5" y="5" width="14" height="14" rx="3" />
                  <path d="M9 9h6" />
                  <path d="M9 13h4" />
                </svg>
              </i>
              <strong>Interface Design</strong>
              <em>Clear, modern layouts</em>
            </span>
            <span>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="m9 8-4 4 4 4" />
                  <path d="m15 8 4 4-4 4" />
                  <path d="m13 6-2 12" />
                </svg>
              </i>
              <strong>Front-End Build</strong>
              <em>Responsive web systems</em>
            </span>
            <span>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 3 9.8 8.2 4 9l4.2 3.8L7 18.5 12 15.6l5 2.9-1.2-5.7L20 9l-5.8-.8L12 3Z" />
                </svg>
              </i>
              <strong>UX Polish</strong>
              <em>Smooth user flows</em>
            </span>
          </div>
          <div className="dashboard-signature" aria-hidden="true">Available for selected projects</div>
        </div>

        <div className="about-dashboard__photo">
          <div className="photo-frame">
            <div className="photo-frame__visual">
              <img alt="R4lph Matthew Punzalan portrait" src={matthewPhoto} />
            </div>
            <div className="photo-note">
              <small>Focused On Motivation</small>
              <p>Every bug has a solution. Keep learning, keep building, and never stop improving.</p>
              <div>
                <span>Problem Solving</span>
                <span>Continuous Learning</span>
                <span>Persistence</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="about-dashboard__meta">
          <div className="dashboard-stats">
            <article>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="m8 9-4 3 4 3" />
                  <path d="m16 9 4 3-4 3" />
                  <path d="m14 5-4 14" />
                </svg>
              </i>
              <strong>3+</strong>
              <span>Years of experience</span>
            </article>
            <article>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="4" y="5" width="16" height="14" rx="3" />
                  <path d="M8 9h8" />
                  <path d="M8 13h5" />
                </svg>
              </i>
              <strong>20+</strong>
              <span>Delivered web projects</span>
            </article>
            <article>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 5 5 8v5c0 4 3 6 7 7 4-1 7-3 7-7V8l-7-3Z" />
                  <path d="m9 12 2 2 4-5" />
                </svg>
              </i>
              <strong>10+</strong>
              <span>Client collaborations</span>
            </article>
          </div>

          <dl className="dashboard-info">
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="4" y="5" width="16" height="14" rx="3" />
                  <path d="M8 10h8" />
                  <path d="M8 14h5" />
                </svg>
                Focus
              </dt>
              <dd>Web & Mobile Interfaces</dd>
            </div>
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Location
              </dt>
              <dd>{contactLocation.label}</dd>
            </div>
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 5 5 8v5c0 4 3 6 7 7 4-1 7-3 7-7V8l-7-3Z" />
                  <path d="m9 12 2 2 4-5" />
                </svg>
                Availability
              </dt>
              <dd><span /> Open to work</dd>
            </div>
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="4" y="6" width="16" height="12" rx="2" />
                  <path d="m5 8 7 5 7-5" />
                </svg>
                Email
              </dt>
              <dd>
                <a href="mailto:ralphmatthewpunzalan23@gmail.com">ralphmatthewpunzalan23@gmail.com</a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="about-dashboard__bottom">
        <section className="dashboard-panel dashboard-panel--approach" id="workflow">
          <h3>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M6 6h.01" />
              <path d="M18 18h.01" />
              <path d="M8 6h4a4 4 0 0 1 0 8h-1a4 4 0 0 0 0 8h5" />
            </svg>
            Project Workflow
          </h3>
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

        <section className="dashboard-panel dashboard-panel--tools" id="tools">
          <h3>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m8 9-4 3 4 3" />
              <path d="m16 9 4 3-4 3" />
              <path d="m14 5-4 14" />
            </svg>
            Technologies & Tools
          </h3>
          <div className="tool-grid">
            {toolGridItems.map(([icon, tool, domain, url]) => (
              <a className="tool-card" href={url} key={tool} target="_blank" rel="noreferrer">
                <i><img alt="" src={icon} /></i>
                <span>{tool}</span>
                <span className="tool-preview" aria-hidden="true">
                  <span className="tool-preview__hero">
                    <img alt="" src={icon} />
                    <strong>{tool}</strong>
                    <em>Official website and resources</em>
                  </span>
                  <span className="tool-preview__footer">
                    <strong>{domain}</strong>
                    <svg viewBox="0 0 24 24">
                      <path d="M7 17 17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
