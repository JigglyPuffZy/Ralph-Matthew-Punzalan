export const portfolioUrl = 'https://portfolio-pied-phi-21.vercel.app'

export const lockedPortfolioProjectIds = new Set([
  'marians-pottery',
  'quiz-whirl-app',
  'trireg-mobile-app',
  'trireg-web',
  'vtrack-mobile-app',
  'vtrack-web-mobile',
])

export const isLockedPortfolioProject = (projectId, categoryType) =>
  (categoryType === 'web' || categoryType === 'mobile') && lockedPortfolioProjectIds.has(projectId)

export const getProjectActionLabel = (project) =>
  project.actionLabel ?? (project.liveUrl ? 'View Page' : 'View Portfolio')
