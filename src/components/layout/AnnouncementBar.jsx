import { useLanguage } from "../../context/LanguageContext";

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-primary w-full flex justify-between items-center py-2 md:py-3 px-4 sticky top-[75px] md:top-[135px] z-100">
      <div className="flex items-center justify-center gap-4 text-sm font-Mono text-text-list">
        <span className="bg-tertiary rounded-full px-1.5 py-1.5"></span>
        <span className="font-bold uppercase text-lg">
          {t("announcementBar.title")}
        </span>
        <span className="font-bold uppercase text-lg">
          {t("announcementBar.message")}
        </span>
      </div>
      <div className="flex items-center justify-center gap-4 text-sm font-Mono text-text-list">
        <span className="font-bold uppercase text-lg">
          {t("announcementBar.status")}
        </span>
        <span className="bg-tertiary rounded-full px-1.5 py-1.5"></span>
        <span className="font-bold uppercase text-lg">
          {t("announcementBar.location")}
        </span>
      </div>
    </div>
  );
}
