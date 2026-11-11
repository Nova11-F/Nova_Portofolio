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
      className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-8 px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20"
    >
      <SectionHeader number="04" section="experience" label="experience" />

      <div className="flex flex-wrap items-center justify-start gap-2 md:gap-4">
        {experience.map((section) => (
          <Button
            size="xs"
            key={section.id}
            variant={activeTab === section.id ? "default" : "surface"}
            onClick={() => setActiveTab(section.id)}
            className={`flex items-center justify-center gap-2 ${
              activeTab === section.id ? "shadow-brutal-none translate-[2px]" : ""
            }`}
          >
            <p >{t(section.label)}</p>
            <span className="text-text bg-bg-section border-3 border-border px-3 py-1">
              {section.detail.length}
            </span>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {activeExperience.detail.map((item, index) => (
          <Card
            key={`${activeTab}-${index}`}
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-start md:gap-8 md:p-8"
          >
            <div className="flex shrink-0 flex-col gap-2 md:gap-4">
              <p className="whitespace-nowrap text-md font-semibold text-secondary font-Mono uppercase md:text-lg">
                {t(item.type)}
              </p>

              <h4 className="whitespace-nowrap text-md font-bold text-text font-Mono uppercase md:text-2xl">
                {t(item.period)}
              </h4>

              <p className="whitespace-nowrap text-md font-semibold text-muted font-Grotesk md:text-lg">
                {item.location}
              </p>
            </div>

            <div className="flex min-w-0 flex-col justify-center gap-2">
              <h3 className="text-2xl font-bold text-text font-Mono md:text-4xl">
                {t(item.name)}
              </h3>

              <p className="text-sm font-medium text-muted font-Grotesk md:text-lg">
                {t(item.desc)}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
