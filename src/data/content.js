import { STUDIO } from './site.js'

// All UI copy of the site, Turkish + English.

// The browser-tab title follows STUDIO.brandText (src/data/site.js).
const brand = STUDIO.brandText || STUDIO.name

export const content = {
  meta: {
    title: { tr: `${brand} — Oyun Stüdyosu`, en: `${brand} — Game Studio` },
    description: {
      tr: 'Poledrops, hikâyeyi merkeze alan bağımsız bir oyun stüdyosu. Aurelia: Ashes of Memory, The Sealed Kingdom ve Poledrops: The Last Collapse.',
      en: 'Poledrops is an independent game studio that puts story at the heart of play. Aurelia: Ashes of Memory, The Sealed Kingdom and Poledrops: The Last Collapse.',
    },
  },

  a11y: {
    skip: { tr: 'İçeriğe geç', en: 'Skip to content' },
    mainNav: { tr: 'Ana menü', en: 'Main navigation' },
    openMenu: { tr: 'Menüyü aç', en: 'Open menu' },
    closeMenu: { tr: 'Menüyü kapat', en: 'Close menu' },
    language: { tr: 'Dil seçimi', en: 'Language' },
    image: { tr: 'Görsel', en: 'Image' },
    opensNewTab: { tr: '(yeni sekmede açılır)', en: '(opens in a new tab)' },
    gallery: { tr: 'Oyun görselleri', en: 'Game gallery' },
    prev: { tr: 'Önceki görsel', en: 'Previous image' },
    next: { tr: 'Sonraki görsel', en: 'Next image' },
    close: { tr: 'Kapat', en: 'Close' },
    enlarge: { tr: 'Büyüt', en: 'Enlarge' },
  },

  nav: [
    { id: 'games', label: { tr: 'Oyunlar', en: 'Games' } },
    { id: 'studio', label: { tr: 'Stüdyo', en: 'Studio' } },
    { id: 'contact', label: { tr: 'İletişim', en: 'Contact' } },
  ],

  hero: {
    eyebrow: { tr: 'Bağımsız oyun stüdyosu', en: 'Independent game studio' },
    title: {
      tr: ['Gölgelerde yazılan ', 'oyunlar', '.'],
      en: ['Games written in ', 'shadow', '.'],
    },
    lead: {
      tr: 'CypnosGames, hikâyeyi oynanışın merkezine koyan aksiyon ve RPG oyunları geliştirir. Küllerle kaplı krallıklardan mühürlü zindanlara, siberpunk harabelere uzanan üç dünya, üç hikâye.',
      en: 'CypnosGames builds action and RPG games that put story at the center of play. Three worlds, three stories — from ash-covered kingdoms and sealed dungeons to cyberpunk ruins.',
    },
    primary: { tr: 'Oyunları keşfet', en: 'Explore our games' },
    secondary: { tr: 'İletişime geç', en: 'Get in touch' },
    scroll: { tr: 'Kaydır', en: 'Scroll' },
    stats: {
      games: { tr: 'Oyun', en: 'Games' },
      bosses: { tr: 'Boss', en: 'Bosses' },
      levels: { tr: 'Bölüm', en: 'Levels' },
    },
  },

  games: {
    eyebrow: { tr: 'Oyunlarımız', en: 'Our games' },
    title: { tr: 'Üç dünya. Üç hikâye.', en: 'Three worlds. Three stories.' },
    lead: {
      tr: 'Her oyunun kendi sitesi var. Tanıtımları, ekran görüntülerini ve daha fazlasını orada keşfedebilirsin.',
      en: 'Every game has its own site. Find trailers, screenshots and much more over there.',
    },
    jumpTo: { tr: 'Oyuna git', en: 'Jump to game' },
    visit: { tr: 'Oyunun sitesine git', en: 'Visit game site' },
    featuresTitle: { tr: 'Öne çıkanlar', en: 'Highlights' },
  },

  statusLabels: {
    soon: { tr: 'Yakında', en: 'Coming soon' },
  },

  studio: {
    eyebrow: { tr: 'Stüdyo', en: 'Studio' },
    title: {
      tr: 'Her oyunun bir sırrı, her sırrın bir bedeli var.',
      en: 'Every game hides a secret. Every secret has a price.',
    },
    paragraphs: [
      {
        tr: 'Poledrops, hikâyeyi oynanışın merkezine koyan bağımsız bir oyun stüdyosudur. Küllerle kaplı krallıklardan mühürlü zindanlara, siberpunk harabelerden hafızasını yitirmiş kahramanlara uzanan dünyalar kuruyoruz.',
        en: 'Poledrops is an independent game studio that puts story at the heart of play. We build worlds that stretch from ash-covered kingdoms to sealed dungeons, from cyberpunk ruins to heroes who have lost their memories.',
      },
      {
        tr: 'Pixel art’tan low-poly izometriğe, her oyunumuzun kendi görsel dili ve ritmi var. Ortak noktaları ise zorlayıcı dövüşler, bulmaya değer sırlar ve oyuncuya duyulan saygı.',
        en: 'From pixel art to low-poly isometric, each of our games has its own visual language and rhythm. What they share: demanding combat, secrets worth finding and respect for the player.',
      },
    ],
    values: [
      {
        icon: 'book',
        title: { tr: 'Hikâye odaklı', en: 'Story-driven' },
        text: {
          tr: 'Hikâye uzun metinlerle değil; ara sahneler, çizgi roman sayfaları, yazıtlar ve bulunan kayıtlarla keşfedilir.',
          en: 'Stories are discovered, not lectured — through cutscenes, comic pages, inscriptions and recovered records.',
        },
      },
      {
        icon: 'sword',
        title: { tr: 'Ustalık isteyen dövüş', en: 'Combat that rewards mastery' },
        text: {
          tr: 'Kombolar, kaçışlar ve çok fazlı boss dövüşleri. Üç oyunda toplam {bosses} boss seni bekliyor.',
          en: 'Combos, dodges and multi-phase boss fights. {bosses} bosses across three games are waiting for you.',
        },
      },
      {
        icon: 'layers',
        title: { tr: 'Her oyuna özel dünya', en: 'A distinct world each time' },
        text: {
          tr: 'Pixel art, low-poly izometrik ve siberpunk atmosfer: her oyun kendi görsel diline ve kimliğine sahip.',
          en: 'Pixel art, low-poly isometric and cyberpunk atmosphere: every game has its own visual language and identity.',
        },
      },
    ],
    raven: {
      title: { tr: 'Neden bir kuzgun?', en: 'Why a raven?' },
      text: {
        tr: 'Kuzgun; hafızayı, gözlemi ve gölgeyi temsil eder. Oyunlarımızda kahramanlar unutulmuş bir geçmişin peşinde; amblemimiz de bu sessiz, keskin ve unutulmaz ruhu taşıyor.',
        en: 'The raven stands for memory, observation and shadow. In our games, heroes chase a forgotten past, and our emblem carries the same quiet, sharp, unforgettable spirit.',
      },
    },
  },

  contact: {
    eyebrow: { tr: 'İletişim', en: 'Contact' },
    title: { tr: 'Bizimle konuşalım.', en: 'Let’s talk.' },
    text: {
      tr: 'İş birliği, basın veya oyunlarımız hakkındaki sorularınız için bize yazın. Mesajınızı okumaktan memnuniyet duyarız.',
      en: 'Write to us about collaborations, press or any question about our games. We’d love to hear from you.',
    },
    email: { tr: 'E-posta gönder', en: 'Send an email' },
    github: { tr: 'GitHub’da takip et', en: 'Follow on GitHub' },
    sitesTitle: { tr: 'Oyun siteleri', en: 'Game sites' },
    // Credits shown under the contact details. Add or remove members freely.
    team: {
      title: { tr: 'Ekip', en: 'Team' },
      members: [
        { role: { tr: 'Yapımcı', en: 'Producer' }, name: 'Murat Akpınar' },
        { role: { tr: 'Tester', en: 'Tester' }, name: 'Muhammet Sefa Tayfur' },
      ],
    },
  },

  footer: {
    rights: { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' },
    backToTop: { tr: 'Yukarı çık', en: 'Back to top' },
  },
}
