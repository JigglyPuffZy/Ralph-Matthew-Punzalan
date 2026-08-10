export function renderExperienceAchievementIcon(icon) {
  const icons = {
    bolt: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
      </svg>
    ),
    chart: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 20V10h3.5v10H4zm6.25 0V4h3.5v16h-3.5zM17 20v-7h3.5v7H17z" />
      </svg>
    ),
    clipboard: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M9 2.5h6a1.5 1.5 0 0 1 1.5 1.5V6H7.5V4A1.5 1.5 0 0 1 9 2.5zM6 6.5h12A2.5 2.5 0 0 1 20.5 9v10A2.5 2.5 0 0 1 18 21.5H6A2.5 2.5 0 0 1 3.5 19V9A2.5 2.5 0 0 1 6 6.5z" />
      </svg>
    ),
    code: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M9.5 5.5 4 12l5.5 6.5V15L7 12l2.5-3V5.5zm5 0v2L12 12l2.5 4.5V19L20 12l-5.5-6.5z" />
      </svg>
    ),
    components: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3 4 7.25v2.5L12 14l8-4.25v-2.5L12 3zm-8 9.25v2.5L12 19l8-4.25v-2.5L12 16.5l-8-4.25z" />
      </svg>
    ),
    dashboard: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M3 3h8v8H3V3zm10 0h8v5h-8V3zM3 13h5v8H3v-8zm7 0h11v8H10v-8z" />
      </svg>
    ),
    flow: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 5h14v3H5V5zm0 7h8v3H5v-3zm0 7h14v3H5v-3zm11-10h3v10h-3V9z" />
      </svg>
    ),
    folder: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6.5h5.8l1.7 1.7A1.5 1.5 0 0 0 12.8 9H19a1.5 1.5 0 0 1 1.5 1.5V19A2.5 2.5 0 0 1 18 21.5H6A2.5 2.5 0 0 1 3.5 19V9A2.5 2.5 0 0 1 6 6.5z" />
      </svg>
    ),
    layout: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 4.5h16A2 2 0 0 1 22 6.5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2zm0 5h16v-3H4v3z" />
      </svg>
    ),
    megaphone: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 9.5v5h4l5 5V4.5L8 9.5H4zm11.5 2a3.5 3.5 0 0 0 0-3v3zm0 5a6 6 0 0 0 0-8v8z" />
      </svg>
    ),
    monitor: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 5.5h16A2 2 0 0 1 22 7.5v8a2 2 0 0 1-2 2h-5v2.5h2.5a1.25 1.25 0 0 1 0 2.5H7.5a1.25 1.25 0 0 1 0-2.5H10V17.5H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" />
      </svg>
    ),
    palette: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3C7.03 3 3 6.58 3 11c0 2.76 2.24 5 5 5h1.75c.97 0 1.75.78 1.75 1.75S9.72 19.5 8.75 19.5H8c-.69 0-1.25.56-1.25 1.25S7.31 22 8 22h4c4.42 0 8-3.58 8-8 0-5.42-3.58-11-8-11zM8.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm4-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
      </svg>
    ),
    prototype: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3zm0 3-5.5 3v6L12 18l5.5-3v-6L12 6z" />
      </svg>
    ),
    rocket: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2.5 14.5 9.5H13l1 9.5-2-1.75-2 1.75 1-9.5H9.5L12 2.5z" />
        <path d="M7 11.5 5 15.5h3L7 11.5zm10 0-1 4h3l-2-4z" />
        <path d="M10.25 10.5h3.5v3.5h-3.5v-3.5z" />
      </svg>
    ),
    sliders: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 7.5h4.5a3 3 0 0 0 6 0H20v2.5h-5.5a3 3 0 0 0-6 0H4V7.5zm0 7h10.5a3 3 0 0 0 6 0H20V17h-2.5a3 3 0 0 0-6 0H4v-2.5z" />
      </svg>
    ),
    users: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M9 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3.5 19.5v-1a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v1h-11zM16.5 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM14.5 19.5v-.75a3.5 3.5 0 0 1 2.75-3.4 3.8 3.8 0 0 0-1-.1 4 4 0 0 0-3.75 3.75v.5h2z" />
      </svg>
    ),
    video: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm5 3.5v5l5-2.5-5-2.5z" />
      </svg>
    ),
    check: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-.75 14.25 5.5-5.5-1.06-1.06-4.44 4.44-2.19-2.19-1.06 1.06 3.25 3.25z" />
      </svg>
    ),
  }

  return icons[icon] ?? icons.check
}

export function getExperienceTechIcon(tech, experienceTechIcons) {
  return experienceTechIcons[tech] ?? null
}
