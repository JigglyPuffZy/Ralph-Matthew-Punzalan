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
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
                  <path d="M8.5 9h7M8.5 13h5" />
                </svg>
              </i>
              <strong>Interface Design</strong>
              <em>Clear, modern layouts</em>
            </span>
            <span>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8.5 8-3.5 4 3.5 4M15.5 8l3.5 4-3.5 4M13.5 5.5l-3 13" />
                </svg>
              </i>
              <strong>Front-End Build</strong>
              <em>Responsive web systems</em>
            </span>
            <span>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.5 9.5 8.2 3 9.1l4.5 4.2-1.2 6L12 16.3l5.7 3-1.2-6 4.5-4.2-6.5-.9L12 2.5Z" />
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
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 8.5 4.5 12 8 15.5M16 8.5l3.5 3.5-3.5 3.5M14 5l-4 14" />
                </svg>
              </i>
              <strong>3+</strong>
              <span>Years of experience</span>
            </article>
            <article>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="4.5" width="17" height="15" rx="3.5" />
                  <path d="M7.5 9h9M7.5 13h6" />
                </svg>
              </i>
              <strong>20+</strong>
              <span>Delivered web projects</span>
            </article>
            <article>
              <i>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4.5 4.5 8v5.5c0 4.2 3.2 6.3 7.5 7.5 4.3-1.2 7.5-3.3 7.5-7.5V8l-7.5-3.5Z" />
                  <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
                </svg>
              </i>
              <strong>10+</strong>
              <span>Client collaborations</span>
            </article>
          </div>

          <dl className="dashboard-info">
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="4.5" width="17" height="15" rx="3.5" />
                  <path d="M7.5 10h9M7.5 14h6" />
                </svg>
                Focus
              </dt>
              <dd>Web & Mobile Interfaces</dd>
            </div>
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.5s7.5-5.5 7.5-12.5a7.5 7.5 0 1 0-15 0c0 7 7.5 12.5 7.5 12.5Z" />
                  <circle cx="12" cy="9" r="2.8" />
                </svg>
                Location
              </dt>
              <dd>{contactLocation.label}</dd>
            </div>
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4.5 4.5 8v5.5c0 4.2 3.2 6.3 7.5 7.5 4.3-1.2 7.5-3.3 7.5-7.5V8l-7.5-3.5Z" />
                  <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
                </svg>
                Availability
              </dt>
              <dd><span /> Open to work</dd>
            </div>
            <div>
              <dt>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
                  <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
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
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="1.2" />
              <circle cx="18" cy="18" r="1.2" />
              <path d="M8.5 6.5h3a5 5 0 0 1 0 10h-1a5 5 0 0 0 0 10h5" />
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
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 8.5 4.5 12 8 15.5M16 8.5l3.5 3.5-3.5 3.5M14 5l-4 14" />
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
