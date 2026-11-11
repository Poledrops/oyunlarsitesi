import { STUDIO, asset } from '../data/site.js'

// Logo mark + optional wordmark. The wordmark text lives in STUDIO.brandText (src/data/site.js).
export default function Brand({ label, size = 46, lazy = false, onClick }) {
  const text = STUDIO.brandText

  return (
    <a className="brand" href="#top" aria-label={label ?? (text || STUDIO.name)} onClick={onClick}>
      <img
        className="brand__mark"
        src={asset('logo-mark.webp')}
        alt=""
        width={size}
        height={size}
        loading={lazy ? 'lazy' : undefined}
      />
      {text && <span className="brand__name">{text}</span>}
    </a>
  )
}
