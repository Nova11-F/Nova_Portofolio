import Card from "../ui/Card";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import { FolderOpen, ArrowRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import projects from "../../data/projects";
import Reveal from "../Reveal";

export default function Project() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="flex flex-col mx-auto max-w-5xl gap-4 lg:gap-6 px-4 lg:p-10 md:max-w-full bg-bg py-6 scroll-mt-[70px] lg:scroll-mt-[80px]"
    >
      <Reveal variant="slide-right">
      <SectionHeader number="02" section="project" label="project" />
      </Reveal>
      <div className="flex flex-col gap-4">
      <Reveal delay={0.2} variant="slide-right">
        <div className="flex items-center justify-center">
          <h4 className="text-[10px] font-semibold text-text font-Mono text-center tracking-wide max-w-4xl xl:text-sm">
            {t("projects.desc")}
          </h4>
        </div>
      </Reveal>
        <div className="grid grid-cols-1 gap-4 items-stretch md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => {
            
            return (
              <Reveal delay={i * 0.15}>  
              <Card
                key={project.id}
                padding="none"
                className="flex flex-col h-full gap-2"
              >
                <div className="relative h-40 md:h-45 border-b-3 border-border overflow-hidden">
                  <Card
                    padding="none"
                    shadow="soft"
                    className="absolute bottom-1 left-2 text-[10px] font-bold text-text font-Mono uppercase px-4 py-1 xl:text-sm"
                  >
                    {project.title}
                  </Card>
                  <Card
                    variant="secondary"
                    shadow="soft"
                    className="absolute bottom-1 right-2 text-[10px] font-bold font-Mono uppercase px-4 py-1 xl:text-sm"
                  >
                    {project.type}
                  </Card>
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="object-center"
                  ></img>
                </div>
                <div className="flex flex-col flex-1 gap-4 pb-4 border-b-3 border-border px-4 xl:px-6">
                  <div className="py-2 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-text font-Grotesk uppercase xl:text-lg">
                      {project.name}
                    </h3>

                    <p className="text-[10px] font-medium text-muted font-Grotesk tracking-wider wrap-normal xl:text-sm">
                      {t(project.desc)}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {project.tech.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Card
                          key={item}
                          padding="none"
                          shadow="soft"
                          className="flex items-center justify-center p-1 md:p-2 gap-1 md:gap-2"
                        >
                          <Icon
                            className="size-3 md:size-4"
                            style={{ color: item.color }}
                          />

                          <p className="text-[10px] font-bold text-text font-Mono text-center uppercase">
                            {item.name}
                          </p>
                        </Card>
                        
                      );
                    })}
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-end px-4 pb-2 xl:pb-4">
                    <Button
                      key={project.id}
                      size="none"
                      shadow="soft"
                      variant="surface"
                      className="group flex items-center justify-center gap-2 px-4 py-2 xl:py-3"
                      onClick={() =>
                        window.open(
                          project.url,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                    >
                      <BsGithub className="size-4" />

                      <p className="text-[10px] group-hover:text-white xl:text-xs">
                        Github Repo
                      </p>
                    </Button>
                  </div>
                </div>
              </Card>
              </Reveal>
            );
          })}
        </div>
        <Reveal variant="slide-right" delay={0.3} duration={0.5}>
        <Card
          shadow="soft"
          padding="none"
          className="flex flex-col items-center justify-between px-2 py-4 gap-2 md:flex-row"
        >
          <div className="flex items-center justify-start gap-2">
            <Card
              padding="none"
              shadow="soft"
              className="px-3 py-2"
            >
              <FolderOpen className="size-4 text-yellow-900 fill-amber-500 xl:size-6" />
            </Card>
            <div className="flex flex-col gap-0.5 xl:gap-1">
              <h4 className="text-sm xl:text-base font-bold text-text font-Mono xl:tracking-wide">
                {t("projects.moreProjects")}
              </h4>
              <p className="text-[10px] xl:text-xs font-medium text-muted font-Grotesk">
                {t("projects.moreProjectsDesc")}
              </p>
            </div>
          </div>
          <Button
            shadow="soft"
            size="none"
            className="flex items-center justify-center text-[10px] w-full py-1.5 gap-2 md:w-fit xl:text-sm md:px-4 md:py-1.5"
            onClick={() =>
              window.open(
                "https://github.com/Nova11-F",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            {t("projects.githubProfile")}
            <ArrowRight className="size-4 xl:size-5" />
          </Button>
        </Card>
        </Reveal>
      </div>
    </section>
  );
}
