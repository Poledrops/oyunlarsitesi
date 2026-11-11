import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { totals } from '../data/games.js'
import { asset } from '../data/site.js'
import { icons } from './Icons.jsx'
import Reveal from './Reveal.jsx'

// Feeds the cursor position to the card so CSS can paint a soft spotlight.
const trackPointer = (event) => {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  card.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export default function Studio() {
  const { t } = useLang()
  const { studio } = content

  return (
    <section id="studio" className="section studio">
      <div className="container">
        <div className="studio__grid">
          <Reveal className="studio__text">
            <p className="eyebrow">{t(studio.eyebrow)}</p>
            <h2 className="section__title">{t(studio.title)}</h2>
            {studio.paragraphs.map((p, i) => (
              <p key={i} className="studio__p">
                {t(p)}
              </p>
            ))}
          </Reveal>

          <Reveal className="raven" delay={140}>
            <div className="raven__art" aria-hidden="true">
              <img src={asset('logo-mark.webp')} alt="" width="512" height="512" loading="lazy" />
            </div>
            <h3 className="raven__title">{t(studio.raven.title)}</h3>
            <p className="raven__text">{t(studio.raven.text)}</p>
          </Reveal>
        </div>

        <ul className="values">
          {studio.values.map((value, i) => {
            const Icon = icons[value.icon]
            return (
              <Reveal as="li" key={value.icon} className="value" delay={i * 110} onPointerMove={trackPointer}>
                <span className="value__icon">
                  <Icon width="26" height="26" />
                </span>
                <h3 className="value__title">{t(value.title)}</h3>
                <p className="value__text">{t(value.text).replace('{bosses}', totals.bosses)}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
