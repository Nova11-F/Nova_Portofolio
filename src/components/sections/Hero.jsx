import { useLanguage } from '../../context/LanguageContext'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { ArrowDown, Download } from 'lucide-react'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section 
    id="hero"
    className="relative flex flex-col mx-auto max-w-5xl gap-4 xl:gap-8 px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20">
      <div className='grid grid-cols-1 items-center gap-4 xl:gap-8 xl:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <Card className='w-fit flex items-center justify-between text-xl font-bold text-text font-Mono gap-8'>
            <div className='flex items-center gap-2'>
            <span className='bg-primary rounded-full border-3 p-1 xl:p-1.5'></span>
            <span className='bg-secondary rounded-full border-3 p-1 xl:p-1.5'></span>
            <span className='bg-secondary-rev rounded-full border-3 p-1 xl:p-1.5'></span>
            </div>
            {t("hero.badge")}
            <div className='flex items-center gap-2'>
                        <span className='bg-primary rounded-full border-3 p-1 xl:p-1.5'></span>
            <span className='bg-secondary rounded-full border-3 p-1 xl:p-1.5'></span>
            <span className='bg-secondary-rev rounded-full border-3 p-1 xl:p-1.5'></span>
            </div>
          </Card>
          <h3 className='text-5xl font-bold text-text font-Mono [word-spacing:4px] leading-relaxed max-w-5xl'>
            {t("hero.headline_start")}
            <span className="text-white bg-secondary border-br-3 border-border shadow-brutal-md px-2">
              {t("hero.headline_highlight")}
            </span>
            {t("hero.headline_mid")}
            <span className="text-white bg-secondary-rev border-br-3 border-border shadow-brutal-md px-2 md:px-4">
              {t("hero.headline_end")}
            </span>
          </h3>
          <p className='text-lg font-medium text-muted font-Grotesk [word-spacing:4px] leading-normal'>
            {t("hero.description")}
          </p>
          <div className='flex items-center justify-start gap-2 xl:gap-4'>
            <Button className='flex items-center justify-center gap-2 xl:gap-4'>
              <span className='font-bold uppercase'>
              {t("hero.projects")}
              </span>
              <ArrowDown className='size-5 xl:size-7' strokeWidth={3}/>
            </Button>
            <Button variant='surface' className='group flex items-center justify-center gap-2 xl:gap-4'>
              <span className='font-bold uppercase group-hover:text-white'>
              {t("hero.cv")}
              </span>
              <Download className='size-5 xl:size-7 group-hover:text-white' strokeWidth={3}/>
            </Button>
          </div>
        </div>
        <div>
          <Card></Card>
        </div>
      </div>
    </section>
  )
}