export const contactLocation = {
  embedUrl: 'https://www.google.com/maps?q=Philippines&hl=en&z=6&output=embed',
  label: 'Centro Santo Tomas, Isabela',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Centro+Santo+Tomas,+Isabela,+Philippines',
  regionLabel: 'Philippines',
}

export const contactChannels = [
  {
    detail: 'ralphmatthewpunzalan23@gmail.com',
    href: 'mailto:ralphmatthewpunzalan23@gmail.com',
    icon: 'email',
    title: 'Email Me',
  },
  {
    detail: '+63 912 345 6789',
    href: 'tel:+639123456789',
    icon: 'phone',
    title: 'Call Me',
  },
  {
    detail: contactLocation.label,
    href: contactLocation.mapsUrl,
    icon: 'location',
    title: 'Location',
  },
  {
    detail: 'linkedin.com/in/ralph-matthew-punzalan-6767132b2',
    href: 'https://www.linkedin.com/in/ralph-matthew-punzalan-6767132b2/',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
]

export const contactSocials = [
  { href: 'https://github.com/JigglyPuffZy', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ralph-matthew-punzalan-6767132b2/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'https://www.instagram.com/jigglypufzzz', icon: 'instagram', label: 'Instagram' },
  { href: 'https://facebook.com/JigglypuffZy', icon: 'facebook', label: 'Facebook' },
]

export const contactQuotes = [
  'Great products start with a clear idea and a conversation worth having.',
  'Design with purpose. Build with care. Ship with confidence.',
  'If you have a vision, let\'s shape it into something people enjoy using.',
]

export const emptyContactForm = {
  email: '',
  message: '',
  name: '',
  subject: '',
}
