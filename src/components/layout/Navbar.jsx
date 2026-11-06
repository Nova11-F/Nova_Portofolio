import { useLanguage } from '../../context/LanguageContext'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { CodeXml } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { useState, useEffect } from 'react'

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const { t } = useLanguage()

  const [activeSection, setActiveSection] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    )

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id)

      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`
        sticky top-0 left-0 w-full z-50
        transition-all duration-150
        ${scrolled ? 'bg-surface shadow-brutal-md' : 'bg-bg'}
      `}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:py-8 md:mx-10 md:max-w-full">
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <Card
            padding="none"
            className="flex items-center justify-center p-2 md:p-2.5"
          >
            <CodeXml
              strokeWidth={3}
              className="size-5 md:size-8 text-secondary"
            />
          </Card>

          <span className="font-bold font-mono text-xl text-text uppercase md:text-2xl">
            Portofolio.Nova
          </span>
        </div>

        <Card
          padding="none"
          shadow="none"
          className="hidden text-sm font-mono p-1 font-bold text-text uppercase md:flex md:items-center md:justify-center md:text-xl"
        >
          <div className="relative grid grid-cols-5">

            <div
              className="
                absolute left-1 top-1 bottom-1
                w-[calc((100%-8px)/5)]
                bg-secondary border-2 border-border
                shadow-brutal-sm
                transition-transform duration-300 ease-in-out
                pointer-events-none
              "
              style={{
                transform: `translateX(${
                  navItems.findIndex(
                    (item) => item.id === activeSection
                  ) * 100
                }%)`,
              }}
            />

            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    relative z-10 px-8 py-4 text-center
                    transition-colors duration-300
                    ${
                      isActive
                        ? 'text-surface'
                        : 'text-text'
                    }
                  `}
                >
                  {t(`nav.${item.label}`)}
                </a>
              )
            })}

          </div>
        </Card>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageToggle />
          <ThemeToggle />

          <Button
            size="none"
            className="text-text uppercase px-2 py-1.5 md:px-4 md:py-2"
            onClick={() => window.open('/cv.pdf', '_blank')}
          >
            Resume CV
          </Button>
        </div>

      </nav>
    </header>
  )
}
