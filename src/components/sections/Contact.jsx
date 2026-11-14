import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "../../context/LanguageContext";
import {
  Handshake,
  Lightbulb,
  Mail,
  MessageSquareText,
  MapPinned,
  CalendarCheck,
  Copy,
  SendHorizonal,
  MessagesSquare,
  Share2,
} from "lucide-react";
import socials from "../../data/socials";

export default function Contact() {
  const { t } = useLanguage();
  const { email, whatsapp, location, internship } = socials;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email.value);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Gagal menyalin email:", error);
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${socials.whatsapp.phone}?text=${encodeURIComponent(
      socials.whatsapp.message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-6 px-4 xl:px-10 md:max-w-full bg-bg py-6 xl:py-10 scroll-mt-[80px] xl:scroll-mt-[90px]"
    >
      <SectionHeader number="06" section="contact" label="contact" />
      <Card className="flex flex-col gap-4 p-4 xl:gap-6 xl:p-8">
        <div className="flex items-center justify-between border-b-4 border-border pb-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <span className="bg-tertiary rounded-full p-1.5 md:p-2"></span>
            <p className="text-lg font-bold text-text font-mono lg:text-2xl">
              {t("contact.username")}
            </p>
          </div>
          <Card
            variant="tertiary"
            shadow="soft"
            className="text-xs font-bold text-white font-Mono uppercase px-4 py-1.5 xl:px-3 xl:text-md"
          >
            {t("contact.available")}
          </Card>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative flex flex-col gap-4 xl:gap-6">
            <Card
              variant="secondary"
              shadow="soft"
              className="flex items-center justify-center gap-2 xl:gap-4 w-fit px-4 xl:px-6 py-1.5 xl:py-2"
            >
              <Handshake className="size-4 lg:size-6" />
              <p className="text-xs font-semibold text-white font-Grotesk tracking-wide uppercase xl:text-md">
                {t("contact.title")}
              </p>
            </Card>
            <h3 className="text-3xl font-bold text-text font-Mono uppercase leading-normal xl:leading-none xl:text-4xl">
              {t("contact.headline_start")}{" "}
              <span className="text-white bg-secondary border-br-3 border-border shadow-brutal-md px-2 md:px-4">
                {t("contact.headline_idea")}
              </span>{" "}
              {t("contact.headline_mid")}{" "}
              <span className="text-white bg-secondary-rev border-br-3 border-border shadow-brutal-md px-2 md:px-4">
                {t("contact.headline_end")}
              </span>
            </h3>
            <p className="text-xs font-semibold text-muted font-Grotesk tracking-wider md:max-w-6xl xl:text-lg">
              {t("contact.description")}
            </p>
            <Card
              variant="secondary_rev"
              shadow="soft"
              className="flex items-center justify-center gap-2 xl:gap-4 w-fit px-4 xl:px-6 py-1.5 xl:py-2"
            >
              <Lightbulb className="size-4 text-white xl:size-6" />
              <p className="text-xs font-semibold text-white font-Grotesk tracking-wide uppercase lg:text-md">
                {t("contact.open_ideas")}
              </p>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 items-stretch gap-4">
          <Card className="flex flex-col gap-2 p-4 lg:gap-4 lg:p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-md font-semibold text-secondary font-Mono uppercase xl:text-lg">
                {t(email.title)}
              </h4>
              <Mail className="size-6 text-secondary" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-2 pb-4 xl:pb-6">
              <p className="text-sm font-semibold text-muted font-Mono lg:text-md">
                {t(email.label)}
              </p>
              <p className="text-md font-bold text-text font-Grotesk">
                {email.value}
              </p>
            </div>
            <div className="flex items-center justify-around gap-2">
              <Card
                shadow="soft"
                padding="sm"
                variant="surface"
                className="flex items-center justify-center w-full gap-2 text-xs font-bold text-text uppercase"
              >
                <Copy className="size-4 " strokeWidth={3} />
                {copied ? t("contact.email.copied") : t("contact.email.copy")}
              </Card>

              <Button
                onClick={handleCopyEmail}
                shadow="soft"
                size="sm"
                aria-label="Kirim email"
              >
                <SendHorizonal className="size-4" />
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-4 xl:gap-4 xl:p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-md font-semibold text-tertiary font-Mono uppercase xl:text-lg">
                {t(whatsapp.title)}
              </h4>
              <MessageSquareText className="size-6 text-tertiary" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-2 pb-4 xl:pb-6">
              <p className="text-sm font-semibold text-muted font-Mono lg:text-md">
                {t(whatsapp.label)} 
              </p>
              <p className="text-md font-bold text-text font-Grotesk">
                {whatsapp.value}
              </p>
            </div>
            <div>
              <Button
                onClick={handleWhatsApp}
                shadow="soft"
                variant="tertiary"
                size="sm"
                className="flex items-center justify-center w-full gap-2 text-sm uppercase"
              >
                <MessagesSquare className="size-4" strokeWidth={3}/>
                {t(whatsapp.action)}
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-4 xl:gap-4 xl:p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-md font-semibold text-secondary font-Mono uppercase xl:text-lg">
                {t(location.title)}
              </h4>
              <MapPinned className="size-6 text-secondary" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-2 pb-4 xl:pb-6">
              <p className="text-sm font-semibold text-muted font-Mono lg:text-md">
                {t(location.label)}
              </p>
              <p className="text-md font-bold text-text font-Grotesk ">
                {location.value}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 h-full">
              <span className="bg-secondary rounded-full p-1"></span>
              <p className="text-sm font-bold text-secondary font-Mono tracking-wide">
                {t(location.timezone)}
              </p>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-4 lg:gap-4 xl:p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-md font-semibold text-tertiary font-Mono uppercase xl:text-lg">
                {t(internship.title)}
              </h4>
              <CalendarCheck className="size-6 text-tertiary" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-2 pb-4 xl:pb-6">
              <p className="text-sm font-semibold text-muted font-Mono">
                {t(internship.label)} 
              </p>
              <p className="text-md font-bold text-text font-Grotesk">
                {t(internship.value)}
              </p>
            </div>
            <div>
              <Card
                variant="tertiary"
                padding="sm"
                shadow="soft"
                className="flex items-center justify-center text-xs font-bold text-white font-Mono uppercase"
              >
                {t(internship.status)}
              </Card>
            </div>
          </Card>
        </div>
        <Card 
        className="flex flex-col items-center justify-between  gap-4 xl:flex-row">
          <div className="flex items-center justify-around gap-4">
            <Card shadow="soft" padding="none" variant="secondary" className="p-3">
              <Share2 className="size-4 " strokeWidth={3} />
            </Card>
            <div className="flex flex-col">
              <h5 className="text-sm font-bold text-text font-Mono tracking-normal xl:tracking-wider uppercase xl:text-md">
                {t("contact.social.title")}
              </h5>
              <p className="text-xs font-semibold text-muted font-Grotesk tracking-normal xl:tracking-wider xl:text-md">
                {t("contact.social.description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {socials.social.map((item) => {
              const Icon = item.icon;

              return (
                <Button
                  key={item.id}
                  size="none"
                  variant="surface"
                  className="group text-xs font-semibold text-text flex items-center tracking-tighter justify-center px-2.5 py-3 gap-2 shadow-brutal-sm xl:shadow-brutal-md xl:px-3 xl:text-sm hover:text-white"
                  onClick={() =>
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }
                >
                  {item.name}
                  <Icon className="size-4 lg:size-6 group-hover:text-white" aria-hidden="true" />
                </Button>
              );
            })}
          </div>
        </Card>
      </Card>
    </section>
  );
}
