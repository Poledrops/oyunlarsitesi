import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { ChevronLeft, ChevronRight, Close } from './Icons.jsx'

// Full-screen image viewer: arrows / swipe to navigate, Esc / backdrop to close.
export default function Lightbox({ items, index, title, accent, accentRgb, onIndex, onClose }) {
  const { t } = useLang()
  const dialogRef = useRef(null)
  const touchStart = useRef(null)
  const count = items.length
  const item = items[index]

  const go = (delta) => onIndex((index + delta + count) % count)

  // Keep the latest handlers reachable from the one-time key listener.
  const latest = useRef({ go, onClose })
  useEffect(() => {
    latest.current = { go, onClose }
  })

  useEffect(() => {
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') latest.current.onClose()
      else if (event.key === 'ArrowLeft') latest.current.go(-1)
      else if (event.key === 'ArrowRight') latest.current.go(1)
      else if (event.key === 'Tab') {
        // Minimal focus trap.
        const focusable = dialogRef.current?.querySelectorAll('button:not([disabled])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    dialogRef.current?.querySelector('[data-autofocus]')?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      opener?.focus?.({ preventScroll: true })
    }
  }, [])

  const onTouchStart = (event) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = (event) => {
    const start = touchStart.current
    touchStart.current = null
    if (!start) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) go(dx < 0 ? 1 : -1)
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.4) onClose()
  }

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{ '--accent': accent, '--accent-rgb': accentRgb }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="lightbox__bar">
        <p className="lightbox__title">
          <span>{title}</span>
          <span className="lightbox__count">
            {index + 1} / {count}
          </span>
        </p>
        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label={t(content.a11y.close)}
          data-autofocus
        >
          <Close width="22" height="22" />
        </button>
      </div>

      <figure className="lightbox__figure" onClick={(event) => event.target === event.currentTarget && onClose()}>
        <img key={item.src} src={item.src} alt={t(item.alt)} />
        <figcaption>{t(item.alt)}</figcaption>
      </figure>

      {count > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={() => go(-1)}
            aria-label={t(content.a11y.prev)}
          >
            <ChevronLeft width="24" height="24" />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={() => go(1)}
            aria-label={t(content.a11y.next)}
          >
            <ChevronRight width="24" height="24" />
          </button>
        </>
      )}
    </div>,
    document.body,
  )
}
