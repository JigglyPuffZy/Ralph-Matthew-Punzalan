import { useRef, useState } from 'react'
import { portfolioProjects, projectCategories as featuredProjects } from '../projects'

function getFeaturedMotionClass(direction) {
  if (direction === 1) {
    return 'featured-work__motion--next'
  }

  if (direction === -1) {
    return 'featured-work__motion--prev'
  }

  return 'featured-work__motion--fade'
}

export function useFeaturedWork() {
  const [activeCategoryId, setActiveCategoryId] = useState(featuredProjects[0].id)
  const [activeProjectId, setActiveProjectId] = useState(portfolioProjects[0].id)
  const [featuredMotion, setFeaturedMotion] = useState({ direction: 0, token: 0 })
  const [isShowcaseTransitioning, setIsShowcaseTransitioning] = useState(false)
  const showcaseTransitionRef = useRef(false)

  const activeCategory =
    featuredProjects.find((category) => category.id === activeCategoryId) ?? featuredProjects[0]
  const activeProject =
    portfolioProjects.find((project) => project.id === activeProjectId) ?? portfolioProjects[0]
  const activeCategoryProjects = portfolioProjects.filter(
    (project) => project.categoryId === activeCategoryId,
  )
  const activeProjectIndex = Math.max(
    0,
    activeCategoryProjects.findIndex((project) => project.id === activeProjectId),
  )
  const isMobileShowcase = activeCategory.type === 'mobile'

  const advanceFeaturedProject = (projectId, direction = 0) => {
    if (showcaseTransitionRef.current) {
      return
    }

    const project = portfolioProjects.find((item) => item.id === projectId)
    if (!project || project.id === activeProjectId) {
      return
    }

    showcaseTransitionRef.current = true
    setIsShowcaseTransitioning(true)
    setFeaturedMotion((current) => ({ direction, token: current.token + 1 }))
    setActiveProjectId(project.id)
    setActiveCategoryId(project.categoryId)

    window.setTimeout(() => {
      showcaseTransitionRef.current = false
      setIsShowcaseTransitioning(false)
    }, 420)
  }

  const selectFeaturedCategory = (categoryId) => {
    setActiveCategoryId(categoryId)
    const firstProject = portfolioProjects.find((project) => project.categoryId === categoryId)
    if (firstProject) {
      advanceFeaturedProject(firstProject.id, 0)
    }
  }

  const selectFeaturedProject = (projectId) => {
    const nextIndex = activeCategoryProjects.findIndex((project) => project.id === projectId)
    const direction =
      nextIndex > activeProjectIndex ? 1 : nextIndex < activeProjectIndex ? -1 : 0
    advanceFeaturedProject(projectId, direction)
  }

  const selectAdjacentFeaturedProject = (direction) => {
    if (activeCategoryProjects.length === 0) {
      return
    }

    const nextIndex =
      (activeProjectIndex + direction + activeCategoryProjects.length) %
      activeCategoryProjects.length
    advanceFeaturedProject(activeCategoryProjects[nextIndex].id, direction)
  }

  const featuredMotionClass = getFeaturedMotionClass(featuredMotion.direction)
  const featuredMotionKey = `${activeProject.id}-${featuredMotion.token}`

  const featuredIntelligence = [
    { label: 'Status', value: activeProject.status },
    { label: 'Platform', value: activeProject.platform },
    { label: 'Role', value: activeProject.roles ?? [activeProject.role] },
    { label: 'Timeline', value: activeProject.timeline },
    { label: 'Type', value: activeProject.projectType },
  ]

  return {
    activeCategory,
    activeCategoryProjects,
    activeProject,
    activeProjectId,
    activeProjectIndex,
    activeCategoryId,
    featuredIntelligence,
    featuredMotionClass,
    featuredMotionKey,
    featuredProjects,
    isMobileShowcase,
    isShowcaseTransitioning,
    selectAdjacentFeaturedProject,
    selectFeaturedCategory,
    selectFeaturedProject,
  }
}
