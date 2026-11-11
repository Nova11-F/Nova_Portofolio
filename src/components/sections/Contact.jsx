import Card from '../ui/Card'
import SectionHeader from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext'
import {  Handshake , Lightbulb } from "lucide-react";

export default function Contact() {
const { t } = useLanguage()

  return (
    <section 
    id="contact"
    className="flex flex-col mx-auto max-w-5xl gap-4 md:gap-8 px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20">
      <SectionHeader
      number="05"
      section="contact"
      label="contact"/>
      <Card className="flex flex-col p-6 md:p-10">
        <div className="flex items-center justify-between border-b-4 border-border pb-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <span className="bg-tertiary rounded-full p-1.5 md:p-2"></span>
          <p className="text-2xl font-bold text-text font-mono">Nova-11F</p>
          </div>
          <Card
          variant="tertiary"
          shadow="soft"
          className="text-lg font-bold text-text font-Mono uppercase px-4 py-1.5">Tersedia 2027 / 2028</Card>
        </div>
        <div className="flex items-center justify-between pt-4 max-w-6xl">
          <div className="relative flex flex-col gap-2 md:gap-4">
            <Card
            variant="secondary"
            shadow="soft"
            className="flex items-center justify-center gap-4 max-w-xs px-6 py-2">
              <Handshake className="size-5 md:size-6"/>
              <p className="text-md font-semibold text-white font-Grotesk tracking-wide uppercase">Open to Collaboration</p>
            </Card>
            <h3 className="text-4xl font-bold text-text font-Mono tracking-wider uppercase">Let's Build Something <span className="bg-secondary-rev border-3 border-border shadow-brutal-sm px-2">Great.</span></h3>
            <p className="text-md font-semibold text-muted font-Grotesk">I'm always open to new ideas, exciting projects, and meaningful collaborations. Feel free to reach out, and let's create something impactful together.</p>
            <Card
            variant="tertiary"
            shadow="soft"
            className="flex items-center justify-center gap-4 max-w-sm px-6 py-2">
              <Lightbulb className="size-5 text-white md:size-6"/>
              <p className="text-md font-semibold text-white font-Grotesk tracking-wide uppercase">OPEN TO NEW IDEAS & PROJECTS</p>
            </Card>
          </div>
          <div></div>
        </div>
      </Card>
    </section>
  );
}
