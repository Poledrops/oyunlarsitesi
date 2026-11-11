import { asset } from './site.js'

const img = (file) => asset(`games/${file}`)

// Everything shown for a game lives here. Texts are { tr, en } pairs.
// To change a release state, edit `status` (key of content.statusLabels).

export const games = [
  {
    id: 'aurelia',
    index: '01',
    title: 'Aurelia: Ashes of Memory',
    short: 'Aurelia',
    url: 'https://poledrops.github.io/AureliaSite/',
    accent: '#d9a441',
    accentRgb: '217, 164, 65',
    genre: { tr: '2D Roguelite Aksiyon Platform', en: '2D Roguelite Action Platformer' },
    tagline: {
      tr: 'Küllerin altında kalan bir hafızanın peşinde 100 bölümlük yolculuk.',
      en: 'A 100-level journey in pursuit of a memory buried under ash.',
    },
    description: {
      tr: 'Kahraman Alden, Kül Kral Morvane’in elinden Elara’yı kurtarmak için küllerle kaplı bir dünyayı aşıyor. Prosedürel üretilen bölümler, her perdenin sonunda epik bir boss dövüşü ve 100. bölümden sonra açılan sonsuz mod seni bekliyor.',
      en: 'Alden crosses an ash-covered world to rescue Elara from the Ash King, Morvane. Procedurally generated levels, an epic boss fight at the end of every act and an endless mode that unlocks after level 100 await you.',
    },
    counts: { levels: 100, bosses: 10 },
    stats: [
      { value: 100, label: { tr: 'Bölüm', en: 'Levels' } },
      { value: 10, label: { tr: 'Perde', en: 'Acts' } },
      { value: 10, label: { tr: 'Boss', en: 'Bosses' } },
    ],
    features: [
      {
        tr: 'Ateş Topu, Buz Oku ve Yıldırım gibi elemental büyüler',
        en: 'Elemental spells such as Fireball, Ice Arrow and Lightning',
      },
      {
        tr: 'Silahlarını geliştiren Demirhane ve beş kademeli kılıç hattı',
        en: 'A Forge to upgrade your gear, with a five-tier sword line',
      },
      {
        tr: 'Demir ve Kadim anahtarlarla açılan sandıklar, gizli odalar ve geçitler',
        en: 'Chests opened with Iron and Ancient keys, plus secret rooms and passages',
      },
      {
        tr: 'Dokunmatik kontroller ve isteğe bağlı titreşim geri bildirimi',
        en: 'Touch controls with optional haptic feedback',
      },
    ],
    status: 'soon',
    platform: { tr: 'Android · Google Play', en: 'Android · Google Play' },
    gallery: [
      {
        src: img('aurelia/feature.webp'),
        position: '30% 50%',
        alt: { tr: 'Aurelia: Ashes of Memory tanıtım görseli', en: 'Aurelia: Ashes of Memory key art' },
      },
      {
        src: img('aurelia/shot-boss.webp'),
        alt: { tr: 'Aurelia’dan bir boss dövüşü ekran görüntüsü', en: 'Aurelia boss battle screenshot' },
      },
      {
        src: img('aurelia/shot-magic.webp'),
        alt: { tr: 'Aurelia’da büyü kullanımı ekran görüntüsü', en: 'Aurelia spellcasting screenshot' },
      },
      {
        src: img('aurelia/shot-biomes.webp'),
        alt: { tr: 'Aurelia biyomlarından bir ekran görüntüsü', en: 'Aurelia biome screenshot' },
      },
    ],
  },
  {
    id: 'sealed-kingdom',
    index: '02',
    title: 'The Sealed Kingdom',
    short: 'Sealed Kingdom',
    subtitle: 'Mühürlü Krallık',
    url: 'https://poledrops.github.io/SealedKingdomSite/',
    accent: '#e5533d',
    accentRgb: '229, 83, 61',
    genre: { tr: 'Hikâye Odaklı Zindan RPG', en: 'Story-Driven Dungeon RPG' },
    tagline: {
      tr: 'Mühürlü kapıların ardındaki krallığın sırrına iniş.',
      en: 'A descent into the secret of a kingdom behind sealed doors.',
    },
    description: {
      tr: 'Low-poly, izometrik ve dokunmatik kontrollü bir dünyada, kristal parçalarını toplayan bir şövalye mühürlü kapıları açıyor. Zindanlar her seferinde yeniden üretiliyor; hiçbir iniş bir öncekine benzemiyor.',
      en: 'In a low-poly, isometric, touch-controlled world, a knight collects crystal shards to open sealed gates. The dungeons are regenerated on every run, so no descent is like the last.',
    },
    counts: { levels: 50, bosses: 10 },
    stats: [
      { value: 50, label: { tr: 'Bölüm', en: 'Levels' } },
      { value: 5, label: { tr: 'Bölge', en: 'Regions' } },
      { value: 10, label: { tr: 'Boss', en: 'Bosses' } },
    ],
    features: [
      {
        tr: 'Kılıç ve kalkan ritminde savaş: kombolar, siper, kaçış ve yavaş çekimli “mükemmel kaçış”',
        en: 'Sword-and-shield combat: combos, blocking, dodging and a slow-motion “perfect dodge”',
      },
      {
        tr: 'Seed’den üretilen zindanlar: dallanan haritalar, mühürlü kapılar, sandıklar ve kontrol noktaları',
        en: 'Seed-generated dungeons with branching maps, sealed doors, chests and checkpoints',
      },
      {
        tr: 'Dövmehane: 6 materyal, 5 kademeli silah ve zırh, kalkanlar',
        en: 'A blacksmith with 6 materials, 5-tier weapons and armor, and shields',
      },
      {
        tr: 'Çizgi roman girişi, diyaloglar ve yazıtlarla anlatılan sabit sonlu hikâye',
        en: 'A fixed-ending story told through a comic intro, dialogue and inscriptions',
      },
    ],
    status: 'soon',
    platform: { tr: 'Android · Çevrimdışı oynanış', en: 'Android · Offline play' },
    gallery: [
      {
        src: img('sealed/combat.webp'),
        alt: { tr: 'The Sealed Kingdom’da savaş sahnesi', en: 'Combat in The Sealed Kingdom' },
      },
      {
        src: img('sealed/hero.webp'),
        alt: { tr: 'The Sealed Kingdom’ın şövalyesi ana menüde', en: 'The knight of The Sealed Kingdom on the main menu' },
      },
      {
        src: img('sealed/forge.webp'),
        alt: { tr: 'The Sealed Kingdom’da dövmehane', en: 'The forge in The Sealed Kingdom' },
      },
    ],
  },
  {
    id: 'last-collapse',
    index: '03',
    title: 'Poledrops: The Last Collapse',
    short: 'The Last Collapse',
    url: 'https://poledrops.github.io/Poledrops_The_Last_CollapseSite/',
    accent: '#ff2a80',
    accentRgb: '255, 42, 128',
    genre: { tr: 'Siberpunk Platform & Hack-and-Slash', en: 'Cyberpunk Platformer & Hack-and-Slash' },
    tagline: {
      tr: 'Sekiz yıl sonra uyanan bir mühendisin intikam hikâyesi.',
      en: 'The revenge story of an engineer who wakes up eight years later.',
    },
    description: {
      tr: 'Yaraları iyileşmemiş, hafızası silinmiş bir adam A-01 odasında gözünü açar. Hikâye anlatıcı kutularla değil, yol boyunca bulduğun kayıtlarla anlatılır: her bölüm bir parçayı, her boss bir cevabı saklar.',
      en: 'A man with unhealed wounds and an erased memory opens his eyes in room A-01. The story is told not by narrator boxes but by the records you find along the way: every chapter hides a piece, every boss an answer.',
    },
    counts: { levels: 10, bosses: 10 },
    stats: [
      { value: 10, label: { tr: 'Bölüm', en: 'Chapters' } },
      { value: 10, label: { tr: 'Boss', en: 'Bosses' } },
      { value: 41, label: { tr: 'Sinematik kayıt', en: 'Cinematic records' } },
    ],
    features: [
      {
        tr: 'Kılıç kombinasyonları, hızlı yer değiştirme ve platform tırmanışları',
        en: 'Sword combos, fast repositioning and platform climbing',
      },
      {
        tr: 'Vinç platformları, lazer koridorları, yerçekimi bölgeleri ve çöken binalar',
        en: 'Crane platforms, laser corridors, gravity zones and collapsing towers',
      },
      {
        tr: 'Her bölümün sonunda farklı mekaniğe sahip, çok fazlı boss dövüşleri',
        en: 'Multi-phase boss fights with their own mechanics at the end of every chapter',
      },
      {
        tr: 'Bulduğun kayıtlarla ilerleyen, ara sahnelerle desteklenen hikâye',
        en: 'A story driven by recovered records and backed by cinematic scenes',
      },
    ],
    status: 'soon',
    platform: null,
    gallery: [
      {
        src: img('collapse/hero.webp'),
        alt: { tr: 'Yıkık bir siberpunk şehrinde kılıç tutan kahraman', en: 'The hero with a sword above a ruined cyberpunk city' },
      },
      {
        src: img('collapse/city.webp'),
        alt: { tr: 'The Last Collapse’tan şehir harabeleri sahnesi', en: 'City ruins scene from The Last Collapse' },
      },
      {
        src: img('collapse/ward.webp'),
        alt: { tr: 'The Last Collapse’tan hastane koğuşu sahnesi', en: 'Hospital ward scene from The Last Collapse' },
      },
    ],
  },
]

export const totals = {
  games: games.length,
  bosses: games.reduce((sum, g) => sum + g.counts.bosses, 0),
  levels: games.reduce((sum, g) => sum + g.counts.levels, 0),
}
