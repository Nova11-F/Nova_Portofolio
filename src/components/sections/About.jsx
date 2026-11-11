import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import { Code2, BriefcaseBusiness, Users } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-8 px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20"
    >
      <SectionHeader number="01" section="about" label="about" />
      <div className="grid grid-cols-1 items-stretch mt-8 gap-4 2xl:grid-cols-2">
        <Card className="flex flex-col justify-start h-full gap-4 p-4 md:p-6 xl:p-8">
          <Card
            variant="secondary"
            padding="sm"
            className="text-sm font-bold text-white font-Grotesk uppercase tracking-wider w-fit shadow-brutal-md xl:text-lg xl:px-4"
          >
            {t("about.list")}
          </Card>
          <h4 className="text-xl font-bold text-text font-mono max-w-2xl md:text-3xl md:max-w-5xl">
            {t("about.title_profile")}
          </h4>
          <div className="grid grid-cols-2 items-center gap-4 border-b-4 border-border pb-8 md:grid-cols-[minmax(180px,0.8fr)_minmax(0,2fr)] lg:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)] xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-12">
            <Card className="relative mx-auto flex aspect-square w-full max-w-60 items-center justify-center md:max-w-none">
              <Card
                padding="sm"
                variant="primary"
                className="absolute bottom-0 left-1/2 w-max max-w-[90%] -translate-x-1/2 translate-y-1/2 px-3 md:px-4"
              >
                <p className="text-center text-sm font-bold text-white font-Mono lg:text-md">
                  {t("about.name_profile")}
                </p>
              </Card>
            </Card>

            <p className="text-sm font-medium text-muted font-Grotesk tracking-wider md:text-base lg:text-lg">
              {t("about.desc_profile")}
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-start justify-start gap-2 pt-2">
              <h5 className="text-sm font-bold text-text font-Grotesk uppercase tracking-widest xl:text-md">
                {t("about.ability_title")}
              </h5>
              <p className="text-md font-bold text-primary font-Mono xl:tracking-wider xl:text-lg">
                {t("about.ability_desc")}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 pt-2">
              <h5 className="text-sm font-bold text-text font-Grotesk uppercase tracking-widest xl:text-md">
                {t("about.education_title")}
              </h5>
              <p className="text-md font-bold text-primary font-Mono xl:tracking-wider xl:text-lg">
                {t("about.education_desc")}
              </p>
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-1 h-full gap-4">
          <Card className="flex flex-col justify-center gap-2 p-4 xl:gap-4 md:p-6 xl:p-8">
            <div className="flex items-center justify-start gap-4">
              <Code2 className="size-6 xl:size-8 text-secondary" />
              <h4 className="text-xl font-bold text-text font-Mono xl:text-2xl">
                {t("about.title_dev")}
              </h4>
            </div>
            <h5 className="text-md font-bold text-secondary-rev font-Grotesk xl:text-lg">
              {t("about.title2_dev")}
            </h5>
            <p className="text-sm font-medium text-muted font-Grotesk tracking-wider xl:text-lg">
              {t("about.desc_dev")}
            </p>
          </Card>
          <div className="grid grid-cols-2 items-stretch h-full gap-4">
            <Card className="flex flex-col justify-center gap-2 p-4 xl:gap-4 md:p-6 xl:p-8">
              <div className="flex items-center justify-start gap-4">
                <BriefcaseBusiness className="size-6 xl:size-8 text-secondary" />
                <h4 className="text-lg font-bold text-text font-Mono xl:text-2xl">
                  {t("about.title_profexpe")}
                </h4>
              </div>
              <h5 className="text-md font-bold text-secondary-rev font-Grotesk xl:text-lg">
                {t("about.title2_profexpe")}
              </h5>
              <div className="flex items-center justify-start gap-2">
                <span className="bg-primary rounded-full p-1"></span>
                <h6 className="text-sm font-semibold text-muted font-Mono xl:text-md">
                  {t("about.name_profexpe")}
                </h6>
              </div>
              <p className="text-sm font-medium text-muted font-Grotesk tracking-wider xl:text-lg">
                {t("about.desc_profexpe")}
              </p>
              <div className="flex items-center justify-start bg-secondary rounded-4xl w-fit px-3 md:px-4 py-1 md:py-2 border-3 border-border shadow-brutal-sm">
                <p className="text-sm font-bold text-white font-Mono">
                  {t("about.period_profexpe")}
                </p>
              </div>
            </Card>
            <Card className="flex flex-col justify-center gap-2 p-4 xl:gap-4 md:p-6 xl:p-8">
              <div className="flex items-center justify-start gap-4">
                <Users className="size-6 xl:size-8 text-secondary" />
                <h4 className="text-lg font-bold text-text font-Mono xl:text-2xl">
                  {t("about.title_orgaexpe")}
                </h4>
              </div>
              <h5 className="text-md font-bold text-secondary-rev font-Grotesk xl:text-lg">
                {t("about.title2_orgaexpe")}
              </h5>
              <div className="flex items-center justify-start gap-2">
                <span className="bg-primary rounded-full p-1"></span>
                <h6 className="text-sm font-semibold text-muted font-Mono xl:text-md">
                  {t("about.name_orgaexpe")}
                </h6>
              </div>
              <p className="text-sm font-medium text-muted font-Grotesk tracking-wider xl:text-lg">
                {t("about.desc_orgaexpe")}
              </p>
              <div className="flex items-center justify-start bg-secondary rounded-4xl w-fit px-3 md:px-4 py-1 md:py-2 border-3 border-border shadow-brutal-sm">
                <p className="text-sm font-bold text-white font-Mono">
                  {t("about.period_orgaexpe")}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
