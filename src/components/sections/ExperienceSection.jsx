import { useCallback, useEffect } from 'react'
import ExperienceCompanyMark from '../experience/ExperienceCompanyMark'
import { experienceRoles } from '../../data/experience'
import { experienceTechIcons } from '../../data/techIcons'
import { resumeDownloadName, resumePdfUrl } from '../../data/portfolio'
import {
  getExperienceTechIcon,
  renderExperienceAchievementIcon,
} from '../../utils/icons/experienceIcons'

function RolePickerItem({ role, isActive, onSelect }) {
  return (
    <button
      aria-current={isActive ? 'true' : undefined}
      aria-label={`${role.title} at ${role.company}, ${role.period}`}
      className={`exp-journey__picker-item${isActive ? ' exp-journey__picker-item--active' : ''}`}
      onClick={() => onSelect(role.id)}
      type="button"
    >
      <ExperienceCompanyMark
        className="exp-journey__mark"
        company={role.company}
        initials={role.initials}
        roleId={role.id}
      />
      <span className="exp-journey__picker-copy">
        <strong>{role.company}</strong>
        <span>{role.title}</span>
        <em>{role.period}</em>
      </span>
    </button>
  )
}

export default function ExperienceSection({ activeExperience, activeExperienceId, setActiveExperienceId }) {
  const activeIndex = experienceRoles.findIndex((role) => role.id === activeExperienceId)
  const safeIndex = activeIndex >= 0 ? activeIndex : 0
  const carouselRoles = [...experienceRoles, ...experienceRoles]

  const goToRole = useCallback(
    (index) => {
      const role = experienceRoles[index]
      if (role) setActiveExperienceId(role.id)
    },
    [setActiveExperienceId],
  )

  const goPrev = useCallback(() => {
    const nextIndex = safeIndex === 0 ? experienceRoles.length - 1 : safeIndex - 1
    goToRole(nextIndex)
  }, [goToRole, safeIndex])

  const goNext = useCallback(() => {
    const nextIndex = safeIndex === experienceRoles.length - 1 ? 0 : safeIndex + 1
    goToRole(nextIndex)
  }, [goToRole, safeIndex])

  useEffect(() => {
    const handleKeyDown = (event) => {
      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  return (
    <section className="exp-journey" id="experience" aria-labelledby="experience-title">
      <div className="exp-journey__ambient" aria-hidden="true">
        <span className="exp-journey__orb exp-journey__orb--one" />
        <span className="exp-journey__orb exp-journey__orb--two" />
      </div>

      <div className="exp-journey__inner">
        <header className="exp-journey__header">
          <div className="exp-journey__intro">
            <p className="exp-journey__label">
              <span aria-hidden="true">|</span> 04 • Experience
            </p>
            <h2 id="experience-title">
              Career <span>Journey</span>
            </h2>
            <p className="exp-journey__hint">
              Select a role to review responsibilities, tools, and outcomes.
            </p>
          </div>

          <a
            className="exp-journey__resume"
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
        </header>

        <nav className="exp-journey__picker" aria-label="Experience roles">
          <div className="exp-journey__picker-viewport">
            <div className="exp-journey__picker-track">
              {carouselRoles.map((role, index) => (
                <RolePickerItem
                  isActive={activeExperienceId === role.id}
                  key={`${role.id}-${index}`}
                  onSelect={setActiveExperienceId}
                  role={role}
                />
              ))}
            </div>
          </div>
        </nav>

        <article
          key={activeExperienceId}
          aria-live="polite"
          className="exp-journey__panel"
        >
          <div className="exp-journey__panel-nav">
            <button
              aria-label="Previous role"
              className="exp-journey__panel-btn"
              onClick={goPrev}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m14 6-6 6 6 6" />
              </svg>
              Previous
            </button>

            <span className="exp-journey__panel-count">
              {safeIndex + 1} of {experienceRoles.length}
            </span>

            <button
              aria-label="Next role"
              className="exp-journey__panel-btn"
              onClick={goNext}
              type="button"
            >
              Next
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
          </div>

          <header className="exp-journey__profile">
            <div className="exp-journey__profile-top">
              <div className="exp-journey__profile-logo">
                <ExperienceCompanyMark
                  className="exp-journey__mark exp-journey__mark--hero"
                  company={activeExperience.company}
                  initials={activeExperience.initials}
                  roleId={activeExperience.id}
                />
              </div>

              <div className="exp-journey__profile-copy">
                <div className="exp-journey__profile-badges">
                  {activeExperience.isCurrent ? (
                    <span className="exp-journey__badge exp-journey__badge--live">
                      <span className="exp-journey__badge-dot" aria-hidden="true" />
                      Current Role
                    </span>
                  ) : null}
                  <span className="exp-journey__badge">{activeExperience.employmentType}</span>
                  <span className="exp-journey__badge exp-journey__badge--duration">
                    {activeExperience.duration}
                  </span>
                </div>

                <h3 className="exp-journey__profile-title">{activeExperience.title}</h3>
                <p className="exp-journey__profile-company">{activeExperience.company}</p>

                <div className="exp-journey__profile-meta">
                  <span>
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {activeExperience.location}
                  </span>
                  <span>
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                      <path d="M8 2v3M16 2v3M4 9h16M5 5h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                    </svg>
                    {activeExperience.period}
                  </span>
                </div>
              </div>
            </div>

            <p className="exp-journey__profile-lead">{activeExperience.summary}</p>

            <div className="exp-journey__skills">
              <div className="exp-journey__skills-group">
                <span className="exp-journey__skills-label">Focus</span>
                <div className="exp-journey__skills-row">
                  {activeExperience.focusAreas.map((area) => (
                    <span className="exp-journey__chip exp-journey__chip--focus" key={area}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="exp-journey__skills-divider" aria-hidden="true" />

              <div className="exp-journey__skills-group">
                <span className="exp-journey__skills-label">Stack</span>
                <div className="exp-journey__skills-row">
                  {activeExperience.technologies.map((tech) => (
                    <span className="exp-journey__chip exp-journey__chip--stack" key={tech}>
                      <img alt="" loading="lazy" src={getExperienceTechIcon(tech, experienceTechIcons)} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <div className="exp-journey__details">
            <section className="exp-journey__detail">
              <h4>Key Responsibilities</h4>
              <ul className="exp-journey__list">
                {activeExperience.responsibilities.map((item) => (
                  <li key={item}>
                    <span className="exp-journey__list-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="exp-journey__detail">
              <h4>Key Achievements</h4>
              <div className="exp-journey__achievements">
                {activeExperience.achievements.map((achievement) => (
                  <article key={achievement.title}>
                    <span className="exp-journey__achievement-icon" aria-hidden="true">
                      {renderExperienceAchievementIcon(achievement.icon)}
                    </span>
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
    </section>
  )
}
