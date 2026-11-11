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

export const icons ={ book: Book, sword: Sword, layers: Layers }
