import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import techStack from "../../data/techStack";
import Reveal from "../Reveal";

export default function Skill() {
  const { t } = useLanguage();
  const selectedTech = techStack.filter((item) =>
    [
      "HTML",
      "PHP",
      "CSS",
      "MySQL",
      "Python",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ].includes(item.name),
  );

  return (
    <section
      id="skills"
      className="flex flex-col mx-auto max-w-5xl gap-4 px-4 lg:p-10 md:max-w-full bg-bg py-6 scroll-mt-[70px] lg:scroll-mt-[80px]"
    >
      <Reveal variant="slide-right">
        <SectionHeader number="03" section="skill" label="skill" />
      </Reveal>
      <Reveal delay={0.2} variant="slide-right">
      <div className="flex flex-col justify-center items-center gap-1 py-1">
        <h3 className="text-sm font-bold font-Grotesk text-text text-center xl:text-base">
          {t("skill.title")}
        </h3>
        <p className="text-xs font-semibold font-Grotesk text-muted text-center tracking-wider max-w-full xl:text-sm">
          {t("skill.text")}
        </p>
      </div>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {selectedTech.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <Reveal variant="pop-up" delay={i * 0.25} duration={0.5}>
            <Card
              shadow="soft"
              key={tech.name}
              className="flex flex-col justify-center items-center h-full p-4 gap-1 lg:gap-2 xl:px-6 xl:py-8 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none transition-all duration-150"
            >
              <Icon
                className="size-7 xl:size-12"
                style={{ color: tech.color }}
              />
              <p className="text-sm font-bold font-Mono text-text text-center lg:text-base">
                {tech.name}
              </p>
              <p className="text-xs font-medium font-Grotesk text-muted text-center uppercase lg:text-sm">
                {tech.desc}
              </p>
              <div className="relative rounded-xl w-full h-5 md:h-7 border-3 border-border shadow-brutal-sm overflow-hidden xl:h-9">
                <div
                  className="h-full rounded-lg"
                  style={{
                    width: tech.progres,
                    backgroundColor: tech.color,
                  }}
                >
                  <p className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono text-white md:text-xs lg:text-sm">
                    {tech.progres}
                  </p>
                </div>
              </div>
            </Card>
        </Reveal>
          );
        })}
      </div>
    </section>
  );
}
