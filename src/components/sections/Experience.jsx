import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="flex flex-col mx-auto max-w-5xl gap-4 md:gap-8 px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20"
    >
      <SectionHeader number="04" section="experience" label="experience" />
      <div className="flex items-center justify-start gap-2 md:gap-4">
        <Button className="flex items-center justify-center gap-2">
          <p className="text-md font-bold text-white font-Mono uppercase md:text-lg">
            {t("experience.experience")}
          </p>
          <span className="text-sm font-medium text-text font-Grotesk border-3 border-border bg-bg-section px-3 py-1 md:text-md">
            3
          </span>
        </Button>
        <Button
          variant="surface"
          className="flex items-center justify-center gap-2"
        >
          <p className="text-md font-bold text-text font-Mono uppercase md:text-lg">
            {t("experience.education")}
          </p>
          <span className="text-sm font-medium text-text font-Grotesk border-3 border-border bg-bg-section px-3 py-1 md:text-md">
            3
          </span>
        </Button>
        <Button
          variant="surface"
          className="flex items-center justify-center gap-2"
        >
          <p className="text-md font-bold text-text font-Mono uppercase md:text-lg">
            {t("experience.organization")}
          </p>
          <span className="text-sm font-medium text-text font-Grotesk border-3 border-border bg-bg-section px-3 py-1 md:text-md">
            3
          </span>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-2 md:gap-4">
        <Card className="flex items-center justify-start gap-8 md:p-8">
          <div className="flex shrink-0 flex-col gap-2">
            <p className="whitespace-nowrap text-lg font-semibold text-secondary font-Mono uppercase">
              Praktik Kerja Lapangan
            </p>
            <h4 className="whitespace-nowrap text-lg font-bold text-text font-Mono uppercase md:text-2xl">
              2023 (Juni - Desember)
            </h4>
            <p className="whitespace-nowrap text-lg font-semibold text-muted font-Grotesk">
              Jakarta
            </p>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-2">
            <h3 className="text-4xl font-bold text-text font-Mono">
              Network Reliability Intern
            </h3>
            <p className="text-lg font-medium text-muted font-Grotesk">
              Saya menjalani magang sebagai Network Reliability Intern dengan
              fokus pada pengelolaan aset dan pemeliharaan infrastruktur
              jaringan perusahaan. Kegiatan saya meliputi audit jaringan,
              rekonsiliasi inventaris aset, serta survei lapangan dan analisis
              teknis untuk mendukung optimalisasi dan perbaikan jaringan.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
