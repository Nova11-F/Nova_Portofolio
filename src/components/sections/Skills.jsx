import Card from '../ui/Card'
import { useLanguage } from '../../context/LanguageContext'
import SectionHeader from '../ui/SectionHeader';

export default function Skill() {
const { t } = useLanguage()

  return (
    <section 
    id="skills"
    className="flex flex-col mx-auto max-w-5xl px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20">
      <SectionHeader
      number="03"
      section="skill"  
      label="skill"/>  
    </section>
  );
}
