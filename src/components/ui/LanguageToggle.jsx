import Card from './Card'
import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle() {
  const { toggleLang } = useLanguage()

  return (
    <Card 
    padding="xs"
    className="flex items-center bg-surface">
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
    </Card>
  )
}