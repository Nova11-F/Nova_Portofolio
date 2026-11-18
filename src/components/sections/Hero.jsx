import { useLanguage } from "../../context/LanguageContext";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { ArrowDown, ChevronRight, Download } from "lucide-react";
import techStack from "../../data/techStack";
import poto from "../../assets/images/pp.png";
import Reveal from "../Reveal";

export default function Hero() {
  const { t } = useLanguage();
  const selectedTech = techStack.filter((item) =>
    ["React", "JavaScript", "Tailwind CSS", "Next.JS"].includes(item.name),
  );

  return (
    <section
      id="hero"
      className="relative flex flex-col mx-auto max-w-5xl gap-4 xl:gap-6 px-4 xl:px-10 md:max-w-full bg-bg py-6 xl:py-12 scroll-mt-[80px] xl:scroll-mt-[90px]"
    >
      <div className="grid grid-cols-1 items-center gap-6 xl:gap-10 xl:grid-cols-[minmax(0,1fr)_500px]">
        <div className="flex flex-col min-w-0 gap-2 xl:gap-6">
          <Reveal variant="slide-right" delay={0.1}>
          <Card
            shadow="soft"
            className="w-fit flex items-center justify-around text-xs xl:text-md font-bold text-text font-Mono gap-4 px-2 py-2"
          >
            <div className="flex items-center gap-1">
              <span className="bg-primary rounded-full border-3 p-0.5 xl:p-1"></span>
              <span className="bg-secondary rounded-full border-3 p-0.5 xl:p-1 "></span>
              <span className="bg-secondary-rev rounded-full border-3 p-0.5 xl:p-1"></span>
            </div>
            {t("hero.badge")}
            <div className="flex items-center gap-1">
              <span className="bg-primary rounded-full border-3 p-0.5 xl:p-1 "></span>
              <span className="bg-secondary rounded-full border-3 p-0.5 xl:p-1 "></span>
              <span className="bg-secondary-rev rounded-full border-3 p-0.5 xl:p-1 "></span>
            </div>
          </Card>
          </Reveal>
           <Reveal variant="slide-up" delay={0.2}>
          <h3 className="text-3xl xl:text-4xl font-bold text-text font-Mono [word-spacing:4px] leading-normal xl:leading-relaxed xl:max-w-3xl">
            {t("hero.headline_start")}
            <span className="text-white bg-secondary border-br-3 border-border shadow-brutal-md px-2">
              {t("hero.headline_highlight")}
            </span>
            {t("hero.headline_mid")}
            <span className="text-white bg-secondary-rev border-br-3 border-border shadow-brutal-md px-2 md:px-4">
              {t("hero.headline_end")}
            </span>
          </h3>
          </Reveal>
            <Reveal variant="slide-up" delay={0.3}>
          <p className="text-[10px] xl:text-sm font-medium text-muted font-Grotesk [word-spacing:4px] leading-normal xl:max-w-4xl">
            {t("hero.description")}
          </p>
          </Reveal>
          <div className="flex items-center justify-start gap-2 xl:gap-4">
            <Reveal variant="slide-up" delay={0.3}>
            <Button
              size="none"
              shadow="soft"
              className="flex items-center justify-center w-full xl:w-fit px-4 py-2.5 gap-2 xl:py-3 xl:gap-4"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <span className="text-[10px] xl:text-sm font-bold uppercase">
                {t("hero.projects")}
              </span>
              <ArrowDown className="size-4" strokeWidth={3} />
            </Button>
            </Reveal>
            <Reveal variant="pop-up" delay={0.4}>
            <Button
              size="none"
              shadow="soft"
              variant="surface"
              className="group flex items-center justify-center w-full xl:w-fit px-4 py-2.5 gap-2 xl:py-3 xl:gap-4"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1JDHnBEI9sVSZHCczJT_NCMdTi5WiHZa-/view?usp=drive_link",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <span className="text-[10px] xl:text-sm font-bold uppercase group-hover:text-white">
                {t("hero.cv")}
              </span>
              <Download
                className="size-4 group-hover:text-white"
                strokeWidth={3}
              />
            </Button>
            </Reveal>
          </div>
        </div>
        <div className="flex items-center justify-center xl:justify-end">
            <Reveal
    variant="pop-up"
    delay={0.3}
    duration={0.7}
    className="w-full"
  >
          <Card
            padding="none"
            shadow="soft"
            className="flex flex-col w-full xl:w-full p-4 gap-4"
          >
            <div className="flex items-center justify-between gap-3 border-b-3 border-border pb-4">
              <h3 className="text-sm font-bold text-text font-Mono uppercase xl:text-md">
                {t("hero.profile.cardTitle")}
              </h3>

              <Card
                padding="none"
                shadow="soft"
                className="flex items-center justify-center gap-2 px-2 py-1 shrink-0"
              >
                <span className="bg-tertiary rounded-full p-1"></span>

                <p className="text-[10px] font-bold text-text font-Mono uppercase xl:text-xs">
                  {t("hero.profile.availability")}
                </p>
              </Card>
            </div>
            <div className="flex items-strech gap-4">
              <Card shadow="soft" padding="none" className="h-full">
                <img
                  src={poto}
                  alt="foto profile"
                  loading="lazy"
                  className="h-full w-30"
                ></img>
              </Card>
              <div className="flex flex-col gap-1 justify-center">
                <p className="text-[10px] font-medium text-muted font-Mono tracking-widest xl:text-xs">
                  {t("hero.profile.nim")}
                </p>
                <p className="text-md font-bold text-text font-Grotesk xl:text-lg">
                  {t("hero.profile.name")}
                </p>
                <p className="text-[10px] font-semibold text-muted font-Mono xl:text-xs">
                  {t("hero.profile.university")}
                </p>
                <p className="text-[10px] font-semibold text-secondary font-Mono xl:text-xs">
                  {t("hero.profile.department")}
                </p>
                <Card
                  shadow="soft"
                  padding="none"
                  className="text-[10px] font-bold text-muted font-Mono px-2 py-1 text-center xl:text-xs"
                >
                  {t("hero.profile.gpa")}
                </Card>
              </div>
            </div>
            <Card
              variant="none"
              shadow="soft"
              padding="none"
              className="flex flex-col bg-bg-muted gap-2 px-4 py-2"
            >
              <h4 className="text-sm font-bold text-text font-Mono ">
                {t("hero.profile.focusTitle")}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedTech.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card
                      key={item}
                      shadow="soft"
                      padding="none"
                      className="flex items-center justify-center gap-2 p-1.5"
                    >
                      <Icon
                        className="size-4"
                        style={{ color: item.color }}
                      ></Icon>
                      <p className="text-xs font-bold text-text font-Mono">
                        {item.name}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </Card>
            <div className="flex items-center justify-between border-t-3 border-border pt-4">
              <h4 className="text-sm font-bold text-text font-Mono tracking-wider">
                {t("hero.profile.statusLabel")}
              </h4>
              <Card
                padding="none"
                shadow="soft"
                className="flex items-center justify-center gap-2 px-2 py-1"
              >
                <span className="bg-tertiary rounded-full p-1"></span>
                <p className="text-[10px] font-bold text-text font-Mono uppercase xl:text-xs">
                  {t("hero.status")}
                </p>
              </Card>
            </div>
          </Card>
          </Reveal>
        </div>
      </div>
      <Reveal
  variant="slide-up"
  delay={0.5}
  duration={0.6}
>
      <Card
        size="none"
        variant="none"
        shadow="soft"
        className="bg-bg-muted flex items-center justify-between px-2 py-2 xl:px-4"
      >
        <div className="flex items-center justify-start gap-2 xl:gap-4">
          <div className="flex items-center gap-1">
            <span className="bg-primary rounded-full border-3 p-0.5 xl:p-1"></span>
            <span className="bg-secondary rounded-full border-3 p-0.5 xl:p-1 "></span>
            <span className="bg-secondary-rev rounded-full border-3 p-0.5 xl:p-1"></span>
          </div>
          <p className="text-[10px] font-bold text-text font-Mono tracking-tighter xl:tracking-wider xl:text-sm">
            {t("hero.command")}
          </p>
        </div>
        <div className="flex items-center justify-end xl:gap-2">
          <ChevronRight
            className="size-4 text-secondary xl:size-6"
            strokeWidth={3}
          />
          <p className="text-[10px] font-semibold text-secondary font-Mono tracking-tighter uppercase xl:tracking-wider xl:text-sm">
            {t("hero.ready")}
          </p>
        </div>
      </Card>
      </Reveal>
    </section>
  );
}
