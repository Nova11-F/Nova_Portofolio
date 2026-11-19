import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import { Code2, BriefcaseBusiness, Users } from "lucide-react";
import poto from "../../assets/images/pp.png";
import Reveal from "../Reveal";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex flex-col mx-auto max-w-5xl gap-4 lg:gap-6 px-4 lg:p-10 md:max-w-full bg-bg py-6 scroll-mt-[70px] lg:scroll-mt-[80px]"
    >
      <Reveal variant="slide-right">
        <SectionHeader number="01" section="about" label="about" />
      </Reveal>
      <div className="grid grid-cols-1 items-stretch gap-2 md:grid-cols-2">
        <Reveal variant="slide-right" delay={0.1}>
          <Card
            shadow="soft"
            className="flex flex-col justify-start h-full gap-2 p-2 xl:p-4"
          >
            <Card
              variant="secondary"
              padding="sm"
              shadow="soft"
              className="text-[10px] font-bold text-white font-Grotesk uppercase tracking-wider w-fit py-2 xl:text-sm xl:px-4"
            >
              {t("about.list")}
            </Card>
            <h4 className="text-base font-bold text-text font-mono lg:tracking-wide xl:text-xl ">
              {t("about.title_profile")}
            </h4>
            <div className="grid grid-cols-1 items-center gap-8 lg:gap-2 xl:gap-4 border-b-4 border-border pb-4 lg:pb-8  lg:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] xl:grid-cols-[220px_minmax(0,1fr)]">
              <Card
                padding="sm"
                className="relative mx-auto flex aspect-square w-full max-w-50 items-center justify-center lg:max-w-45 xl:max-w-none"
              >
                <img
                  src={poto}
                  alt="foto portfolio"
                  loading="lazy"
                  className="object-center h-full w-full"
                ></img>
                <Card
                  shadow="soft"
                  padding="sm"
                  variant="primary"
                  className="absolute bottom-0 left-1/2 w-max max-w-[80%] -translate-x-1/2 translate-y-1/2 px-2 py-1 xl:px-3"
                >
                  <p className="text-center text-[10px] xl:text-xs font-bold text-white font-Mono">
                    {t("about.name_profile")}
                  </p>
                </Card>
              </Card>

              <p className="text-[10px] font-medium text-muted font-Grotesk tracking-wider xl:text-sm">
                {t("about.desc_profile")}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-start justify-start gap-0.5 pt-2">
                <h5 className="text-xs font-bold text-text font-Grotesk uppercase tracking-wider xl:text-xs">
                  {t("about.ability_title")}
                </h5>
                <p className="text-[10px] font-bold text-primary font-Mono xl:tracking-wider lg:text-xs xl:text-sm">
                  {t("about.ability_desc")}
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-0.5 pt-2">
                <h5 className="text-xs font-bold text-text font-Grotesk uppercase tracking-wider xl:text-xs">
                  {t("about.education_title")}
                </h5>
                <p className="text-[10px] font-bold text-primary font-Mono xl:tracking-wider lg:text-xs xl:text-sm">
                  {t("about.education_desc")}
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
        <div className="grid grid-cols-1 h-full gap-2">
          <Reveal variant="slide-right" delay={0.1} duration={0.5}>
            <Card
            padding="none"
              shadow="soft"
              className="flex flex-col justify-center h-full gap-1 xl:gap-2 px-3 py-2 lg:px-4 lg:py-3"
            >
              <div className="flex items-center justify-start gap-2">
                <Code2
                  className="size-4 xl:size-6 text-secondary"
                  strokeWidth={3}
                />
                <h4 className="text-sm font-bold text-text font-Mono xl:text-base">
                  {t("about.title_dev")}
                </h4>
              </div>
              <h5 className="text-xs font-bold text-secondary-rev font-Grotesk xl:text-sm">
                {t("about.title2_dev")}
              </h5>
              <p className="text-[10px] font-medium text-muted font-Grotesk tracking-wide xl:text-xs">
                {t("about.desc_dev")}
              </p>
            </Card>
          </Reveal>
          <div className="grid grid-cols-1 items-stretch h-full gap-2 lg:grid-cols-2">
            <Reveal variant="slide-up" delay={0.25} duration={0.5}>
              <Card
              padding="none"
                shadow="soft"
                className="flex flex-col justify-center h-full gap-1 xl:gap-2 px-3 py-2 lg:px-4 lg:py-3"
              >
                <div className="flex items-center justify-start gap-2">
                  <BriefcaseBusiness
                    className="size-4 xl:size-6 text-secondary"
                    strokeWidth={3}
                  />
                  <h4 className="text-sm font-bold text-text font-Mono xl:text-base">
                    {t("about.title_profexpe")}
                  </h4>
                </div>
                <h5 className="text-xs font-bold text-secondary-rev font-Grotesk xl:text-sm">
                  {t("about.title2_profexpe")}
                </h5>
                <div className="flex items-center justify-start gap-1">
                  <span className="bg-primary rounded-full p-[3px] "></span>
                  <h6 className="text-[10px] font-semibold text-muted font-Mono tracking-tighter [word-spacing:1px] xl:text-sm">
                    {t("about.name_profexpe")}
                  </h6>
                </div>
                <p className="text-[10px] font-medium text-muted font-Grotesk tracking-tight xl:text-sm">
                  {t("about.desc_profexpe")}
                </p>
                <div className="flex items-center justify-center bg-secondary rounded-lg w-fit px-3 xl:px-4 py-1 xl:py-1.5 border-3 border-border shadow-brutal-sm">
                  <p className="text-[10px] font-bold text-white font-Mono tracking-tighter xl:text-sm">
                    {t("about.period_profexpe")}
                  </p>
                </div>
              </Card>
            </Reveal>
            <Reveal variant="slide-up" delay={0.4} duration={0.5}>
              <Card
              padding="none"
                shadow="soft"
                className="flex flex-col justify-center h-full gap-1 xl:gap-2 px-3 py-2 lg:px-4 lg:py-3"
              >
                <div className="flex items-center justify-start gap-2">
                  <Users
                    className="size-4 xl:size-6 text-secondary"
                    strokeWidth={3}
                  />
                  <h4 className="text-sm font-bold text-text font-Mono xl:text-base">
                    {t("about.title_orgaexpe")}
                  </h4>
                </div>
                <h5 className="text-xs font-bold text-secondary-rev font-Grotesk xl:text-sm">
                  {t("about.title2_orgaexpe")}
                </h5>
                <div className="flex items-center justify-start gap-1">
                  <span className="bg-primary rounded-full p-[3px]"></span>
                  <h6 className="text-[10px] font-semibold text-muted font-Mono xl:text-sm">
                    {t("about.name_orgaexpe")}
                  </h6>
                </div>
                <p className="text-[10px] font-medium text-muted font-Grotesk tracking-tighter xl:text-sm">
                  {t("about.desc_orgaexpe")}
                </p>
                <div className="flex items-center justify-center bg-secondary rounded-lg w-fit px-1.5 xl:px-4 py-1 xl:py-1.5 border-3 border-border shadow-brutal-sm">
                  <p className="text-[10px] font-bold text-white font-Mono tracking-tighter xl:text-sm">
                    {t("about.period_orgaexpe")}
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
          <Reveal variant="pop-up" delay={0.55} duration={0.5}>
            <Card
              variant="tertiary"
              shadow="soft"
              className=" flex items-center justify-center h-full py-1.5"
            >
              <q className="text-[10px] font-bold text-white font-Mono text-center tracking-wide xl:text-base">
                {t("about.quote")}
              </q>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
