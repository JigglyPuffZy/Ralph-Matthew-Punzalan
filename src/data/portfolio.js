import resumePdf from '../assets/Ralph_Matthew_Punzal_Resume.pdf.pdf'

export const portfolioUrl = 'https://portfolio-pied-phi-21.vercel.app'

export const resumePdfUrl = resumePdf
export const resumeDownloadName = 'Ralph_Matthew_Punzalan_Resume.pdf'

export const lockedPortfolioProjectIds = new Set([
  'marians-pottery',
  'network-homeowners',
  'quiz-whirl-app',
  'trireg-mobile-app',
  'trireg-web',
  'vtrack-mobile-app',
  'vtrack-web-mobile',
])

export const isLockedPortfolioProject = (projectId, categoryType) =>
  (categoryType === 'web' || categoryType === 'mobile') && lockedPortfolioProjectIds.has(projectId)

export const getProjectActionLabel = (project) => {
  if (project.actionLabel) return project.actionLabel
  if (project.categoryId === 'figma-projects' && project.liveUrl) return 'View Figma'
  if (project.liveUrl) return 'View Page'
  return 'View Portfolio'
}
