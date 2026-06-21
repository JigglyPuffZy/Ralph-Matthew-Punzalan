export function renderPrimaryNavIcon(id) {
  const iconProps = {
    'aria-hidden': true,
    className: 'glass-navbar__icon',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
  }

  switch (id) {
    case 'about':
      return (
        <svg {...iconProps}>
          <path d="M5 12.5 12 6l7 6.5" />
          <path d="M7 11.5V19h10v-7.5" />
          <path d="M10 19v-4h4v4" />
        </svg>
      )
    case 'workflow':
      return (
        <svg {...iconProps}>
          <path d="M14.7 6.3a4.5 4.5 0 0 0-6.1 6.1L4 17l3 3 4.6-4.6a4.5 4.5 0 0 0 6.1-6.1l-2.2 2.2-3.7-3.7 2.2-2.2Z" />
          <circle cx="18.5" cy="5.5" r="1.5" />
          <path d="M18.5 7.5v2.5" />
        </svg>
      )
    case 'projects':
      return (
        <svg {...iconProps}>
          <path d="M4 8.5V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.5" />
          <path d="M4 8.5 12 4l8 4.5" />
          <path d="M9 12h6" />
        </svg>
      )
    case 'experience':
      return (
        <svg {...iconProps}>
          <path d="M12 3.5 14.2 8l4.8.7-3.5 3.4.8 4.8L12 14.8 7.7 16.9l.8-4.8L5 8.7l4.8-.7L12 3.5Z" />
        </svg>
      )
    default:
      return null
  }
}
