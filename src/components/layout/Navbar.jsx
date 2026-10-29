import { useLanguage } from '../../context/LanguageContext'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur
                       dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-semibold">Nama Anda</span>

        <ul className="hidden gap-6 text-sm text-neutral-600 dark:text-neutral-400 md:flex">
          <li><a href="#about" className="hover:text-neutral-900 dark:hover:text-white">{t('nav.about')}</a></li>
          <li><a href="#skills" className="hover:text-neutral-900 dark:hover:text-white">{t('nav.skills')}</a></li>
          <li><a href="#projects" className="hover:text-neutral-900 dark:hover:text-white">{t('nav.projects')}</a></li>
          <li><a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">{t('nav.contact')}</a></li>
        </ul>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}