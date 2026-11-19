import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import Button from "../ui/Button";
import { BadgeCheck, Certificate, X, ExternalLink, Download } from "lucide-react";
import certificates from "../../data/certificates";
import Modal from "../ui/Modal";
import { useState } from "react";
import Reveal from "../Reveal";

export default function Certificates() {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="flex flex-col mx-auto max-w-5xl gap-4 lg:gap-6 px-4 lg:p-10 md:max-w-full bg-bg py-6 scroll-mt-[70px] lg:scroll-mt-[80px]"
    >
      <Reveal variant="slide-right">
      <SectionHeader number="05" section="certificates" label="certificates" />
      </Reveal>
      <Reveal variant="slide-right" delay={0.3}>
      <p className="text-[10px] font-medium text-muted font-Grotesk text-center tracking-wider mx-auto md:text-xs xl:text-sm">
        {t("certificates.desc")}
      </p>
      </Reveal>
      <Reveal variant="slide-right" delay={0.3}>
      <Card 
      shadow="soft"
      padding="sm"
      className="relative flex w-fit items-center ml-auto  gap-2">
        <span className="bg-secondary rounded-full p-1"></span>
        <p className="text-[10px] font-bold text-text font-Mono uppercase lg:text-xs">
          {t("certificates.active")}
        </p>
      </Card>
      </Reveal>
      <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
        {certificates.map((certificate, i) => {
          const Icon = certificate.icon;

          return (
            <Reveal variant="slide-up" delay={i * 0.20}>
            <Card
              key={certificate.id}
              className="flex flex-col gap-2 h-full xl:gap-4 hover:border-secondary hover:translate-[2px] hover:shadow-brutal-none"
            >
              <div className="flex items-center justify-between">
                <Card
                  padding="sm"
                  className="flex items-center justify-center px-2"
                  shadow="soft"
                >
                  <p className="text-[10px] font-semibold text-text font-Grotesk uppercase lg:text-xs">
                    {certificate.type}
                  </p>
                </Card>
                <Card
                shadow="soft"
                  padding="sm"
                  variant="secondary_rev"
                  className="flex items-center justify-center px-4 gap-2 "
                >
                  <BadgeCheck className="size-4 xl:size-6" strokeWidth={3} />
                  <p className="text-[10px] font-bold font-Mono uppercase lg:text-xs">
                    {t("certificates.verified")}
                  </p>
                </Card>
              </div>
              <div className="relative h-40 lg:h-60 border-4 border-border overflow-hidden">
                <img
                  src={certificate.img}
                  alt={certificate.title_certificate}
                  loading="lazy"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-start gap-4 border-b-4 border-border pb-4">
                <Card 
                shadow="soft"
                padding="none"
                className="p-2 xl:p-3">
                  <Icon className="size-4 xl:size-6 text-muted " />
                </Card>
                <div className="flex flex-col xl:gap-0.5">
                  <h5 className="text-xs font-bold text-text font-Mono lg:text-sm">
                    {certificate.title_certificate}
                  </h5>
                  <p className="text-[10px] font-semibold text-muted font-Mono lg:text-xs">
                    {certificate.provider}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-between">
                <p className="hidden md:block text-xs font-medium text-muted font-Grotesk uppercase xl:text-sm">
                  {t("certificates.official_document")}
                </p>
                <Button
                size="none"
                  onClick={() => setSelectedCertificate(certificate)}
                  shadow="soft"
                  className="flex items-center justify-center gap-2 px-3 py-2"
                >
                  <p className=" text-[10px] uppercase lg:text-xs">{t("certificates.view")}</p>
                  <Certificate className="size-4 xl:size-6" strokeWidth={3} />
                </Button>
              </div>
            </Card>
            </Reveal>
          );
        })}
      </div>
      {selectedCertificate && (
        <Modal
          onClose={() => setSelectedCertificate(null)}
          className="max-h-[90vh] max-w-3xl "
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-title"
        >
        <Card 
        shadow="soft"
          className="p-4 xl:p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h3
                id="certificate-title"
                className="text-sm font-bold text-text font-Mono lg:text-base"
              >
                {selectedCertificate.title_certificate}
              </h3>
              <p className="text-xs font-semibold text-muted font-Grotesk lg:text-sm">
                {selectedCertificate.provider}
              </p>
            </div>

            <Button
            shadow="soft"
            variant=""
            size="none"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close modal"
              className="bg-surface group p-2 hover:bg-red-500"
            >
              <X strokeWidth={3} className="size-4 text-text group-hover:text-white"/>
            </Button>
          </div>

          <div className="flex items-center justify-center border-3 border-border shadow-brutal-sm">
            <img
              src={selectedCertificate.img}
              alt={selectedCertificate.title_certificate}
              className="w-fit max-h-[65vh] object-contain"
            />
          </div>

          <div className="flex justify-end gap-2 mt-3 xl:mt-6">
            <Button
            shadow="soft"
            variant="surface">
            <a
              href={selectedCertificate.img}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[10px] tracking-wider text-text gap-1 lg:text-sm"
            >
              <ExternalLink className="size-4 " strokeWidth={3} />
              {t("certificates.open")}
            </a>
            </Button>

            <Button
            shadow="soft">
            <a
              href={selectedCertificate.img}
              download={`${selectedCertificate.title_certificate}.webp`}
              className="flex items-center text-[10px] gap-1 lg:text-sm"
            >
              <Download className="size-4" strokeWidth={3} />
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
