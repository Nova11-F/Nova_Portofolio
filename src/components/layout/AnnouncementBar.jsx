import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../Reveal";

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <Reveal
  variant="slide-down"
  delay={0.2}
  duration={0.6}
>
    <div className="bg-primary w-full flex flex-col justify-between items-center py-2 md:flex-row md:py-3 px-2 lg:px-4">
      <div className="flex items-center justify-center self-start gap-1 lg:gap-2 text-sm font-Mono text-text-list">
        <span className="bg-tertiary rounded-full p-0.5 md:p-1"></span>
        <span className="font-bold uppercase text-[8px] md:text-[10px] xl:text-base">
          {t("announcementBar.title")}
        </span>
        <span className="font-bold uppercase text-[8px] md:text-[10px] xl:text-base">
          {t("announcementBar.message")}
        </span>
      </div>
      <div className="flex items-center justify-center self-end gap-1 lg:gap-2 text-sm font-Mono text-text-list">
        <span className="font-bold uppercase text-[8px] md:text-[10px] xl:text-base">
          {t("announcementBar.status")}
        </span>
        <span className="bg-tertiary rounded-full p-0.5 md:p-1"></span>
        <span className="font-bold uppercase text-[8px] md:text-[10px] xl:text-base">
          {t("announcementBar.location")}
        </span>
      </div>
    </div>
    </Reveal>
  );
}
