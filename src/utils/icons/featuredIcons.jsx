export function renderFeaturedTagIcon(icon) {
  if (icon === 'mobile') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7.5" y="2.5" width="9" height="19" rx="2.5" />
        <path d="M10.5 18.5h3" />
      </svg>
    )
  }

  if (icon === 'year') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="4.5" width="17" height="17" rx="3.5" />
        <path d="M7.5 2.5v4.5M16.5 2.5v4.5M3.5 11.5h17" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="4.5" width="17" height="15" rx="3.5" />
      <path d="M3.5 10.5h17M7.5 15.5h6" />
    </svg>
  )
}

export function renderIntelIcon(label) {
  if (label === 'Platform') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" />
        <path d="M2.5 10.5h19" />
      </svg>
    )
  }

  if (label === 'Role') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
      </svg>
    )
  }

  if (label === 'Duration') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v4.5l3.5 2.5" />
      </svg>
    )
  }

  if (label === 'Team') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7.5" cy="8.5" r="2.8" />
        <circle cx="16.5" cy="8.5" r="2.8" />
        <path d="M2.5 20.5a5.2 5.2 0 0 1 10.5 0M11 20.5a5.2 5.2 0 0 1 10.5 0" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5M12 16.5h.5" />
    </svg>
  )
}

export function getFeaturedTechIcon(tech, featuredTechIcons) {
  return featuredTechIcons[tech] ?? null
}
