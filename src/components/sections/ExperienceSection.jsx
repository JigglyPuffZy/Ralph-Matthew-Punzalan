import ExperienceCompanyMark from '../experience/ExperienceCompanyMark'
import { experienceRoles } from '../../data/experience'
import { experienceTechIcons } from '../../data/techIcons'
import { resumeDownloadName, resumePdfUrl } from '../../data/portfolio'
import {
  getExperienceTechIcon,
  renderExperienceAchievementIcon,
} from '../../utils/icons/experienceIcons'

export default function ExperienceSection({ activeExperience, activeExperienceId, setActiveExperienceId }) {
  return (
    <>
      <section className="my-experience" id="experience" aria-labelledby="experience-title">
        <div className="my-experience__inner">
          <header className="my-experience__top">
            <div className="my-experience__intro">
              <p className="my-experience__label">
                <span aria-hidden="true">|</span> 04 • Experience
              </p>
              <h2 id="experience-title">
                My <span>Experience</span>
              </h2>
              <p>
                Front-end development, UI/UX design, and product delivery across client,
                government, and remote teams.
              </p>
            </div>
          </header>

          <div className="my-experience__layout">
            <aside className="my-experience__timeline" aria-label="Experience timeline">
              <h3>
                Timeline
                <span className="my-experience__timeline-hint">Swipe to explore</span>
              </h3>
              <ul>
                {experienceRoles.map((role) => (
                  <li key={role.id}>
                    <button
                      aria-current={activeExperienceId === role.id ? 'true' : undefined}
                      className={`my-experience__timeline-item ${activeExperienceId === role.id ? 'my-experience__timeline-item--active' : ''}`}
                      onClick={() => setActiveExperienceId(role.id)}
                      type="button"
                    >
                      <span className="my-experience__timeline-dot" aria-hidden="true" />
                      <span className="my-experience__timeline-period">{role.period}</span>
                      <span className="my-experience__timeline-type">{role.employmentType}</span>
                      <strong>{role.title}</strong>
                      <em>{role.company}</em>
                    </button>
                  </li>
                ))}
              </ul>
              <a
                className="my-experience__resume"
                download={resumeDownloadName}
                href={resumePdfUrl}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Download Resume
              </a>
            </aside>

            <article className="my-experience__detail" aria-live="polite">
              <header className="my-experience__role">
                <div className="my-experience__role-main">
                  <ExperienceCompanyMark
                    company={activeExperience.company}
                    initials={activeExperience.initials}
                    roleId={activeExperience.id}
                  />
                  <div className="my-experience__role-copy">
                    <div className="my-experience__role-badges">
                      {activeExperience.isCurrent ? (
                        <span className="my-experience__badge">Current Role</span>
                      ) : null}
                      <span className="my-experience__employment">{activeExperience.employmentType}</span>
                    </div>
                    <h3>{activeExperience.title}</h3>
                    <p className="my-experience__company-name">{activeExperience.company}</p>
                    <p className="my-experience__role-meta">
                      <span className="my-experience__role-dot" aria-hidden="true" />
                      {activeExperience.location} · {activeExperience.period}
                    </p>
                  </div>
                </div>
                <span className="my-experience__duration">{activeExperience.duration}</span>
              </header>

              <p className="my-experience__summary-text">{activeExperience.summary}</p>

              <div className="my-experience__focus-row" aria-label="Focus areas">
                {activeExperience.focusAreas.map((area) => (
                  <span className="my-experience__focus-pill" key={area}>
                    {area}
                  </span>
                ))}
              </div>

              <div className="my-experience__stack" aria-label="Technologies used">
                {activeExperience.technologies.map((tech) => (
                  <span className="my-experience__stack-pill" key={tech}>
                    <i aria-hidden="true">
                      <img alt="" loading="lazy" src={getExperienceTechIcon(tech, experienceTechIcons)} />
                    </i>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="my-experience__content-grid">
                <section className="my-experience__content-card">
                  <h4>Key Responsibilities</h4>
                  <ul className="my-experience__responsibility-list">
                    {activeExperience.responsibilities.map((item) => (
                      <li key={item}>
                        <i aria-hidden="true">
                          <svg viewBox="0 0 24 24">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="my-experience__content-card">
                  <h4>Key Achievements</h4>
                  <div className="my-experience__achievement-list">
                    {activeExperience.achievements.map((achievement) => (
                      <article key={achievement.title}>
                        <i>{renderExperienceAchievementIcon(achievement.icon)}</i>
                        <div>
                          <strong>{achievement.title}</strong>
                          <p>{achievement.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
