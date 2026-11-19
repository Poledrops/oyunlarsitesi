// Small inline stroke icons (24x24) so no icon library is needed.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
}

export const ArrowUpRight = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ArrowDown = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
)

export const Mail = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const Github = (props) => (
  <svg {...base} {...props}>
    <path d="M9 19c-5 1.500-5-2.500-7-3m14 6v-3.870a3.370 3.370 0 0 0-.940-2.610c3.140-.350 6.440-1.540 6.440-7A5.440 5.440 0 0 0 20 4.770 5.070 5.070 0 0 0 19.910 1S18.730.650 16 2.480a13.380 13.380 0 0 0-7 0C6.270.650 5.090 1 5.090 1A5.070 5.070 0 0 0 5 4.770a5.440 5.440 0 0 0-1.500 3.780c0 5.420 3.300 6.610 6.440 7A3.370 3.370 0 0 0 9 18.130V22" />
  </svg>
)

export const Book = (props) => (
  <svg {...base} {...props}>
    <path d="M4 19.500A2.500 2.500 0 0 1 6.500 17H20" />
    <path d="M6.500 2H20v20H6.500A2.500 2.500 0 0 1 4 19.500v-15A2.500 2.500 0 0 1 6.500 2Z" />
  </svg>
)

export const Sword = (props) => (
  <svg {...base} {...props}>
    <polyline points="14.500 17.500 3 6 3 3 6 3 17.500 14.500" />
    <line x1="13" x2="19" y1="19" y2="13" />
    <line x1="16" x2="20" y1="16" y2="20" />
    <line x1="19" x2="21" y1="21" y2="19" />
  </svg>
)

export const Layers = (props) => (
  <svg {...base} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

export const Close = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ChevronLeft = (props) => (
  <svg {...base} {...props}>
    <path d="m15 5-7 7 7 7" />
  </svg>
)

export const ChevronRight = (props) => (
  <svg {...base} {...props}>
    <path d="m9 5 7 7-7 7" />
  </svg>
)

export const Expand = (props) => (
  <svg {...base} {...props}>
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </svg>
)

// Brand glyphs are filled (not stroked) so they stay recognisable at small sizes.
const brand = { ...base, fill: 'currentColor', stroke: 'none' }

export const XIcon = (props) => (
  <svg {...brand} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export const Instagram = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const TikTok = (props) => (
  <svg {...brand} {...props}>
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.897 2.897 0 0 1 3.185-4.514V9.4a6.34 6.34 0 0 0-5.34 10.66 6.34 6.34 0 0 0 10.92-4.4V8.74a8.2 8.2 0 0 0 4.8 1.54V6.84a4.8 4.8 0 0 1-1.149-.154z" />
  </svg>
)

export const Facebook = (props) => (
  <svg {...brand} {...props}>
    <path d="M13.5 21.95v-8.2h2.76l.41-3.2H13.5V8.5c0-.93.26-1.56 1.59-1.56h1.7V4.08A22.6 22.6 0 0 0 14.31 4C11.87 4 10.2 5.49 10.2 8.22v2.33H7.43v3.2h2.77v8.2z" />
  </svg>
)

export const LinkedIn = (props) => (
  <svg {...brand} {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h3.96V21H3zM9.5 9.75h3.8v1.54h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07V21h-3.96v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21H9.5z" />
  </svg>
)

export const socialIcons = {
  x: XIcon,
  instagram: Instagram,
  tiktok: TikTok,
  facebook: Facebook,
  linkedin: LinkedIn,
}

export const icons ={ book: Book, sword: Sword, layers: Layers }
