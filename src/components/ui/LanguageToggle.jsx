import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle() {
  const { toggleLang } = useLanguage()

  return (
    <div className="flex items-center border-3 border-border bg-surface p-0.5 shadow-brutal-md">
      <button
        onClick={toggleLang}
        aria-label="Change language"
        className="px-3 py-1 text-lg font-bold text-bg font-Mono bg-secondary border-2 border-border transition-colors"
    >
      ID
      </button>
      <button
        onClick={toggleLang}
        aria-label="Change language"
          className="px-4 py-1.5 text-md font-bold text-text transition-colors font-Mono"
    >
      EN
    </button>
    </div>
  )
}