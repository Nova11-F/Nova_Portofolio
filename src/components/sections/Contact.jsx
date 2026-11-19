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
import Reveal from "../Reveal";

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
      className="flex flex-col mx-auto max-w-5xl gap-4 lg:gap-6 px-4 lg:p-10 md:max-w-full bg-bg py-6 scroll-mt-[70px] lg:scroll-mt-[80px]"
    >
      <Reveal variant="slide-right">
      <SectionHeader number="06" section="contact" label="contact" />
      </Reveal>
      <Reveal>
      <Card className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-8">
        <Reveal variant="slide-right" delay={0.2}>
        <div className="flex items-center justify-between border-b-4 border-border pb-3">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-tertiary rounded-full p-1"></span>
            <p className="text-base font-bold text-text font-mono lg:text-lg">
              {t("contact.username")}
            </p>
          </div>
          <Card
          padding="none"
            variant="tertiary"
            shadow="soft"
            className="text-[10px] font-bold text-white font-Mono uppercase px-2 py-1.5 lg:px-3 lg:text-xs"
          >
            {t("contact.available")}
          </Card>
        </div>
        </Reveal>
        <div className="flex items-center justify-between">
          <div className="relative flex flex-col gap-4 xl:gap-6">
            <Reveal variant="slide-right" delay={0.2}>
            <Card
            padding="none"
              variant="secondary"
              shadow="soft"
              className="flex items-center justify-center gap-2 w-fit px-4 py-1.5 xl:py-2"
            >
              <Handshake className="size-4 " />
              <p className="text-[10px] font-semibold text-white font-Grotesk tracking-wide uppercase lg:text-xs">
                {t("contact.title")}
              </p>
            </Card>
            </Reveal>
            <Reveal variant="slide-right" delay={0.3}>
            <h3 className="text-2xl font-bold text-text font-Mono uppercase leading-normal mb-4 lg:text-4xl">
              {t("contact.headline_start")}{" "}
              <span className="text-white bg-secondary border-br-3 border-border shadow-brutal-md px-1 md:px-3">
                {t("contact.headline_idea")}
              </span>{" "}
              {t("contact.headline_mid")}{" "}
              <span className="text-white bg-secondary-rev border-br-3 border-border shadow-brutal-md px-1 md:px-3">
                {t("contact.headline_end")}
              </span>
            </h3>
            <p className="text-[10px] font-semibold text-muted font-Grotesk tracking-wider md:max-w-6xl md:text-xs lg:text-sm">
              {t("contact.description")}
            </p>
            </Reveal>
            <Reveal variant="slide-right" delay={0.2}>
            <Card
              variant="secondary_rev"
              shadow="soft"
              className="flex items-center justify-center gap-2 w-fit px-4 py-1.5 xl:py-2"
            >
              <Lightbulb className="size-4 text-white" />
              <p className="text-[10px] font-semibold text-white font-Grotesk tracking-wide uppercase lg:text-xs">
                {t("contact.open_ideas")}
              </p>
            </Card>
            </Reveal>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-stretch gap-4">
          <Reveal delay={0} duration={0.5}>
          <Card className="flex flex-col gap-2 h-full p-4 lg:gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-secondary font-Mono uppercase lg:text-lg">
                {t(email.title)}
              </h4>
              <Mail className="size-6 text-secondary" />
            </div>
            <div className="flex flex-col gap-1 border-b-4 border-border pt-2 pb-4">
              <p className="text-xs font-semibold text-muted font-Mono lg:text-sm">
                {t(email.label)}
              </p>
              <p className="text-sm font-bold text-text font-Grotesk lg:text-base">
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
          </Reveal>
          <Reveal delay={0.15} duration={0.5}>
          <Card className="flex flex-col gap-2 h-full p-4 lg:gap-4 xl:p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-tertiary font-Mono uppercase lg:text-lg">
                {t(whatsapp.title)}
              </h4>
              <MessageSquareText className="size-6 text-tertiary" />
            </div>
            <div className="flex flex-col gap-1 border-b-4 border-border pt-2 pb-4">
              <p className="text-xs font-semibold text-muted font-Mono lg:text-sm">
                {t(whatsapp.label)} 
              </p>
              <p className="text-sm font-bold text-text font-Grotesk lg:text-base">
                {whatsapp.value}
              </p>
            </div>
            <div>
              <Button
                onClick={handleWhatsApp}
                shadow="soft"
                variant="tertiary"
                size="sm"
                className="flex items-center justify-center w-full gap-2 text-xs uppercase"
              >
                <MessagesSquare className="size-4" strokeWidth={3}/>
                {t(whatsapp.action)}
              </Button>
            </div>
          </Card>
          </Reveal>
          <Reveal delay={0.30} duration={0.5}>
          <Card className="flex flex-col gap-2 h-full p-4 lg:gap-4 xl:p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-secondary font-Mono uppercase lg:text-lg">
                {t(location.title)}
              </h4>
              <MapPinned className="size-6 text-secondary" />
            </div>
            <div className="flex flex-col gap-1 border-b-4 border-border pt-2 pb-4">
              <p className="text-xs font-semibold text-muted font-Mono lg:text-sm">
                {t(location.label)}
              </p>
              <p className="text-sm font-bold text-text font-Grotesk lg:text-base">
                {location.value}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 h-full">
              <span className="bg-secondary rounded-full p-1"></span>
              <p className="text-sm font-bold text-secondary font-Mono tracking-wide lg:text-base">
                {t(location.timezone)}
              </p>
            </div>
          </Card>
          </Reveal>
          <Reveal delay={0.45} duration={0.5}>
          <Card className="flex flex-col gap-2 h-full p-4 lg:gap-4 xl:p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-tertiary font-Mono uppercase lg:text-lg">
                {t(internship.title)}
              </h4>
              <CalendarCheck className="size-6 text-tertiary" />
            </div>
            <div className="flex flex-col gap-1 border-b-4 border-border pt-2 pb-4">
              <p className="text-xs font-semibold text-muted font-Mono lg:text-sm">
                {t(internship.label)} 
              </p>
              <p className="text-sm font-bold text-text font-Grotesk lg:text-base">
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
          </Reveal>
        </div>
        <Reveal variant="slide-right" delay={0.2}>
        <Card 
        className="flex flex-col items-center justify-between  gap-4 md:flex-row">
          <div className="flex items-center justify-around gap-4">
            <Card shadow="soft" padding="none" variant="secondary" className="p-3">
              <Share2 className="size-4 " strokeWidth={3} />
            </Card>
            <div className="flex flex-col md:gap-1">
              <h5 className="text-xs font-bold text-text font-Mono tracking-normal lg:tracking-wider uppercase lg:text-sm">
                {t("contact.social.title")}
              </h5>
              <p className="text-[10px] font-semibold text-muted font-Grotesk tracking-normal lg:tracking-wider lg:text-xs">
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
                  className="group text-[10px] font-semibold text-text flex items-center tracking-tighter justify-center px-1 py-3 gap-1 shadow-brutal-sm xl:shadow-brutal-md md:px-3 lg:text-xs hover:text-white"
                  onClick={() =>
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }
                >
                  {item.name}
                  <Icon className="size-4 group-hover:text-white" aria-hidden="true" />
                </Button>
              );
            })}
          </div>
        </Card>
        </Reveal>
      </Card>
      </Reveal>
    </section>
  );
}
