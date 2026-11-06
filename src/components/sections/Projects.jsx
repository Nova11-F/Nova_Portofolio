import Card from '../ui/Card'
import { useLanguage } from '../../context/LanguageContext'
import SectionHeader from '../ui/SectionHeader';

export default function Project() {
const { t } = useLanguage()

  return (
    <section 
    id="projects"
    className="flex flex-col mx-auto max-w-5xl px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20">
     <SectionHeader
     number="02"
     section="project" 
     label="project"/> 
    </section>
  );
}
