import { useEffect, useState } from 'react'

export function useNavbar() {
  const [navOpen, setNavOpen] = useState(false)
  const closeNav = () => setNavOpen(false)

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setNavOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return { navOpen, setNavOpen, closeNav }
}
