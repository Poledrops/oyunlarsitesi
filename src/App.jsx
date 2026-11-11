import { useLang } from './i18n.jsx'
import { content } from './data/content.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Games from './components/Games.jsx'
import Studio from './components/Studio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  const { t } = useLang()

  return (
    <>
      <a className="skip" href="#main">
        {t(content.a11y.skip)}
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Games />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
