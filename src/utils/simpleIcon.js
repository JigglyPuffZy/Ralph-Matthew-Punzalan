import {
  siAngular,
  siCss,
  siDart,
  siDavinciresolve,
  siElementor,
  siExpo,
  siExpress,
  siFigma,
  siFlutter,
  siFramer,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siWebflow,
  siWordpress,
} from 'simple-icons'

const SIMPLE_ICONS = {
  angular: siAngular,
  css: siCss,
  dart: siDart,
  davinciresolve: siDavinciresolve,
  elementor: siElementor,
  expo: siExpo,
  express: siExpress,
  figma: siFigma,
  flutter: siFlutter,
  framer: siFramer,
  github: siGithub,
  html5: siHtml5,
  javascript: siJavascript,
  laravel: siLaravel,
  mongodb: siMongodb,
  nextdotjs: siNextdotjs,
  nodedotjs: siNodedotjs,
  php: siPhp,
  react: siReact,
  supabase: siSupabase,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  vercel: siVercel,
  vite: siVite,
  webflow: siWebflow,
  wordpress: siWordpress,
}

const OPENAI_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"><path fill="currentColor" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.515 2.899A5.985 5.985 0 0 0 13.803 24a6.042 6.042 0 0 0 5.808-4.205 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.326-6.074ZM13.803 22.476h-.032a4.072 4.072 0 0 1-2.842-1.283 4.025 4.025 0 0 1-.978-2.905l-.001-.032a4.001 4.001 0 0 1 1.284-2.842 4.072 4.072 0 0 1 2.905-.978h.032a4.001 4.001 0 0 1 2.842 1.284 4.025 4.025 0 0 1 .978 2.905v.032a4.001 4.001 0 0 1-1.284 2.842 4.072 4.072 0 0 1-2.905.978ZM6.002 11.576a4.001 4.001 0 0 1-2.842-1.284 4.025 4.025 0 0 1-.978-2.905v-.032a4.001 4.001 0 0 1 1.284-2.842 4.072 4.072 0 0 1 2.905-.978h.032a4.001 4.001 0 0 1 2.842 1.284 4.025 4.025 0 0 1 .978 2.905v.032a4.001 4.001 0 0 1-1.284 2.842 4.072 4.072 0 0 1-2.905.978h-.032ZM12.002 2.524h.032a4.001 4.001 0 0 1 2.842 1.284 4.025 4.025 0 0 1 .978 2.905v.032a4.001 4.001 0 0 1-1.284 2.842 4.072 4.072 0 0 1-2.905.978h-.032a4.001 4.001 0 0 1-2.842-1.284 4.025 4.025 0 0 1-.978-2.905v-.032a4.001 4.001 0 0 1 1.284-2.842 4.072 4.072 0 0 1 2.905-.978h.032Zm5.801 9.052a4.001 4.001 0 0 1 2.842 1.284 4.025 4.025 0 0 1 .978 2.905v.032a4.001 4.001 0 0 1-1.284 2.842 4.072 4.072 0 0 1-2.905.978h-.032a4.001 4.001 0 0 1-2.842-1.284 4.025 4.025 0 0 1-.978-2.905v-.032a4.001 4.001 0 0 1 1.284-2.842 4.072 4.072 0 0 1 2.905-.978h.032Z"/></svg>`

function toDataUri(svg) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

function buildIconSvg(path, color) {
  const fill = color.replace('#', '')
  return `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path fill="#${fill}" d="${path}"/></svg>`
}

export function simpleIconSrc(slug, color) {
  if (slug === 'openai') {
    const fill = color.replace('#', '')
    return toDataUri(OPENAI_ICON.replace('currentColor', `#${fill}`))
  }

  const icon = SIMPLE_ICONS[slug]
  if (!icon) return null

  const fill = (color ?? icon.hex).replace('#', '')
  return toDataUri(buildIconSvg(icon.path, fill))
}

export function icon(slug, color) {
  const src = simpleIconSrc(slug, color)
  if (!src) {
    throw new Error(`Unknown simple icon slug: ${slug}`)
  }
  return src
}
