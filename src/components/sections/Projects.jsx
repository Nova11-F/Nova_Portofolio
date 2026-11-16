import Card from "../ui/Card";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";
import { FolderOpen, ArrowRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";

export default function Project() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="flex flex-col mx-auto max-w-5xl gap-4 xl:gap-6 px-4 xl:px-10 md:max-w-full bg-bg py-6 xl:py-10 scroll-mt-[80px] xl:scroll-mt-[90px]"
    >
      <SectionHeader number="02" section="project" label="project" />
      <div className="flex flex-col gap-4">
        <div>
          <Button></Button>
        </div>
        <div className="grid grid-cols-1 gap-4 items-stretch xl:grid-cols-3">
          <Card 
          padding="none"
          className="flex flex-col gap-2">
            <div className="relative h-40">
              <Card 
              padding="none"
              shadow="soft"
              className="absolute top-1 left-2 text-[10px] font-bold font-Mono uppercase px-4 py-2 xl:text-sm">sjkndjkasn</Card>
              <Card 
              variant="secondary"
              shadow="soft"
              className="absolute top-1 right-2 text-[10px] font-bold font-Mono uppercase px-4 py-2 xl:text-sm">sjdbas</Card>
              <img></img>
            </div>
            <div className="flex flex-col gap-4 pb-4 border-b-3 border-border px-4 xl:px-6"> 
            <div >
              <h3 className="text-md font-bold text-text font-Grotesk xl:text-lg">sjdnaskdn</h3>
              <p className="text-xs font-medium text-muted font-Grotesk wrap-break-word xl:text-sm">skdmaskljsabdksabdksakhdksadkashkldsalksajkdsandkjsandnsajkndkjsandjknsandsandnasdnsandlsad</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
            </div>
            <div>
              <div className="flex items-center justify-between px-4 pb-2 xl:pb-4">
                <div></div>
                <Button 
                size="none"
                shadow="soft"
                variant="surface"
                className="group flex items-center justify-center gap-2 px-4 py-2 xl:py-3">
                  <BsGithub className="size-4"/>
                  <p className="text-[10px] group-hover:text-white xl:text-xs">Github Repo</p>
                </Button>
              </div>
            </div>
          </Card>
          <Card></Card>
          <Card></Card>
        </div>
        <Card
          shadow="soft"
          padding="none"
          className="flex flex-col items-center justify-between px-2 py-4 gap-2 xl:flex-row"
        >
          <div className="flex items-center justify-start gap-4">
            <Card
              padding="none"
              shadow="soft"
              className="px-3 py-2 xl:px-4 xl:py-2"
            >
              <FolderOpen className="size-4 text-yellow-900 fill-amber-500 xl:size-6" />
            </Card>
            <div className="flex flex-col gap-0.5 xl:gap-1">
              <h4 className="text-sm xl:text-md font-bold text-text font-Mono xl:tracking-wide">
                Ingin melihat 12+ eksperimen kampus lainnya?
              </h4>
              <p className="text-[10px] xl:text-xs font-medium text-muted font-Grotesk">
                Mulai dari compiler mini, visualizer algoritma pathfinding,
                hingga eksplorasi desain mobile.
              </p>
            </div>
          </div>
          <Button
            shadow="soft"
            size="none"
            className="flex items-center justify-center text-[10px] w-full py-1.5 gap-2 xl:w-fit xl:text-sm xl:px-4 xl:py-1.5"
          >
            KUNJUNGI PROFIL GITHUB
            <ArrowRight className="size-4 xl:size-5" />
          </Button>
        </Card>
      </div>
    </section>
  );
}
