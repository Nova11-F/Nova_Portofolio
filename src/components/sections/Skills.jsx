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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {techStack.map((tech) => {
          const Icon = tech.icon;

          return (
            <Card
              key={tech.name}
              className="flex flex-col justify-center items-center p-4 gap-2 md:gap-6 md:px-10 md:py-12 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none transition-all duration-150"
            >
              <Icon
                className="size-7 md:size-15 mb-2"
                style={{ color: tech.color }}
              />
              <p className="text-md font-bold font-Mono text-text text-center md:text-xl">
                {tech.name}
              </p>
              <p className="text-sm font-medium font-Grotesk text-muted text-center uppercase md:text-lg">
                {tech.desc}
              </p>
              <div className="relative rounded-4xl w-full h-9 border-3 border-border shadow-brutal-sm overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: tech.progres,
                  backgroundColor: tech.color,
                }}
              >
                <p className="absolute inset-0 flex items-center justify-center text-md font-bold font-mono text-white">
                  {tech.progres}
                </p>
              </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
