import { useLanguage } from '../../context/LanguageContext'
import Card from '../ui/Card'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-5xl px-6 md:max-w-full bg-bg">
      <p className="text-accent dark:text-indigo-400">{t('hero.greeting')}</p>
      <h1 className="mt-2 text-5xl font-bold tracking-tight">Nama Anda</h1>
      <h2 className="mt-2 text-2xl text-neutral-600 dark:text-neutral-400">{t('hero.role')}</h2>
      <p className="mt-6 max-w-xl text-neutral-600 dark:text-neutral-400">{t('hero.description')}</p>
      <a
        href="/cv-nama-anda.pdf"
        download
        className="mt-8 inline-block rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white
                   transition-colors hover:bg-neutral-700
                   dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        {t('hero.downloadCv')}
      </a>
      <Card>sashd</Card>
    </section>
  )
}