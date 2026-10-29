import { createContext, useContext, useEffect, useState } from 'react'
import en from '../locales/en'
import id from '../locales/id'

const translations = { en, id }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'id')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang 
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'id' ? 'en' : 'id'))

  const t = (key) => {
    const value = key.split('.').reduce((obj, k) => obj?.[k], translations[lang])
    return value ?? key 
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}