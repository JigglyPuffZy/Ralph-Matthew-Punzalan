import caribbeanLedLogo from '../assets/caribbean led solutions logo.jpg'
import dilgLogo from '../assets/dilg logo.png'
import dostLogo from '../assets/dost logo.png'
import freelanceLogo from '../assets/free lance logo.png'
import lguStoTomasLogo from '../assets/lgu sto tomas.png'
import oneOverZeroLogo from '../assets/one over zero logo.jpg'

export const experienceCompanyLogos = {
  'caribbean-led': caribbeanLedLogo,
  dilg: dilgLogo,
  'dost-region-ii': dostLogo,
  freelance: freelanceLogo,
  'lgu-sto-tomas': lguStoTomasLogo,
  'one-over-zero': oneOverZeroLogo,
}

export const getExperienceCompanyLogo = (roleId) => experienceCompanyLogos[roleId] ?? null
