import { useLanguage } from '../../context/LanguageContext'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { CodeXml } from 'lucide-react'
import Button from '../ui/Button'

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:mx-10 md:max-w-full">
        <div className="flex items-center justify-center gap-2 md:gap-4">
        <CodeXml className='size-4 md:size-6 text-primary'/>
        <span className="font-semibold">Nova</span>
        </div>

        <ul className="hidden gap-6 text-sm text-neutral-600 dark:text-neutral-400 md:flex">
          <li><a href="#about" className="hover:text-neutral-900">{t('nav.about')}</a></li>
          <li><a href="#skills" className="hover:text-neutral-900">{t('nav.skills')}</a></li>
          <li><a href="#projects" className="hover:text-neutral-900">{t('nav.projects')}</a></li>
          <li><a href="#contact" className="hover:text-neutral-900">{t('nav.contact')}</a></li>
        </ul>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Button>Hire me</Button>
        </div>
      </nav>
    </header>
    </>
  )
}