import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import techStack from "../../data/techStack";

export default function Skill() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="flex flex-col mx-auto max-w-5xl px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20"
    >
      <SectionHeader number="03" section="skill" label="skill" />
      <div className="flex flex-col justify-center items-center gap-2 py-6 md:gap-4 md:py-8">
        <h3 className="text-xl font-bold font-Grotesk text-text text-center md:text-2xl">
          {t("skill.title")}
        </h3>
        <p className="text-sm font-semibold font-Grotesk text-muted text-center md:text-lg">
          {t("skill.text")}
        </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {techStack.map((tech) => {
          const Icon = tech.icon;

          return (
            <Card
            padding="lg"
            key={tech.name}
            className="flex flex-col justify-center items-center gap-2 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none transition-all duration-150">
              <Icon
                className="size-7 md:size-12 mb-2"
                style={{ color: tech.color }}
              />
              <p className="text-md font-bold font-Mono text-text text-center md:text-xl">
                {tech.name}
                </p>
              <p className="text-sm font-medium font-Grotesk text-muted text-center uppercase md:text-lg">
                {tech.desc}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
