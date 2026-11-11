import { useEffect, useMemo, useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { totals } from '../data/games.js'
import { asset } from '../data/site.js'
import CountUp from './CountUp.jsx'
import { ArrowDown } from './Icons.jsx'

// Tiny seeded PRNG so the floating embers are stable between renders.
function seeded(seed) {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function useEmbers(count) {
  return useMemo(() => {
    const rand = seeded(7)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: `${Math.round(rand() * 100)}%`,
      size: `${(1 + rand() * 2.4).toFixed(1)}px`,
      duration: `${(11 + rand() * 14).toFixed(1)}s`,
      delay: `${(-rand() * 24).toFixed(1)}s`,
      drift: `${Math.round((rand() - 0.5) * 140)}px`,
    }))
  }, [count])
}

// Pointer spotlight + emblem parallax (mouse devices only).
function usePointerLight(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return undefined

    let frame = 0
    const onMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--mx', ((event.clientX - rect.left) / rect.width).toFixed(3))
        el.style.setProperty('--my', ((event.clientY - rect.top) / rect.height).toFixed(3))
      })
    }
    el.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
    }
  }, [ref])
}

export default function Hero() {
  const { t } = useLang()
  const heroRef = useRef(null)
  const embers = useEmbers(26)
  const [before, accent, after] = t(content.hero.title)
  usePointerLight(heroRef)

  const stats = [
    { value: totals.games, label: content.hero.stats.games },
    { value: totals.bosses, label: content.hero.stats.bosses },
    { value: totals.levels, label: content.hero.stats.levels },
  ]

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        {embers.map((e) => (
          <span
            key={e.id}
            className="ember"
            style={{ '--x': e.x, '--s': e.size, '--dur': e.duration, '--delay': e.delay, '--drift': e.drift }}
          />
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">{t(content.hero.eyebrow)}</p>
          <h1 className="hero__title">
            {before}
            <em>{accent}</em>
            {after}
          </h1>
          <p className="hero__lead">{t(content.hero.lead)}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#games">
              {t(content.hero.primary)}
              <ArrowDown width="18" height="18" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              {t(content.hero.secondary)}
            </a>
          </div>

          <dl className="hero__stats">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <dt>{t(s.label)}</dt>
                <dd>
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="emblem" aria-hidden="true">
          <svg className="emblem__ring emblem__ring--ticks" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="190" />
          </svg>
          <svg className="emblem__ring emblem__ring--dots" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="174" />
          </svg>
          <svg className="emblem__ring emblem__ring--line" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="160" />
          </svg>
          <div className="emblem__glow" />
          <img
            className="emblem__logo"
            src={asset('logo-mark.webp')}
            alt=""
            width="512"
            height="512"
            fetchPriority="high"
          />
        </div>
      </div>

      <a className="scroll-hint" href="#games" aria-label={t(content.hero.scroll)}>
        <span>{t(content.hero.scroll)}</span>
        <i />
      </a>
    </section>
  )
}
