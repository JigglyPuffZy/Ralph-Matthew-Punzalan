export function renderExperienceAchievementIcon(icon) {
  if (icon === 'star') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3 9.8 8.2 4 9l4.2 3.8L7 18.5 12 15.6l5 2.9-1.2-5.7L20 9l-5.8-.8L12 3Z" />
      </svg>
    )
  }

  if (icon === 'bolt') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 16.5c8-8 11-11 15-11-1 4-1 4-9 12" />
      <path d="m12 15 3 3" />
      <path d="M9 6h.01" />
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

export function getExperienceTechIcon(tech, experienceTechIcons) {
  return experienceTechIcons[tech] ?? null
}
