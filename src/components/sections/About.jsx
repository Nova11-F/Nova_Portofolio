import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import {
  Code2,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex flex-col mx-auto max-w-5xl px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20"
    >
      <SectionHeader 
      number="01" 
      section="about"
      label="about" />
      <div className="grid grid-cols-1 items-start mt-8 gap-4 md:grid-cols-2">
        <Card 
        className="flex flex-col justify-start gap-4 p-4 md:p-8">
          <Card
          shadow="none"
          variant="tertiary"
          padding="sm"
          className="text-sm font-bold text-white font-Grotesk uppercase tracking-wider w-fit md:text-lg md:px-4">{t("about.list")}</Card>
          <h4 className="text-xl font-bold text-text font-mono max-w-2xl md:text-3xl md:max-w-5xl">{t("about.title_profile")}</h4>
          <div className="flex items-start justify-start gap-8 pb-8 border-b-4 border-border">
            <Card className="w-80"></Card>
            <p className="text-lg font-medium text-muted font-Grotesk md:max-w-2xl">
              {t("about.desc_profile")}
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-start justify-start gap-2 pt-2">
              <h5 className="text-sm font-bold text-text font-Grotesk uppercase tracking-widest md:text-md">
                {t("about.ability_title")}
              </h5>
              <p className="text-md font-bold text-muted font-Mono tracking-wider md:text-lg">
                {t("about.ability_desc")}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 pt-2">
              <h5 className="text-sm font-bold text-text font-Grotesk uppercase tracking-widest md:text-md">
                {t("about.education_title")}
              </h5>
              <p className="text-md font-bold text-muted font-Mono tracking-wider md:text-lg">
                {t("about.education_desc")}
              </p>
            </div>
          </div>
        </Card>
        <div className="flex flex-col items-center justify-center gap-4">
          <Card className="flex flex-col gap-2 p-4 md:p-8">
            <div className="flex items-center justify-start gap-4">
            <Code2 className="size-5 md:size-8 text-secondary"/>
            <h4 className="text-md font-bold text-text font-Mono md:text-lg">
              {t("about.title_dev")}
            </h4>
            </div>
            <h5 className="text-md font-bold text-tertiary font-Grotesk">Software Engineering & Full Stack Development</h5>
            <p className="text-sm font-semibold text-muted font-Mono tracking-wide">
              {t("about.desc_dev")}
            </p>
          </Card>
          <div className="grid grid-cols-2 gap-4">
          <Card>
            <div className="flex items-center justify-start gap-4">
            <BriefcaseBusiness className="size-5 md:size-8 text-secondary"/>
            <h4 className="text-md font-bold text-text font-Mono md:text-lg">
              {t("about.title_profexpe")}
            </h4>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-start gap-4">
            <Users className="size-5 md:size-8 text-secondary"/>
            <h4 className="text-md font-bold text-text font-Mono md:text-lg">
              {t("about.title_orgaexpe")}
            </h4>
            </div>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
