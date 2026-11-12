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
      className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-8 px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20 scroll-mt-[100px] xl:scroll-mt-[70px]"
    >
      <SectionHeader number="04" section="experience" label="experience" />

      <div className="flex flex-wrap items-center justify-start gap-2 md:gap-4">
        {experience.map((section) => (
          <Button
            size="none"
            key={section.id}
            variant={activeTab === section.id ? "tertiary" : "surface"}
            onClick={() => setActiveTab(section.id)}
            className={`flex items-center justify-center gap-2 px-4 py-1.5 xl:px-6 xl:py-3 ${
              activeTab === section.id
                ? "shadow-brutal-none translate-[2px]"
                : ""
            }`}
          >
            <p className="text-sm lg:text-lg">{t(section.label)}</p>
            <span className="text-sm text-text bg-bg-section border-3 border-border px-2 py-1 lg:text-md lg:px-3 lg:py-2">
              {section.detail.length}
            </span>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {activeExperience.detail.map((item, index) => (
          <Card
            key={`${activeTab}-${index}`}
            className="flex flex-col gap-4 p-6 xl:flex-row xl:items-center xl:justify-start xl:gap-8 lg:p-8"
          >
            <div className="grid grid-cols-2 gap-2 xl:flex xl:shrink-0 xl:flex-col xl:gap-2">
              <p className="text-md font-semibold text-secondary font-Mono uppercase xl:whitespace-nowrap xl:text-lg">
                {t(item.type)}
              </p>

              <h4 className="text-right text-md font-bold text-text font-Mono uppercase xl:text-left xl:whitespace-nowrap xl:text-2xl">
                {t(item.period)}
              </h4>

              <p className="col-span-2 text-md font-semibold text-muted font-Grotesk xl:text-lg">
                {item.location}
              </p>
            </div>

            <div className="flex min-w-0 flex-col justify-center gap-2">
              <h3 className="text-2xl font-bold text-text font-Mono xl:text-4xl">
                {t(item.name)}
              </h3>

              <p className="text-sm font-medium text-muted font-Grotesk xl:text-lg">
                {t(item.desc)}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
