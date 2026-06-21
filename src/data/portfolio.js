import resumePdf from '../assets/Ralph_Matthew_Punzal_Resume.pdf.pdf'

export const portfolioUrl = 'https://portfolio-pied-phi-21.vercel.app'

export const resumePdfUrl = resumePdf
export const resumeDownloadName = 'Ralph_Matthew_Punzalan_Resume.pdf'

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
