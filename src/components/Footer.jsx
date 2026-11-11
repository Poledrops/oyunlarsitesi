import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'
import { STUDIO } from '../data/site.js'
import Brand from './Brand.jsx'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Brand lazy label={`${STUDIO.brandText || STUDIO.name} — ${t(content.footer.backToTop)}`} />

        <nav className="footer__nav" aria-label={t(content.a11y.mainNav)}>
          {content.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {STUDIO.year} {STUDIO.name}. {t(content.footer.rights)}
        </p>
      </div>
    </footer>
  )
}
