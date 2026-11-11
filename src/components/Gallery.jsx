import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { ChevronLeft, ChevronRight, Expand } from './Icons.jsx'
import Lightbox from './Lightbox.jsx'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Swipeable scroll-snap carousel (touch, trackpad, arrows, thumbnails) + lightbox.
export default function Gallery({ game, active, onActive }) {
  const { t } = useLang()
  const trackRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)
  const items = game.gallery
  const last = items.length - 1

  // Report which slide is centred while the user scrolls/swipes.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / track.clientWidth)
        onActive(Math.max(0, Math.min(last, index)))
      })
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      track.removeEventListener('scroll', onScroll)
    }
  }, [last, onActive])

  const goTo = (index) => {
    const track = trackRef.current
    if (!track) return
    const target = Math.max(0, Math.min(last, index))
    track.scrollTo({ left: target * track.clientWidth, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    onActive(target)
  }

  return (
    <div className="gallery" role="group" aria-roledescription="carousel" aria-label={`${game.title} — ${t(content.a11y.gallery)}`}>
      <div className="gallery__stage">
        <ul className="gallery__track" ref={trackRef}>
          {items.map((item, i) => (
            <li
              key={item.src}
              className="slide"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${items.length}`}
              style={{ '--pos': item.position || 'center' }}
            >
              <button
                type="button"
                className="slide__btn"
                onClick={() => setLightbox(i)}
                aria-label={`${t(content.a11y.enlarge)}: ${t(item.alt)}`}
              >
                <img src={item.src} alt={t(item.alt)} loading="lazy" decoding="async" draggable="false" />
              </button>
            </li>
          ))}
        </ul>

        <span className="gallery__expand" aria-hidden="true">
          <Expand width="18" height="18" />
        </span>
        <span className="gallery__count" aria-hidden="true">
          {active + 1} / {items.length}
        </span>

        {items.length > 1 && (
          <>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--prev"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label={t(content.a11y.prev)}
            >
              <ChevronLeft width="22" height="22" />
            </button>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--next"
              onClick={() => goTo(active + 1)}
              disabled={active === last}
              aria-label={t(content.a11y.next)}
            >
              <ChevronRight width="22" height="22" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails on larger screens, dots on phones. */}
      <div className="thumbs">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className="thumb"
            aria-pressed={i === active}
            aria-label={`${t(content.a11y.image)} ${i + 1}: ${t(item.alt)}`}
            onClick={() => goTo(i)}
          >
            <img src={item.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: item.position || 'center' }} />
          </button>
        ))}
      </div>
      <div className="dots" aria-hidden="true">
        {items.map((item, i) => (
          <button key={item.src} type="button" tabIndex={-1} className={i === active ? 'is-active' : ''} onClick={() => goTo(i)}>
            <span />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          items={items}
          index={lightbox}
          title={game.title}
          accent={game.accent}
          accentRgb={game.accentRgb}
          onIndex={(i) => {
            setLightbox(i)
            goTo(i)
          }}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
