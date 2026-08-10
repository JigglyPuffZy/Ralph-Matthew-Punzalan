import a7Thumbnail from './assets/a7 thumbnail.png'
import arcMobile from './assets/arc mobile.png'
import arcWeb from './assets/arc web.png'
import cestDashboard from './assets/cest dashboard web.png'
import doctorSanti from './assets/doctor santi web.png'
import laborLinkz from './assets/LaborLinkz.png'
import mariansPottery from "./assets/Marian's.png"
import planto from './assets/planto web.png'
import plantpal from './assets/Plantpal.png'
import quizWhirl from './assets/QuizWHirl.png'
import sas from './assets/sourcing analysis web.png'
import triregMobile from './assets/Trireg mobile.png'
import triregWeb from './assets/trireg for web.png'
import ultimateLedCourse from './assets/ultimate led course web.png'
import vertereWeb from './assets/vertere web.png'
import vtrackMobile from './assets/Vtrack mobile.png'
import vtrackWeb from './assets/vtrack web dashboard.png'

// Video imports
import keaBabiesVideo from './assets/SampleTas-KeaBabies.mp4'
import sellingCourseVideo from './assets/SellingCourse_YouTubeLongForm.mp4'
import disorderVideo from './assets/THEY TOLD ME I HAD A DISORDER.mp4'
import webhouseVideo from './assets/WebhouseTrial_2.mp4'
import lashonharaVideo from './assets/LASHONHARA_v5.mp4'

export const projectImages = {
  'a7-recruitment': a7Thumbnail,
  'arc-uiux-mobile': arcMobile,
  'arc-uiux-web': arcWeb,
  'cest-dashboard': cestDashboard,
  'doctor-santi': doctorSanti,
  'laborlinkz': laborLinkz,
  'laborlinkz-uiux-mobile': laborLinkz,
  'marians-pottery': mariansPottery,
  'planto-uiux': planto,
  'plantpal-uiux': plantpal,
  'quiz-whirl-app': quizWhirl,
  'sourcing-analysis-uiux': sas,
  'trireg-mobile-app': triregMobile,
  'trireg-uiux-mobile': triregMobile,
  'trireg-uiux-web': triregWeb,
  'trireg-web': triregWeb,
  'ultimate-led-course': ultimateLedCourse,
  'vertere-global': vertereWeb,
  'vtrack-mobile-app': vtrackMobile,
  'vtrack-uiux-mobile': vtrackMobile,
  'vtrack-uiux-web': vtrackWeb,
  'vtrack-web-mobile': vtrackWeb,
  // Video projects
  'kea-babies-video': keaBabiesVideo,
  'selling-course-video': sellingCourseVideo,
  'disorder-video': disorderVideo,
  'webhouse-trial-video': webhouseVideo,
  'lashonhara-video': lashonharaVideo,
}

export const getProjectImage = (projectId) => projectImages[projectId] ?? null

export const getProjectPreviewMode = (project) =>
  project?.platform === 'Mobile' ? 'mobile' : 'desktop'

export const isVideoProject = (projectId) => {
  const videoProjectIds = [
    'kea-babies-video',
    'selling-course-video',
    'disorder-video',
    'webhouse-trial-video',
    'lashonhara-video',
  ]
  return videoProjectIds.includes(projectId)
}
