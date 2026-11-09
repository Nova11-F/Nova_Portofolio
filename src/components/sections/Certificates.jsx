import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";
import { BadgeCheck, Certificate, Code2, Award } from "lucide-react";
import sertif  from "../../assets/images/certificates/sertif.png"

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
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
        <Card className="flex flex-col gap-4 md:gap-6 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none">
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
          <div className="relative h-100 border-4 border-border shadow-brutal-md overflow-hidden">
            <img
            src={sertif}
            alt="sertifikat"
            className="object-center"/>
          </div>
          <div className="flex items-center justify-start gap-4 border-b-4 border-border pb-4 md:pb-6">
            <Card
            className="p-3">
              <Code2 className="size-5 text-muted md:size-7"/>
            </Card>
            <div className="flex flex-col gap-1">
              <h5 className="text-lg font-bold text-text font-Mono md:text-xl">Belajar Dasar Pemrogaman JavaScript</h5>
              <p className="text-sm font-semibold text-muted font-Mono md:text-lg">dicoding</p>
            </div>
          </div>
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
