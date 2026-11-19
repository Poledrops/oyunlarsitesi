// Studio-wide settings. Change them here, the whole site follows.

export const STUDIO = {
  name: 'Poledrops',
  // Text shown next to the logo (header + footer).
  // TEMPORARY brand name — edit it here whenever the brand changes.
  // Set it to '' to show the logo on its own.
  brandText: 'CypnosGames',
  year: 2026,
  // Contact address used by the "Contact" section (taken from the public Aurelia site).
  email: 'makpinar857@gmail.com',
  github: 'https://github.com/poledrops',
}

// Social profiles. Shown in the Contact section and the footer, in this order.
// `icon` must match a key of `socialIcons` in components/Icons.jsx.
export const SOCIALS = [
  { id: 'x', label: 'X', icon: 'x', url: 'https://x.com/CypnosGames' },
  { id: 'instagram', label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/cypnosgames/' },
  { id: 'tiktok', label: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@cypnosgames' },
  { id: 'facebook', label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61596711300863' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/cypnos-games-5ab039451' },
]

// Resolves a file in /public regardless of the deploy sub-path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
