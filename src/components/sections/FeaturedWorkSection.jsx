import { getProjectImage, getProjectPreviewMode } from '../../projectImages'
import { featuredTechIcons } from '../../data/techIcons'
import {
  getProjectActionLabel,
  isLockedPortfolioProject,
  portfolioUrl,
} from '../../data/portfolio'
import {
  getFeaturedTechIcon,
  renderFeaturedTagIcon,
  renderIntelIcon,
} from '../../utils/icons/featuredIcons'

export default function FeaturedWorkSection({ featured }) {
  const {
    activeCategory,
    activeCategoryId,
    activeCategoryProjects,
    activeProject,
    activeProjectId,
    activeProjectIndex,
    featuredIntelligence,
    featuredMotionClass,
    featuredMotionKey,
    featuredProjects,
    isMobileShowcase,
    isShowcaseTransitioning,
    selectAdjacentFeaturedProject,
    selectFeaturedCategory,
    selectFeaturedProject,
  } = featured

  return (
    <section className="featured-work" id="projects" aria-labelledby="projects-title">
      <div className="featured-work__inner">
        <header className="featured-work__intro">
          <div className="featured-work__header-copy">
            <p className="featured-work__label">
              <span aria-hidden="true">|</span> 03 • Featured Work
            </p>
            <h2 id="projects-title">
              Featured <span>Work</span>
            </h2>
            <p>
              Curated projects across web, mobile, CMS, and product design.
            </p>
          </div>

          <div className="featured-work__tabs" role="tablist" aria-label="Featured projects">
            {featuredProjects.map((category) => (
              <button
                aria-selected={activeCategoryId === category.id}
                className={`featured-work__tab ${activeCategoryId === category.id ? 'featured-work__tab--active' : ''}`}
                key={category.id}
                onClick={() => selectFeaturedCategory(category.id)}
                role="tab"
                type="button"
              >
                <span className="featured-work__tab-text featured-work__tab-text--full">
                  {category.shortName}
                </span>
                <span className="featured-work__tab-text featured-work__tab-text--short">
                  {category.tabLabel ?? category.shortName}
                </span>
              </button>
            ))}
          </div>
        </header>

        <div className={`featured-work__showcase featured-work__showcase--${activeCategory.accent}`}>
          <article className={`featured-work__main featured-work__main--${activeCategory.accent}${isMobileShowcase ? ' featured-work__main--mobile' : ''}`}>
            <div className="featured-work__info">
              <div
                className={`featured-work__info-panel ${featuredMotionClass}`}
                key={featuredMotionKey}
              >
                <h3>{activeProject.title}</h3>
                <div className="featured-work__meta">
                  <span className={`featured-work__platform featured-work__platform--${activeCategory.accent}`}>
                    {activeProject.platform}
                  </span>
                  <span className="featured-work__meta-dot" aria-hidden="true" />
                  <span className="featured-work__meta-type">{activeProject.projectType}</span>
                </div>
                <p className="featured-work__subtitle">
                  {activeProject.role} · {activeProject.timeline}
                </p>
                <p className="featured-work__description">{activeProject.description}</p>
                <div className="featured-work__tags">
                  {activeProject.features.map((feature) => (
                    <span key={feature}>
                      {renderFeaturedTagIcon('system')}
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="featured-work__actions">
                  {isLockedPortfolioProject(activeProject.id, activeCategory.type) ? (
                    <button
                      aria-disabled="true"
                      className="featured-work__demo featured-work__demo--locked"
                      disabled
                      type="button"
                    >
                      Locked
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                      </svg>
                    </button>
                  ) : activeProject.liveUrl ? (
                    <a className="featured-work__demo" href={activeProject.liveUrl} target="_blank" rel="noreferrer">
                      {getProjectActionLabel(activeProject)}
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M7 17 17 7" />
                        <path d="M9 7h8v8" />
                      </svg>
                    </a>
                  ) : (
                    <a className="featured-work__demo" href={portfolioUrl} target="_blank" rel="noreferrer">
                      View Portfolio
                      <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M7 17 17 7" />
                        <path d="M9 7h8v8" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="featured-work__visual">
              <div className={`featured-work__glow featured-work__glow--${activeCategory.accent}`} aria-hidden="true" />
              <div className="featured-work__preview-track">
                {getProjectImage(activeProject.id) ? (
                  <div
                    className={`featured-work__preview featured-work__preview--${getProjectPreviewMode(activeProject)} featured-work__preview--${activeCategory.accent} ${featuredMotionClass}`}
                    key={featuredMotionKey}
                  >
                    <div className={`featured-work__preview-stage${isMobileShowcase ? ' featured-work__preview-stage--mobile' : ''}`}>
                      <div className="featured-work__preview-spotlight" aria-hidden="true" />
                      <img
                        alt={`${activeProject.title} preview`}
                        className={`featured-work__preview-shot${isMobileShowcase ? ' featured-work__preview-shot--mobile' : ''}`}
                        loading="lazy"
                        src={getProjectImage(activeProject.id)}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`featured-work__preview featured-work__preview--empty featured-work__preview--${activeCategory.accent} ${featuredMotionClass}`}
                    aria-hidden="true"
                    key={featuredMotionKey}
                  >
                    <div className="featured-work__preview-frame">
                      <span className="featured-work__preview-placeholder" />
                    </div>
                  </div>
                )}
              </div>
              <div className="featured-work__showcase-nav">
                <button
                  aria-label="Previous project"
                  className="featured-work__showcase-nav-btn"
                  disabled={activeCategoryProjects.length <= 1 || isShowcaseTransitioning}
                  onClick={() => selectAdjacentFeaturedProject(-1)}
                  type="button"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <span className="featured-work__showcase-counter">
                  {String(activeProjectIndex + 1).padStart(2, '0')}
                  <i aria-hidden="true">/</i>
                  {String(activeCategoryProjects.length).padStart(2, '0')}
                </span>
                <button
                  aria-label="Next project"
                  className="featured-work__showcase-nav-btn"
                  disabled={activeCategoryProjects.length <= 1 || isShowcaseTransitioning}
                  onClick={() => selectAdjacentFeaturedProject(1)}
                  type="button"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </article>

          <aside className="featured-work__details">
            <div className="featured-work__intel">
              <h4>Project Intelligence</h4>
              <div className="featured-work__intel-card">
                <ul>
                  {featuredIntelligence.map((item) => (
                    <li key={item.label}>
                      <i className="featured-work__intel-icon">{renderIntelIcon(item.label)}</i>
                      <span className="featured-work__intel-key">{item.label}</span>
                      <div className="featured-work__intel-value">
                        {item.label === 'Status' ? (
                          <span className="featured-work__intel-status">
                            <span
                              className={`featured-work__status-dot ${item.value === 'Live' ? 'featured-work__status-dot--live' : 'featured-work__status-dot--concept'}`}
                            />
                            <span className="featured-work__intel-status-text">{item.value}</span>
                          </span>
                        ) : item.label === 'Role' ? (
                          (Array.isArray(item.value) ? item.value : [item.value]).map((role) => (
                            <span className="featured-work__intel-role" key={role}>{role}</span>
                          ))
                        ) : (
                          <span className="featured-work__intel-plain">{item.value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="featured-work__tech">
              <h4>Technologies</h4>
              <div className="featured-work__tech-card">
                <div className="featured-work__tech-grid">
                {activeProject.technologies.map((tech) => (
                  <span className="featured-work__tech-pill" key={tech}>
                    <i aria-hidden="true" className="featured-work__tech-icon">
                      {getFeaturedTechIcon(tech, featuredTechIcons) ? (
                        <img alt="" loading="lazy" src={getFeaturedTechIcon(tech, featuredTechIcons)} />
                      ) : null}
                    </i>
                    {tech}
                  </span>
                ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="featured-work__gallery">
          <div className="featured-work__gallery-head">
            <div className="featured-work__gallery-head-copy">
              <strong>{activeCategory.shortName}</strong>
              <p>Browse all projects in this category</p>
            </div>
            <span className="featured-work__gallery-count">
              {activeCategoryProjects.length} projects
            </span>
          </div>

          <div className="featured-work__gallery-grid">
            {activeCategoryProjects.map((project, index) => (
              <button
                aria-current={activeProjectId === project.id ? 'true' : undefined}
                className={`featured-work__gallery-card ${activeProjectId === project.id ? 'featured-work__gallery-card--active' : ''}`}
                key={project.id}
                onClick={() => selectFeaturedProject(project.id)}
                type="button"
              >
                <span className="featured-work__gallery-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="featured-work__gallery-media">
                  <div className={`featured-work__gallery-thumb featured-work__gallery-thumb--${activeCategory.accent}${isMobileShowcase ? ' featured-work__gallery-thumb--mobile' : ''}`}>
                    {getProjectImage(project.id) ? (
                      <img alt="" loading="lazy" src={getProjectImage(project.id)} />
                    ) : (
                      <>
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                      </>
                    )}
                  </div>
                  <div className="featured-work__gallery-overlay">
                    <strong>{project.title}</strong>
                    <span>
                      {project.platform} · {project.timeline}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
