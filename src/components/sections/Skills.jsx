import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import techStack from "../../data/techStack";

export default function Skill() {
  const { t } = useLanguage();
  const selectedTech = techStack.filter((item) =>
  ["HTML","PHP","CSS","MySQL","Python","React", "JavaScript", "Tailwind CSS"].includes(item.name)
);

  return (
    <section
      id="skills"
      className="flex flex-col mx-auto max-w-5xl xl:gap-2 px-4 xl:px-10 md:max-w-full bg-bg py-6 xl:py-10 scroll-mt-[80px] xl:scroll-mt-[90px]"
    >
      <SectionHeader number="03" section="skill" label="skill" />
      <div className="flex flex-col justify-center items-center gap-2 py-4">
        <h3 className="text-md font-bold font-Grotesk text-text text-center xl:text-lg">
          {t("skill.title")}
        </h3>
        <p className="text-sm font-semibold font-Grotesk text-muted text-center xl:text-md">
          {t("skill.text")}
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {selectedTech.map((tech) => {
          const Icon = tech.icon;

          return (
            <Card
            shadow="soft"
              key={tech.name}
              className="flex flex-col justify-center items-center p-4 gap-2 xl:px-6 xl:py-8 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none transition-all duration-150"
            >
              <Icon
                className="size-7 xl:size-12"
                style={{ color: tech.color }}
              />
              <p className="text-md font-bold font-Mono text-text text-center xl:text-lg">
                {tech.name}
              </p>
              <p className="text-sm font-medium font-Grotesk text-muted text-center uppercase xl:text-md">
                {tech.desc}
              </p>
              <div className="relative rounded-xl w-full h-7 border-3 border-border shadow-brutal-sm overflow-hidden xl:h-9">
              <div
                className="h-full rounded-lg"
                style={{
                  width: tech.progres,
                  backgroundColor: tech.color,
                }}
              >
                <p className="absolute inset-0 flex items-center justify-center text-xs font-bold font-mono text-white xl:text-sm">
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
