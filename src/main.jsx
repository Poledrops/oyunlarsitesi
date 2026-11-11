import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LangProvider } from './i18n.jsx'

import './styles/base.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/games.css'
import './styles/studio.css'
import './styles/contact.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)
