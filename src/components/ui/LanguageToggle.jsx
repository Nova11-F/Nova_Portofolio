import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label="Change language"
      className="rounded-full px-3 py-1.5 text-sm font-medium text-neutral-700 transition-colors
                 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
    >
      {lang === 'id' ? 'EN' : 'ID'}
    </button>
  )
}