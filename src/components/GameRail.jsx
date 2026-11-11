import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { games } from '../data/games.js'
import { ArrowDown } from './Icons.jsx'

// Poster-style index of the games: a grid on desktop, a swipeable rail on phones.
export default function GameRail() {
  const { t } = useLang()

  return (
    <nav className="rail" aria-label={t(content.games.jumpTo)}>
      <ul className="rail__track">
        {games.map((game) => {
          const cover = game.cover ?? game.gallery[0]
          return (
            <li
              key={game.id}
              className="rail__item"
              style={{ '--accent': game.accent, '--accent-rgb': game.accentRgb, '--pos': cover.position || 'center' }}
            >
              <a className="card" href={`#${game.id}`}>
                <img src={cover.src} alt="" loading="lazy" decoding="async" />
                <span className="card__shade" aria-hidden="true" />
                <span className="card__index" aria-hidden="true">
                  {game.index}
                </span>
                <span className="card__status">
                  <i aria-hidden="true" />
                  {t(content.statusLabels[game.status])}
                </span>
                <span className="card__info">
                  <span className="card__genre">{t(game.genre)}</span>
                  <span className="card__title">{game.title}</span>
                </span>
                <span className="card__arrow" aria-hidden="true">
                  <ArrowDown width="18" height="18" />
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
