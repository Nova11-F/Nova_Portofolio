import Card from '../ui/Card'
import { useLanguage } from '../../context/LanguageContext'
import SectionHeader from '../ui/SectionHeader';

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
    </section>
  );
}
