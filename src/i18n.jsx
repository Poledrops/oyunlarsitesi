import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { content } from './data/content.js'

const STORAGE_KEY = 'poledrops-lang'
const LangContext = createContext(null)

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'tr' || saved === 'en') return saved
  } catch {
    /* storage may be unavailable (private mode) */
  }
  return (navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectLanguage)

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  // Picks the active language from a { tr, en } object; plain values pass through.
  const t = useCallback(
    (value) => (value && typeof value === 'object' && !Array.isArray(value) ? (value[lang] ?? value.en) : value),
    [lang],
  )

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = content.meta.title[lang]
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description[lang])
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
