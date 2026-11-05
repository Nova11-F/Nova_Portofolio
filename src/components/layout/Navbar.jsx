import { useLanguage } from '../../context/LanguageContext'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { CodeXml } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { useState, useEffect } from "react";

export default function Navbar() {
  const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`sticky top-0 left-0 w-full z-50 
        transition-all duration-150
        ${
          scrolled
            ? "bg-surface shadow-brutal-md"
            : "bg-bg"
        }`}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:py-8 md:mx-10 md:max-w-full">
        <div className="flex items-center justify-center gap-4">
          <Card padding="none" className="flex items-center justify-center p-2 md:p-3">
        <CodeXml strokeWidth={3} className='size-5 md:size-8 text-secondary'/>
        </Card>
        <span className="font-bold font-Mono text-xl text-text uppercase md:text-2xl">Portofolio.Nova</span>
        </div>

        <Card 
        padding="none"
        shadow="none"
        className="hidden gap-6 text-sm font-Mono font-bold text-text uppercase md:flex md:items-center md:justify-center md:text-xl">
          <a href="#about" className="bg-secondary px-8 py-4">{t('nav.about')}</a>
          <a href="#skills" className="px-8 py-4">{t('nav.skills')}</a>
          <a href="#projects" className="px-8 py-4">{t('nav.projects')}</a>
          <a href="#experience" className="px-8 py-4">{t('nav.experience')}</a>
          <a href="#contact" className="px-8 py-4">{t('nav.contact')}</a>
        </Card>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageToggle />
          <ThemeToggle />
          <Button size="none" className="text-text uppercase px-2 py-1.5" onClick={() => window.open('/cv.pdf', '_blank')}>
            Resume CV
          </Button>
        </div>
      </nav>
    </header>
    </>
  )
}