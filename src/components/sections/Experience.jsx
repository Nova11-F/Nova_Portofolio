import { useState } from "react";
import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import experience from "../../data/experience";
import Reveal from "../Reveal";

export default function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Work");

  const activeExperience = experience.find((item) => item.id === activeTab);

  return (
    <section
      id="experience"
      className="flex flex-col mx-auto max-w-5xl gap-4 px-4 lg:p-10 md:max-w-full bg-bg py-6 scroll-mt-[70px] lg:scroll-mt-[80px]"
    >
      <Reveal variant="slide-right">
        <SectionHeader number="04" section="experience" label="experience" />
      </Reveal>
      <div className="flex flex-wrap items-center justify-start gap-2">
        {experience.map((section, i) => (
          
          <Reveal variant="slide-right" delay={i * 0.15} duration={0.5}>
          <Button
            size="none"
            key={section.id}
            variant={activeTab === section.id ? "tertiary" : "surface"}
            onClick={() => setActiveTab(section.id)}
            className={`flex items-center justify-center gap-2 px-2 py-1.5 lg:px-4 lg:py-2 ${
              activeTab === section.id
                ? "shadow-brutal-none translate-[2px]"
                : "shadow-brutal-sm xl:shadow-brutal-md"
            }`}
          >
            <p className="text-xs uppercase lg:text-sm">{t(section.label)}</p>
            <span className="text-[10px] text-text bg-bg-section border-3 border-border px-2 py-1 lg:text-xs lg:px-2.5">
              {section.detail.length}
            </span>
          </Button>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {activeExperience.detail.map((item, index) => (

          <Reveal variant="slide-right" delay={index * 0.15} duration={0.5}>
          <Card
            key={`${activeTab}-${index}`}
            className="flex flex-col gap-2 p-4 lg:flex-row lg:items-center lg:justify-start lg:gap-6"
          >
            <div className="grid grid-cols-2 gap-1 lg:flex lg:shrink-0 lg:flex-col">
              <p className="text-[10px] font-semibold text-secondary font-Mono uppercase md:text-sm lg:whitespace-nowrap lg:text-base">
                {t(item.type)}
              </p>

              <h4 className="text-right text-[10px] font-bold text-text font-Mono uppercase md:text-xs lg:text-left whitespace-nowrap lg:text-sm">
                {t(item.period)}
              </h4>

              <p className="col-span-2 text-[10px] font-semibold text-muted font-Grotesk md:text-xs lg:text-sm">
                {item.location}
              </p>
            </div>

            <div className="flex min-w-0 flex-col justify-center gap-2">
              <h3 className="text-lg font-bold text-text font-Mono lg:text-xl">
                {t(item.name)}
              </h3>

              <p className="text-[10px] font-medium text-muted font-Grotesk md:text-xs">
                {t(item.desc)}
              </p>
            </div>
          </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
