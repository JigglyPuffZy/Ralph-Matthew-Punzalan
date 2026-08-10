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

const githubVideoBase =
  'https://media.githubusercontent.com/media/JigglyPuffZy/Ralph-Matthew-Punzalan/main/src/assets'

const githubVideo = (filename) => `${githubVideoBase}/${encodeURIComponent(filename)}`

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
  // Stream from GitHub LFS CDN — Vercel builds do not pull Git LFS files.
  'kea-babies-video': githubVideo('SampleTas-KeaBabies.mp4'),
  'selling-course-video': githubVideo('SellingCourse_YouTubeLongForm.mp4'),
  'disorder-video': githubVideo('THEY TOLD ME I HAD A DISORDER.mp4'),
  'webhouse-trial-video': githubVideo('WebhouseTrial_2.mp4'),
  'lashonhara-video': githubVideo('LASHONHARA_v5.mp4'),
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
