import { useLanguage } from "../../context/LanguageContext";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { ArrowDown, ChevronRight, Download } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex flex-col mx-auto max-w-5xl gap-4 xl:gap-6 px-4 xl:px-10 md:max-w-full bg-bg py-6 xl:py-12 scroll-mt-[80px] xl:scroll-mt-[90px]"
    >
      <div className="grid grid-cols-1 items-center gap-4 xl:gap-8 xl:grid-cols-3">
        <div className="flex flex-col col-span-2 gap-2 xl:gap-6">
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
          <p className="text-[10px] xl:text-sm font-medium text-muted font-Grotesk [word-spacing:4px] leading-normal xl:max-w-4xl">
            {t("hero.description")}
          </p>
          <div className="flex items-center justify-start gap-2 xl:gap-4">
            <Button
              size="none"
              shadow="soft"
              href="#projects"
              className="flex items-center justify-center px-4 py-2.5 gap-2 xl:py-3 xl:gap-4"
            >
              <span className="text-[10px] xl:text-sm font-bold uppercase">
                {t("hero.projects")}
              </span>
              <ArrowDown className="size-4" strokeWidth={3} />
            </Button>
            <Button
              size="none"
              shadow="soft"
              variant="surface"
              className="group flex items-center justify-center px-4 py-2.5 gap-2 xl:py-3 xl:gap-4"
            >
              <span className="text-[10px] xl:text-sm font-bold uppercase group-hover:text-white">
                {t("hero.cv")}
              </span>
              <Download
                className="size-4 group-hover:text-white"
                strokeWidth={3}
              />
            </Button>
          </div>
          <Card 
          size="none"
          variant="none" 
          shadow="soft" 
          className="bg-bg-muted flex items-center justify-between px-4 py-2">
            <div className="flex items-center justify-start gap-2 xl:gap-4">
            <div className="flex items-center gap-1">
              <span className="bg-primary rounded-full border-3 p-0.5 xl:p-1"></span>
              <span className="bg-secondary rounded-full border-3 p-0.5 xl:p-1 "></span>
              <span className="bg-secondary-rev rounded-full border-3 p-0.5 xl:p-1"></span>
            </div>
            <p className="text-[10px] font-bold text-text font-Mono xl:tracking-wider xl:text-sm">
              {t("hero.command")}
            </p>
            </div>
            <div className="flex items-center justify-end gap-1 xl:gap-2">
              <ChevronRight className="size-4 text-secondary xl:size-6" strokeWidth={3}/>
              <p className="text-[10px] font-semibold text-secondary font-Mono uppercase xl:tracking-wider xl:text-sm">
                {t("hero.ready")}
              </p>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Card 
          shadow="soft"
          className="flex flex-col">
            <div></div>
            <Card
            shadow="soft"></Card>
          </Card>
        </div>
      </div>
    </section>
  );
}
