import { useLanguage } from "../../context/LanguageContext";

export default function AnnouncementBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-primary w-full flex flex-col justify-between items-center py-2 2xl:flex-row xl:py-3 px-4">
      <div className="flex items-center justify-center self-start gap-2 text-sm font-Mono text-text-list">
        <span className="bg-tertiary rounded-full p-1 xl:p-1.5"></span>
        <span className="font-bold uppercase text-[10px] xl:text-md">
          {t("announcementBar.title")}
        </span>
        <span className="font-bold uppercase text-[10px] xl:text-md">
          {t("announcementBar.message")}
        </span>
      </div>
      <div className="flex items-center justify-center self-end gap-2 text-sm font-Mono text-text-list">
        <span className="font-bold uppercase text-[10px] xl:text-md">
          {t("announcementBar.status")}
        </span>
        <span className="bg-tertiary rounded-full p-1 xl:p-1.5"></span>
        <span className="font-bold uppercase text-[10px] xl:text-md">
          {t("announcementBar.location")}
        </span>
      </div>
    </div>
  );
}
