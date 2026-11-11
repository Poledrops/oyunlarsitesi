import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { games } from '../data/games.js'
import { STUDIO } from '../data/site.js'
import { ArrowUpRight, Github, Mail } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const { t } = useLang()
  const { contact } = content

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__panel">
          <div className="contact__copy">
            <p className="eyebrow">{t(contact.eyebrow)}</p>
            <h2 className="section__title">{t(contact.title)}</h2>
            <p className="contact__text">{t(contact.text)}</p>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${STUDIO.email}`}>
                <Mail width="18" height="18" />
                {t(contact.email)}
              </a>
              <a className="btn btn--ghost" href={STUDIO.github} target="_blank" rel="noopener noreferrer">
                <Github width="18" height="18" />
                {t(contact.github)}
                <span className="sr-only"> {t(content.a11y.opensNewTab)}</span>
              </a>
            </div>
            <p className="contact__mail">{STUDIO.email}</p>

            <div className="team">
              <h3 className="team__title">{t(contact.team.title)}</h3>
              <dl className="team__list">
                {contact.team.members.map((member) => (
                  <div key={member.name} className="team__member">
                    <dt>{t(member.role)}</dt>
                    <dd>{member.name}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="contact__sites">
            <h3 className="contact__sites-title">{t(contact.sitesTitle)}</h3>
            <ul>
              {games.map((game) => (
                <li key={game.id}>
                  <a
                    className="site-link"
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--accent': game.accent }}
                  >
                    <span className="site-link__dot" aria-hidden="true" />
                    <span className="site-link__name">{game.title}</span>
                    <ArrowUpRight width="18" height="18" />
                    <span className="sr-only"> {t(content.a11y.opensNewTab)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
