import { games } from '../data/games.js'

// Decorative ticker of game titles. The list is rendered twice for a seamless loop.
export default function Marquee() {
  const group = (suffix) => (
    <ul className="marquee__group" key={suffix}>
      {games.map((game) => (
        <li key={game.id} className="marquee__item">
          {game.title}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group('a')}
        {group('b')}
      </div>
    </div>
  )
}
