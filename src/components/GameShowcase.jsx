import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import CountUp from './CountUp.jsx'
import Gallery from './Gallery.jsx'
import Reveal from './Reveal.jsx'
import { ArrowUpRight } from './Icons.jsx'

export default function GameShowcase({ game, flip }) {
  const { t } = useLang()
  const [active, setActive] = useState(0)

  const style = {
    '--accent': game.accent,
    '--accent-rgb': game.accentRgb,
    '--n': game.gallery.length,
  }

  return (
    <article id={game.id} className={`game${flip ? ' game--flip' : ''}`} style={style}>
      {/* Blurred copy of the active image: ambient colour behind the section (large screens). */}
      <div className="game__backdrop" aria-hidden="true">
        {game.gallery.map((item, i) => (
          <img key={item.src} className={i === active ? 'is-active' : ''} src={item.src} alt="" loading="lazy" decoding="async" />
        ))}
      </div>

      <Reveal className="game__media">
        <Gallery game={game} active={active} onActive={setActive} />
      </Reveal>

      <Reveal className="game__body" delay={120}>
        <span className="game__ghost" aria-hidden="true">
          {game.index}
        </span>
        <p className="game__genre">
          <span>{game.index}</span>
          {t(game.genre)}
        </p>
        <h3 className="game__title">{game.title}</h3>
        {game.subtitle && <p className="game__subtitle">{game.subtitle}</p>}
        <p className="game__tagline">{t(game.tagline)}</p>
        <p className="game__desc">{t(game.description)}</p>

        <dl className="game__stats">
          {game.stats.map((stat, i) => (
            <div key={i} className="game__stat">
              <dt>{t(stat.label)}</dt>
              <dd>
                <CountUp value={stat.value} duration={1100} />
              </dd>
            </div>
          ))}
        </dl>

        <h4 className="sr-only">{t(content.games.featuresTitle)}</h4>
        <ul className="game__features">
          {game.features.map((feature, i) => (
            <li key={i}>{t(feature)}</li>
          ))}
        </ul>

        <div className="game__foot">
          <a className="btn btn--accent" href={game.url} target="_blank" rel="noopener noreferrer">
            {t(content.games.visit)}
            <ArrowUpRight width="18" height="18" />
            <span className="sr-only"> {t(content.a11y.opensNewTab)}</span>
          </a>
          <p className="badge">
            <i aria-hidden="true" />
            <span>{t(content.statusLabels[game.status])}</span>
            {game.platform && <span className="badge__sep">{t(game.platform)}</span>}
          </p>
        </div>
      </Reveal>
    </article>
  )
}
