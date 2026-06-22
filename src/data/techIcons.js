import canvaLogo from '../assets/canva logo.webp'
import capcutLogo from '../assets/capcut logo.webp'
import diviLogo from '../assets/divi logo.png'
import ghlLogo from '../assets/ghl logo.png'
import photoshopLogo from '../assets/Photoshop-logo.png'
import { icon } from '../utils/simpleIcon'

export const featuredTechIcons = {
  'ChatGPT API': icon('openai', 'ffffff'),
  CSS: icon('css', '1572B6'),
  Dart: icon('dart', '0175C2'),
  Divi: diviLogo,
  Elementor: icon('elementor', '92003B'),
  'Expo Go': icon('expo', 'ffffff'),
  'Expo Router': icon('expo', 'ffffff'),
  Express: icon('express', 'ffffff'),
  Figma: icon('figma', 'F24E1E'),
  Flutter: icon('flutter', '02569B'),
  'Framer Motion': icon('framer', '0055FF'),
  'Go High Level': ghlLogo,
  HTML: icon('html5', 'E34F26'),
  JavaScript: icon('javascript', 'F7DF1E'),
  MongoDB: icon('mongodb', '47A248'),
  'Node.js': icon('nodedotjs', '5FA04E'),
  PHP: icon('php', '777BB4'),
  React: icon('react', '61DAFB'),
  'React Native': icon('react', '61DAFB'),
  Supabase: icon('supabase', '3FCF8E'),
  'Tailwind CSS': icon('tailwindcss', '38BDF8'),
  TypeScript: icon('typescript', '3178C6'),
  Vite: icon('vite', '646CFF'),
  WordPress: icon('wordpress', '21759B'),
  'Next.js': icon('nextdotjs', 'ffffff'),
}

export const experienceTechIcons = {
  ...featuredTechIcons,
  Canva: canvaLogo,
  CapCut: capcutLogo,
  Photoshop: photoshopLogo,
}
