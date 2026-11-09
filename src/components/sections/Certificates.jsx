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
      className="flex flex-col mx-auto max-w-5xl gap-4 px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20"
    >
      <SectionHeader number="05" section="certificates" label="certificates" />
      <p className="text-sm font-bold text-muted font-Grotesk text-center tracking-wider mx-auto max-w-2xl md:text-lg md:max-w-6xl">
        {t("certificates.desc")}
      </p>
      <Card className="flex w-fit self-end items-center justify-end-safe gap-2">
        <span className="bg-secondary rounded-full p-1.5"></span>
        <p className="text-sm font-bold text-text font-Mono uppercase md:text-md">
          {t("certificates.active")}
        </p>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
        {certificates.map((certificate) => {
          const Icon = certificate.icon;

          return (
            <Card
              key={certificate.id}
              className="flex flex-col gap-4 md:gap-6 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none"
            >
              <div className="flex items-center justify-between">
                <Card
                  padding="sm"
                  className="flex items-center justify-center px-4"
                >
                  <p className="text-md font-semibold text-text font-Grotesk uppercase md:text-lg">
                    {certificate.type}
                  </p>
                </Card>
                <Card
                  padding="sm"
                  variant="secondary_rev"
                  className="flex items-center justify-center px-4 gap-2 md:px-6"
                >
                  <BadgeCheck className="size-5 md:size-7" />
                  <p className="text-md font-bold font-Mono uppercase md:text-lg">
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
              <div className="flex items-center justify-start gap-4 border-b-4 border-border pb-4 md:pb-6">
                <Card className="p-3">
                  <Icon className="size-5 text-muted md:size-7" />
                </Card>
                <div className="flex flex-col gap-1">
                  <h5 className="text-lg font-bold text-text font-Mono md:text-xl">
                    {certificate.title_certificate}
                  </h5>
                  <p className="text-sm font-semibold text-muted font-Mono md:text-lg">
                    {certificate.provider}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-muted font-Grotesk uppercase md:text-xl">
                  {t("certificates.official_document")}
                </p>
                <Button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="flex items-center justify-center gap-4"
                >
                  <p className="uppercase">{t("certificates.view")}</p>
                  <Certificate className="size-5 md:size-8" />
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
            variant="surface"
            size="none"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close modal"
              className="group p-3 hover:bg-secondary"
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
