import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext'

export default function Contact() {
const { t } = useLanguage()

  return (
    <section 
    id="contact"
    className="flex flex-col mx-auto max-w-5xl px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20">
      <SectionHeader
      number="05"
      section="contact"
      label="contact"/>
    </section>
  );
}
