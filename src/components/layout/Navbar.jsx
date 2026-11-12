import { useLanguage } from '../../context/LanguageContext'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { CodeXml, Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { useState, useEffect } from 'react'

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'certificates', label: 'certificates' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const { t } = useLanguage()

  const [menuOpen, setMenuOpen] = useState(false);

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
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 xl:py-6 xl:mx-10 md:max-w-full">
        <div className="flex items-center justify-center gap-4 xl:gap-6">
          <Card
            padding="none"
            className="flex items-center justify-center p-2 md:p-2.5"
          >
            <CodeXml
              strokeWidth={3}
              className="size-5 xl:size-8 text-secondary"
            />
          </Card>

          <span className="font-bold font-mono text-xl text-text uppercase lg:text-2xl">
            Portofolio.Nova
          </span>
        </div>

        <Card
          padding="none"
          shadow="none"
          className="hidden text-sm font-mono p-1 font-bold text-text uppercase xl:flex xl:items-center xl:justify-center xl:text-lg"
        >
          <div className="relative grid grid-cols-6">

            <div
              className="
                absolute left-1 top-1 bottom-1
                w-[calc((100%-8px)/6)]
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

        <div className="flex items-center gap-2 xl:gap-4">
          <LanguageToggle />
          <ThemeToggle />

          <Button
            size="none"
            className="text-text uppercase px-2 py-2 xl:px-4 xl:py-2.5"
            onClick={() => window.open('/cv.pdf', '_blank')}
          >
            Resume CV
          </Button>
        </div>

      </nav>
    </header>
  )
}
