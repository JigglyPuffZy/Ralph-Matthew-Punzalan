import { cn } from '@/lib/utils'
import { getExperienceCompanyLogo, whiteExperienceLogoRoleIds } from '../../data/experienceLogos'

export default function ExperienceCompanyMark({ company, roleId, initials, className }) {
  const logo = getExperienceCompanyLogo(roleId)
  const isWhiteLogo = whiteExperienceLogoRoleIds.has(roleId)

  return (
    <div
      aria-hidden="true"
      className={cn(
        'exp-journey__company-mark',
        logo && 'exp-journey__company-mark--logo',
        isWhiteLogo && 'exp-journey__company-mark--white',
        className,
      )}
    >
      {logo ? (
        <img alt="" loading="lazy" src={logo} title={company} />
      ) : (
        initials
      )}
    </div>
  )
}
