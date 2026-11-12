import { useLanguage } from '../../context/LanguageContext'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section 
    id="hero"
    className="relative flex flex-col mx-auto max-w-5xl gap-4 xl:gap-8 px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20">
      <div className='grid grid-cols-1 items-center gap-4 xl:gap-8 xl:grid-cols-2'>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
      </div>
    </section>
  )
}