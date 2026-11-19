import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { SOCIALS } from '../data/site.js'
import { socialIcons } from './Icons.jsx'

// Row of round social-profile buttons. `label` names the surrounding <ul> for screen readers.
export default function Socials({ label, className = '' }) {
  const { t } = useLang()

  return (
    <ul className={`socials ${className}`.trim()} aria-label={label}>
      {SOCIALS.map((social) => {
        const Icon = socialIcons[social.icon]
        return (
          <li key={social.id}>
            <a
              className="socials__link"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} ${t(content.a11y.opensNewTab)}`}
              title={social.label}
            >
              <Icon width="20" height="20" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
