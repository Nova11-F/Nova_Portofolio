import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";
import { BadgeCheck, Certificate } from "lucide-react";

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section
      id="certificates"
      className="flex flex-col mx-auto max-w-5xl gap-4 px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20"
    >
      <SectionHeader number="05" section="certificates" label="certificates" />
      <p className="text-sm font-bold text-muted font-Grotesk text-center tracking-wider mx-auto max-w-2xl md:text-lg md:max-w-6xl">
        {t("certificates.desc")}
      </p>
      <Card className="flex w-fit self-end items-center justify-end-safe gap-2">
        <span className="bg-secondary rounded-full p-1.5"></span>
        <p className="text-sm font-bold text-text font-Mono md:text-md">
          {t("certificates.active")}
        </p>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Card className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Card
            padding="sm"
            className="flex items-center justify-center px-4">
              <p className="text-md font-semibold text-text font-Grotesk uppercase md:text-lg">
              Web Development
              </p>
              </Card>
            <Card 
            padding="sm"
            variant="secondary_rev"
            className="flex items-center justify-center px-4 gap-2 md:px-6">
              <BadgeCheck className="size-5 md:size-7"/>
              <p className="text-md font-bold font-Mono uppercase md:text-lg">
                {t("certificates.verified")}
              </p>
            </Card>
          </div>
          <div></div>
          <div></div>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-muted font-Grotesk uppercase md:text-xl">{t("certificates.official_document")}</p>
            <Button className="flex items-center justify-center gap-4">
              <p className="uppercase">{t("certificates.view")}</p>
              <Certificate className="size-5 md:size-8" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
