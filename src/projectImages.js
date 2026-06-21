import a7Thumbnail from './assets/a7 thumbnail.png'
import arcMobile from './assets/arc mobile.png'
import arcWeb from './assets/ARC.png'
import briorayCms from './assets/brioray thumbnail for cms.png'
import briorayFigma from './assets/Brioray for figma.png'
import doctorSanti from './assets/doc santi.png'
import laborLinkz from './assets/LaborLinkz.png'
import mariansPottery from "./assets/Marian's.png"
import networkHomeowners from './assets/Network.png'
import planto from './assets/Planto.png'
import plantpal from './assets/Plantpal.png'
import proAssisting from './assets/proassisting.png'
import quizWhirl from './assets/QuizWHirl.png'
import sas from './assets/Sas.png'
import triregMobile from './assets/Trireg mobile.png'
import triregWeb from './assets/trireg for web.png'
import uledThumbnail from './assets/uled thumbnail.png'
import vertereThumbnail from './assets/vertere thumbnail.png'
import vtrackMobile from './assets/Vtrack mobile.png'
import vtrackWeb from './assets/vtrack for web (2).png'

export const projectImages = {
  'a7-recruitment': a7Thumbnail,
  'arc-uiux-mobile': arcMobile,
  'arc-uiux-web': arcWeb,
  'brioray-cms': briorayCms,
  'brioray-uiux-web': briorayFigma,
  'doctor-santi': doctorSanti,
  'laborlinkz': laborLinkz,
  'laborlinkz-uiux-mobile': laborLinkz,
  'marians-pottery': mariansPottery,
  'network-homeowners': networkHomeowners,
  'network-homeowners-uiux': networkHomeowners,
  'planto-uiux': planto,
  'plantpal-uiux': plantpal,
  'pro-assisting-uiux': proAssisting,
  'quiz-whirl-app': quizWhirl,
  'sourcing-analysis-uiux': sas,
  'trireg-mobile-app': triregMobile,
  'trireg-uiux-mobile': triregMobile,
  'trireg-uiux-web': triregWeb,
  'trireg-web': triregWeb,
  'ultimate-led-course': uledThumbnail,
  'vertere-global': vertereThumbnail,
  'vtrack-mobile-app': vtrackMobile,
  'vtrack-uiux-mobile': vtrackMobile,
  'vtrack-uiux-web': vtrackWeb,
  'vtrack-web-mobile': vtrackWeb,
}

export const getProjectImage = (projectId) => projectImages[projectId] ?? null

export const getProjectPreviewMode = (project) =>
  project?.platform === 'Mobile' ? 'mobile' : 'desktop'
