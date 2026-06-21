import './App.css'
import './contact-us.css'
import './responsive.css'

import Navbar from './components/layout/Navbar'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ExperienceSection from './components/sections/ExperienceSection'
import FeaturedWorkSection from './components/sections/FeaturedWorkSection'
import HeroSection from './components/sections/HeroSection'
import { useContactForm } from './hooks/useContactForm'
import { useExperience } from './hooks/useExperience'
import { useFeaturedWork } from './hooks/useFeaturedWork'
import { useHero } from './hooks/useHero'
import { useNavbar } from './hooks/useNavbar'
import { useScrollSpy } from './hooks/useScrollSpy'

function App() {
  const { navOpen, setNavOpen, closeNav } = useNavbar()
  const activeNavId = useScrollSpy()
  const { canvasRef, drawLineSvgRef, drawPathRef, heroRef } = useHero()
  const featured = useFeaturedWork()
  const { activeExperience, activeExperienceId, setActiveExperienceId } = useExperience()
  const contact = useContactForm()

  return (
    <div className="app-shell">
      <Navbar
        activeNavId={activeNavId}
        closeNav={closeNav}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      <HeroSection
        canvasRef={canvasRef}
        drawLineSvgRef={drawLineSvgRef}
        drawPathRef={drawPathRef}
        heroRef={heroRef}
      />

      <AboutSection />

      <FeaturedWorkSection featured={featured} />

      <ExperienceSection
        activeExperience={activeExperience}
        activeExperienceId={activeExperienceId}
        setActiveExperienceId={setActiveExperienceId}
      />

      <ContactSection
        contactForm={contact.contactForm}
        contactQuoteIndex={contact.contactQuoteIndex}
        handleContactClear={contact.handleContactClear}
        handleContactSubmit={contact.handleContactSubmit}
        isSubmitting={contact.isSubmitting}
        submitStatus={contact.submitStatus}
        updateContactField={contact.updateContactField}
      />
    </div>
  )
}

export default App
