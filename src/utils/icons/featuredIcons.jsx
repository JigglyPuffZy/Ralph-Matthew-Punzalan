export function renderFeaturedTagIcon(icon) {
  if (icon === 'mobile') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="8" y="3" width="8" height="18" rx="2" />
        <path d="M11 18h2" />
      </svg>
    )
  }

  if (icon === 'year') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="16" rx="3" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M4 11h16" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="14" rx="3" />
      <path d="M4 10h16" />
      <path d="M8 15h5" />
    </svg>
  )
}

export function renderIntelIcon(label) {
  if (label === 'Platform') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 10h18" />
      </svg>
    )
  }

  if (label === 'Role') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </svg>
    )
  }

  if (label === 'Duration') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    )
  }

  if (label === 'Team') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3 20a5 5 0 0 1 10 0" />
        <path d="M11 20a5 5 0 0 1 10 0" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  )
}

export function getFeaturedTechIcon(tech, featuredTechIcons) {
  return featuredTechIcons[tech] ?? null
}
