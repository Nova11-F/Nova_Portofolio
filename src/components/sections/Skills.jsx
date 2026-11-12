import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import techStack from "../../data/techStack";

export default function Skill() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="flex flex-col mx-auto max-w-5xl px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20 scroll-mt-[100px] xl:scroll-mt-[70px]"
    >
      <SectionHeader number="03" section="skill" label="skill" />
      <div className="flex flex-col justify-center items-center gap-2 py-6 xl:gap-4 xl:py-8">
        <h3 className="text-xl font-bold font-Grotesk text-text text-center lg:text-2xl">
          {t("skill.title")}
        </h3>
        <p className="text-sm font-semibold font-Grotesk text-muted text-center lg:text-lg">
          {t("skill.text")}
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
        {techStack.map((tech) => {
          const Icon = tech.icon;

          return (
            <Card
              key={tech.name}
              className="flex flex-col justify-center items-center px-8 py-8 gap-2 xl:gap-6 xl:px-10 xl:py-12 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none transition-all duration-150"
            >
              <Icon
                className="size-7 md:size-15 mb-2"
                style={{ color: tech.color }}
              />
              <p className="text-md font-bold font-Mono text-text text-center xl:text-xl">
                {tech.name}
              </p>
              <p className="text-sm font-medium font-Grotesk text-muted text-center uppercase xl:text-lg">
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
