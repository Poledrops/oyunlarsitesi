import { useLang } from '../i18n.jsx'
import { content } from '../data/content.js'

export default function LangSwitch() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="lang" role="group" aria-label={t(content.a11y.language)}>
      {['tr', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          className="lang__btn"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          lang={code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
