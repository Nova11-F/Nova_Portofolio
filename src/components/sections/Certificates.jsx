import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";
import { BadgeCheck, Certificate, X, ExternalLink, Download } from "lucide-react";
import certificates from "../../data/certificates";
import Modal from "../ui/Modal";
import { useState } from "react";

export default function Certificates() {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-8 px-10 xl:px-20 md:max-w-full bg-bg py-10 xl:py-20 scroll-mt-[100px] xl:scroll-mt-[70px]"
    >
      <SectionHeader number="05" section="certificates" label="certificates" />
      <p className="text-sm font-bold text-muted font-Grotesk text-center tracking-wider mx-auto max-w-2xl xl:text-lg xl:max-w-6xl">
        {t("certificates.desc")}
      </p>
      <Card className="flex w-fit self-end items-center justify-end-safe gap-2">
        <span className="bg-secondary rounded-full p-1.5"></span>
        <p className="text-sm font-bold text-text font-Mono uppercase lg:text-md">
          {t("certificates.active")}
        </p>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        {certificates.map((certificate) => {
          const Icon = certificate.icon;

          return (
            <Card
              key={certificate.id}
              className="flex flex-col gap-4 xl:gap-6 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none"
            >
              <div className="flex items-center justify-between">
                <Card
                  padding="sm"
                  className="flex items-center justify-center px-4"
                >
                  <p className="text-md font-semibold text-text font-Grotesk uppercase xl:text-lg">
                    {certificate.type}
                  </p>
                </Card>
                <Card
                  padding="sm"
                  variant="secondary_rev"
                  className="flex items-center justify-center px-4 gap-2 lg:px-6"
                >
                  <BadgeCheck className="size-5 xl:size-7" />
                  <p className="text-md font-bold font-Mono uppercase xl:text-lg">
                    {t("certificates.verified")}
                  </p>
                </Card>
              </div>
              <div className="relative h-60 md:h-80 border-4 border-border shadow-brutal-md overflow-hidden">
                <img
                  src={certificate.img}
                  alt={certificate.title_certificate}
                  loading="lazy"
                  className="object-center"
                />
              </div>
              <div className="flex items-center justify-start gap-4 border-b-4 border-border pb-4">
                <Card 
                padding="none"
                className="p-2 xl:p-3">
                  <Icon className="size-7 text-muted " />
                </Card>
                <div className="flex flex-col gap-1">
                  <h5 className="text-md font-bold text-text font-Mono xl:text-xl">
                    {certificate.title_certificate}
                  </h5>
                  <p className="text-sm font-semibold text-muted font-Mono xl:text-lg">
                    {certificate.provider}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-muted font-Grotesk uppercase xl:text-xl">
                  {t("certificates.official_document")}
                </p>
                <Button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="flex items-center justify-center gap-4"
                >
                  <p className=" text-sm uppercase xl:text-md">{t("certificates.view")}</p>
                  <Certificate className="size-6 xl:size-8" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
      {selectedCertificate && (
        <Modal
          onClose={() => setSelectedCertificate(null)}
          className="max-h-[90vh] max-w-5xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
        >
        <Card 
          className="p-4 md:p-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h3
                id="certificate-title"
                className="text-lg font-bold text-text font-Mono md:text-2xl"
              >
                {selectedCertificate.title_certificate}
              </h3>
              <p className="text-sm font-semibold text-muted font-Grotesk">
                {selectedCertificate.provider}
              </p>
            </div>

            <Button
            variant=""
            size="none"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close modal"
              className="bg-surface group p-3 hover:bg-red-500"
            >
              <X strokeWidth={3} className="size-6 text-text group-hover:text-white"/>
            </Button>
          </div>

          <div className="border-3 border-border shadow-brutal-sm">
            <img
              src={selectedCertificate.img}
              alt={selectedCertificate.title_certificate}
              className="w-full max-h-[65vh] object-contain"
            />
          </div>

          <div className="flex flex-wrap justify-end gap-3 mt-6">
            <Button
            variant="surface">
            <a
              href={selectedCertificate.img}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-text gap-2"
            >
              <ExternalLink className="size-5" />
              {t("certificates.open")}
            </a>
            </Button>

            <Button>
            <a
              href={selectedCertificate.img}
              download={`${selectedCertificate.title_certificate}.webp`}
              className="flex items-center gap-2"
            >
              <Download className="size-5" />
              {t("certificates.download")}
            </a>
            </Button>
          </div>
          </Card>
        </Modal>
      )}
    </section>
  );
}
