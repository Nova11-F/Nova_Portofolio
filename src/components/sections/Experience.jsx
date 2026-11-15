import { useState } from "react";
import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import experience from "../../data/experience";

export default function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Work");

  const activeExperience = experience.find((item) => item.id === activeTab);

  return (
    <section
      id="experience"
      className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-6 px-4 xl:px-10 md:max-w-full bg-bg py-6 xl:py-10 scroll-mt-[80px] xl:scroll-mt-[90px]"
    >
      <SectionHeader number="04" section="experience" label="experience" />

      <div className="flex flex-wrap items-center justify-start gap-2 xl:gap-4">
        {experience.map((section) => (
          <Button
            size="none"
            key={section.id}
            variant={activeTab === section.id ? "tertiary" : "surface"}
            onClick={() => setActiveTab(section.id)}
            className={`flex items-center justify-center gap-2 px-2 py-1.5 xl:px-4 xl:py-2 ${
              activeTab === section.id
                ? "shadow-brutal-none translate-[2px]"
                : "shadow-brutal-sm xl:shadow-brutal-md"
            }`}
          >
            <p className="text-xs uppercase xl:text-md">{t(section.label)}</p>
            <span className="text-xs text-text bg-bg-section border-3 border-border px-2 py-1 xl:text-sm lg:px-2.5">
              {section.detail.length}
            </span>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {activeExperience.detail.map((item, index) => (
          <Card
            key={`${activeTab}-${index}`}
            className="flex flex-col gap-2 p-4 xl:flex-row xl:items-center xl:justify-start xl:gap-6 xl:p-6"
          >
            <div className="grid grid-cols-2 gap-1 xl:flex xl:shrink-0 xl:flex-col">
              <p className="text-sm font-semibold text-secondary font-Mono uppercase xl:whitespace-nowrap xl:text-md">
                {t(item.type)}
              </p>

              <h4 className="text-right text-xs font-bold text-text font-Mono uppercase xl:text-left xl:whitespace-nowrap xl:text-md">
                {t(item.period)}
              </h4>

              <p className="col-span-2 text-xs font-semibold text-muted font-Grotesk xl:text-md">
                {item.location}
              </p>
            </div>

            <div className="flex min-w-0 flex-col justify-center gap-2">
              <h3 className="text-lg font-bold text-text font-Mono xl:text-xl">
                {t(item.name)}
              </h3>

              <p className="text-xs font-medium text-muted font-Grotesk xl:text-md">
                {t(item.desc)}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
