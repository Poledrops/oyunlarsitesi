import { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { games } from '../data/games.js'
import { STUDIO } from '../data/site.js'
import Brand from './Brand.jsx'
import LangSwitch from './LangSwitch.jsx'
import { Mail } from './Icons.jsx'

export default function Header() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: lock page scroll, close with Escape.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Leaving the mobile breakpoint closes the menu.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 861px)')
    const onChange = (event) => event.matches && setOpen(false)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`header${scrolled || open ? ' header--solid' : ''}`}>
        <div className="container header__bar">
          <Brand onClick={close} />

          <nav className="nav" aria-label={t(content.a11y.mainNav)}>
            {content.nav.map((item) => (
              <a key={item.id} className="nav__link" href={`#${item.id}`}>
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <LangSwitch />
            <button
              type="button"
              className={`burger${open ? ' is-open' : ''}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={t(open ? content.a11y.closeMenu : content.a11y.openMenu)}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <div id="mobile-menu" className={`mobile${open ? ' is-open' : ''}`}>
        <nav className="mobile__nav" aria-label={t(content.a11y.mainNav)}>
          {content.nav.map((item, index) => (
            <a
              key={item.id}
              className="mobile__link"
              href={`#${item.id}`}
              onClick={close}
              style={{ '--i': index }}
            >
              <span className="mobile__num">0{index + 1}</span>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="mobile__games" style={{ '--i': 3 }}>
          <p className="mobile__label">{t(content.games.eyebrow)}</p>
          <ul>
            {games.map((game) => (
              <li key={game.id}>
                <a
                  className="mobile__game"
                  href={`#${game.id}`}
                  onClick={close}
                  style={{ '--accent': game.accent }}
                >
                  <i aria-hidden="true" />
                  {game.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="btn btn--primary mobile__mail"
          href={`mailto:${STUDIO.email}`}
          style={{ '--i': 4 }}
        >
          <Mail width="18" height="18" />
          {t(content.contact.email)}
        </a>
      </div>
    </>
  )
}
