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

  return (
    <section
      id="contact"
      className="flex flex-col mx-auto max-w-5xl gap-4 md:gap-8 px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20"
    >
      <SectionHeader number="05" section="contact" label="contact" />
      <Card className="flex flex-col gap-4 md:gap-8 p-6 md:p-10">
        <div className="flex items-center justify-between border-b-4 border-border pb-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <span className="bg-tertiary rounded-full p-1.5 md:p-2"></span>
            <p className="text-2xl font-bold text-text font-mono">Nova-11F</p>
          </div>
          <Card
            variant="tertiary"
            shadow="soft"
            className="text-lg font-bold text-white font-Mono uppercase px-4 py-1.5"
          >
            Tersedia 2027 / 2028
          </Card>
        </div>
        <div className="flex items-center justify-between max-w-6xl">
          <div className="relative flex flex-col gap-4 md:gap-8">
            <Card
              variant="secondary"
              shadow="soft"
              className="flex items-center justify-center gap-4 max-w-xs px-6 py-2"
            >
              <Handshake className="size-5 md:size-6" />
              <p className="text-md font-semibold text-white font-Grotesk tracking-wide uppercase">
                Open to Collaboration
              </p>
            </Card>
            <h3 className="text-3xl font-bold text-text font-Mono uppercase md:text-4xl">
              Let's Turn{" "}
              <span className="text-white bg-secondary border-br-3 border-border shadow-brutal-md px-2 md:px-4">
                YOUR IDEAS
              </span>{" "}
              INTO{" "}
              <span className="text-white bg-secondary-rev border-br-3 border-border shadow-brutal-md px-2 md:px-4">
                Something Great.
              </span>
            </h3>
            <p className="text-md font-semibold text-muted font-Grotesk tracking-wider">
              I'm always open to new ideas, exciting projects, and meaningful
              collaborations. Feel free to reach out, and let's create something
              impactful together.
            </p>
            <Card
              variant="tertiary"
              shadow="soft"
              className="flex items-center justify-center gap-4 max-w-sm px-6 py-2"
            >
              <Lightbulb className="size-5 text-white md:size-6" />
              <p className="text-md font-semibold text-white font-Grotesk tracking-wide uppercase">
                OPEN TO NEW IDEAS & PROJECTS
              </p>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-4 items-stretch gap-4">
          
          <Card className="flex flex-col gap-4 p-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-secondary font-Mono uppercase">
                Email
              </h4>
              <Mail className="size-6 text-secondary md:size-8" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-4 pb-8">
              <p className="text-md font-semibold text-muted font-Mono">
                Kirim Email Langsung
              </p>
              <p className="text-xl font-bold text-text font-Grotesk">
                firmannovaprayoga@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-around gap-4">
              <Card
                shadow="soft"
                padding="sm"
                className="flex items-center justify-center w-full gap-4 font-bold uppercase"
              >
                <Copy className="size-4 md:size-6" />
                Salin Email
              </Card>
              <Button shadow="soft" size="sm">
                <SendHorizonal className="size-4 md:size-6" />
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col gap-4 p-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-tertiary font-Mono uppercase">
                Whatsapp / Chat
              </h4>
              <MessageSquareText className="size-6 text-tertiary md:size-8" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-4 pb-8">
              <p className="text-md font-semibold text-muted font-Mono">
                Direct Chat & Call :
              </p>
              <p className="text-xl font-bold text-text font-Grotesk">
                +62 813-1491-5322
              </p>
            </div>
            <div>
              <Button
                shadow="soft"
                variant="tertiary"
                size="sm"
                className="flex items-center justify-center w-full gap-4 uppercase"
              >
                <MessagesSquare className="size-4 md:size-6" />
                Chat WhatsApp
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col gap-4 p-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-secondary font-Mono uppercase">
                Location
              </h4>
              <MapPinned className="size-6 text-secondary md:size-8" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-4 pb-8">
              <p className="text-md font-semibold text-muted font-Mono">
                Basis Aktivitas
              </p>
              <p className="text-xl font-bold text-text font-Grotesk">
                Jakarta & Surabaya, ID
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 h-full">
              <span className="bg-secondary rounded-full p-1.5"></span>
              <p className="text-lg font-bold text-secondary font-Mono tracking-wide">
                Zona Waktu : WIB (UTC+7)
              </p>
            </div>
          </Card>
          <Card className="flex flex-col gap-4 p-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold text-tertiary font-Mono uppercase">
                Status magang
              </h4>
              <CalendarCheck className="size-6 text-tertiary md:size-8" />
            </div>
            <div className="flex flex-col gap-2 border-b-4 border-border pt-4 pb-8">
              <p className="text-md font-semibold text-muted font-Mono">
                Ketersediaan Magang :
              </p>
              <p className="text-xl font-bold text-text font-Grotesk">
                Januari 2027 - Agustus 2027
              </p>
            </div>
            <div>
              <Card
                variant="tertiary"
                padding="sm"
                shadow="soft"
                className="flex items-center justify-center font-bold text-white font-Mono uppercase"
              >
                Siap Kerja On-Site
              </Card>
            </div>
          </Card>
        </div>
        <Card className="flex items-center justify-between">
          <div className="flex items-center justify-around gap-2 md:gap-4">
            <Card shadow="soft" padding="md" variant="secondary">
              <Share2 className="size-4 md:size-6" strokeWidth={3} />
            </Card>
            <div className="flex flex-col gap-2">
              <h5 className="text-lg font-bold text-text font-Mono tracking-wider uppercase">
                JARINGAN & REPOSITORI PROFESIONAL
              </h5>
              <p className="text-md font-semibold text-muted font-Grotesk tracking-wider">
                Terhubung secara langsung di berbagai platform publik
              </p>
            </div>
          </div>
          <div className="flex items-center justify-around gap-2 md:gap-4">
            {socials.social.map((item) => {
              const Icon = item.icon;

              return (
                <Button
                  key={item.id}
                  variant="surface"
                  className="flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open(item.url, "_blank", "noopener,noreferrer")
                  }
                >
                  {item.name}
                  <Icon className="size-4 md:size-6" aria-hidden="true" />
                </Button>
              );
            })}
          </div>
        </Card>
      </Card>
    </section>
  );
}
