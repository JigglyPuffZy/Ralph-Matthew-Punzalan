import { getExperienceCompanyLogo } from '../../data/experienceLogos'

export default function ExperienceCompanyMark({ company, roleId, initials }) {
  const logo = getExperienceCompanyLogo(roleId)

  return (
    <div
      aria-hidden="true"
      className={`my-experience__company-mark${logo ? ' my-experience__company-mark--logo' : ''}`}
    >
      {logo ? (
        <img alt="" loading="lazy" src={logo} title={company} />
      ) : (
        initials
      )}
    </div>
  )
}
