import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { games } from '../data/games.js'
import GameRail from './GameRail.jsx'
import GameShowcase from './GameShowcase.jsx'
import Reveal from './Reveal.jsx'

export default function Games() {
  const { t } = useLang()

  return (
    <section id="games" className="section games">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">{t(content.games.eyebrow)}</p>
          <h2 className="section__title">{t(content.games.title)}</h2>
          <p className="section__lead">{t(content.games.lead)}</p>
        </Reveal>

        <Reveal delay={100}>
          <GameRail />
        </Reveal>

        {games.map((game, index) => (
          <GameShowcase key={game.id} game={game} flip={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
