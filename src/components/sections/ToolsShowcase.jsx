import { toolCategories } from '../../data/tools'

const categoryMeta = {
  design: {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 4 9v12h16V9l-8-6Z" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
    accent: 'design',
  },
  frontend: {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </svg>
    ),
    accent: 'frontend',
  },
  backend: {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
    accent: 'backend',
  },
  platforms: {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    accent: 'platforms',
  },
}

function ToolChip([iconSrc, name, domain, url], index) {
  return (
    <a
      className="tool-chip"
      href={url}
      key={`${name}-${index}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`${name} — ${domain}`}
    >
      <span className="tool-chip__icon">
        <img alt="" src={iconSrc} />
      </span>
      <span className="tool-chip__copy">
        <strong>{name}</strong>
        <em>{domain}</em>
      </span>
      <span className="tool-chip__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M7 17 17 7" />
          <path d="M9 7h8v8" />
        </svg>
      </span>
    </a>
  )
}

export default function ToolsShowcase() {
  return (
    <div className="tool-showcase">
      {toolCategories.map(({ id, label, reverse, tools }, index) => {
        const meta = categoryMeta[id]

        return (
          <article
            className={`tool-showcase__category tool-showcase__category--${meta.accent}`}
            key={id}
          >
            <header className="tool-showcase__head">
              <span className="tool-showcase__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="tool-showcase__icon">{meta.icon}</span>
              <div className="tool-showcase__copy">
                <h4>{label}</h4>
                <p>{tools.length} tools in daily use</p>
              </div>
            </header>

            <div className="tool-showcase__lane">
              <div className="tool-showcase__fade tool-showcase__fade--left" aria-hidden="true" />
              <div className="tool-showcase__viewport">
                <div className={`tool-showcase__track${reverse ? ' is-reverse' : ''}`}>
                  {[...tools, ...tools].map((tool, toolIndex) => ToolChip(tool, toolIndex))}
                </div>
              </div>
              <div className="tool-showcase__fade tool-showcase__fade--right" aria-hidden="true" />
            </div>
          </article>
        )
      })}
    </div>
  )
}
