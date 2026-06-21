import { useEffect, useState } from 'react'
import { primaryNavScrollSections } from '../data/navigation'

export function useScrollSpy() {
  const [activeNavId, setActiveNavId] = useState('about')

  useEffect(() => {
    const updateActiveNav = () => {
      const offset = window.innerHeight * 0.34
      let current = primaryNavScrollSections[0].navId

      for (const { navId, sectionId } of primaryNavScrollSections) {
        const section = document.getElementById(sectionId)
        if (section && section.getBoundingClientRect().top <= offset) {
          current = navId
        }
      }

      setActiveNavId(current)
    }

    updateActiveNav()
    window.addEventListener('scroll', updateActiveNav, { passive: true })
    window.addEventListener('resize', updateActiveNav)

    return () => {
      window.removeEventListener('scroll', updateActiveNav)
      window.removeEventListener('resize', updateActiveNav)
    }
  }, [])

  return activeNavId
}
