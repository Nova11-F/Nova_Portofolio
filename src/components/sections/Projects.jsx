import Card from '../ui/Card'
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext'
import SectionHeader from '../ui/SectionHeader';
import { FolderOpen, ArrowRight } from 'lucide-react';

export default function Project() {
const { t } = useLanguage()



  return (
    <section 
    id="projects"
    className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-8 px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20 scroll-mt-[100px] xl:scroll-mt-[70px]">
     <SectionHeader
     number="02"
     section="project" 
     label="project"/> 
     <div className='flex flex-col gap-4'>
      <div>
        <Button></Button>
      </div>
      <div>
        <Card></Card>
      </div>
      <Card className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-4'>
          <Card
          shadow='soft'>
            <FolderOpen className='size-5 text-text xl:size-8'/>
          </Card>
          <div className='flex flex-col gap-2'>
          <h4 className='text-xl font-bold text-text font-Mono tracking-wide'>Ingin melihat 12+ eksperimen kampus lainnya?</h4>
          <p className='text-md font-medium text-muted font-Grotesk'>Mulai dari compiler mini, visualizer algoritma pathfinding, hingga eksplorasi desain mobile.</p>
          </div>
        </div>
        <Button className='flex items-center justify-center gap-2'>
          KUNJUNGI PROFIL GITHUB
          <ArrowRight className='size-5 xl:size-8'/>
        </Button>
      </Card>
     </div>
    </section>
  );
}
