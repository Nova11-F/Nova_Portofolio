import Card from '../ui/Card'
import { useLanguage } from '../../context/LanguageContext'

export default function Project() {
const { t } = useLanguage()

  return (
    <section 
    id="projects"
    className="relative mx-auto max-w-5xl px-6 md:max-w-full bg-bg py-10 md:py-20">
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
      <Card className="bg-primary text-text">sashd</Card>
      <Card className="bg-secondary text-text-muted">sashd</Card>
      <Card className="bg-tertiary">sashd</Card>
      <Card className="bg-surface border-4 border-border text-text">sashd</Card>
      <h1 className="text-text font-bold font-Grotesk text-4xl">Saya adalah mahasiswa tingkat tiga di Universitas Indonesia yang menolak kompromi antara kecepatan performa komputasi dan keindahan antarmuka. Sepanjang masa studi, saya mendedikasikan waktu untuk mendalami arsitektur perangkat lunak skalabel seraya mengeksplorasi estetika neobrutalisme dan minimalisme editorial.</h1>
      <h1 className="text-muted bg-surface font-mono text-2xl">Saya adalah mahasiswa tingkat tiga di Universitas Indonesia yang menolak kompromi antara kecepatan performa komputasi dan keindahan antarmuka. Sepanjang masa studi, saya mendedikasikan waktu untuk mendalami arsitektur perangkat lunak skalabel seraya mengeksplorasi estetika neobrutalisme dan minimalisme editorial.</h1>
    </section>
  );
}
