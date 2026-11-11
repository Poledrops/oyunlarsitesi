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

// Resolves a file in /public regardless of the deploy sub-path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
