import { useLanguage } from "../../context/LanguageContext"

export default function Footer(){
    const { t } = useLanguage();

    return(
        <footer className="flex flex-col items-center justify-center bg-surface border-t-4 border-border p-2 xl:p-4 gap-2">
            <h4 className="text-sm font-bold text-text font-Mono md:text-base">
                {t("footer.title")}
            </h4>
            <p className="text-xs font-medium text-muted font-Grotesk text-center lg:text-sm">
                {t("footer.desc")}
            </p>
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <p className="text-[10px] font-semibold text-text font-Grotesk uppercase md:text-xs">
                {t("footer.info_univ")}
            </p>
            <span className="hidden bg-secondary rounded-full p-1 md:block"></span> 
            <p className="text-[10px] font-semibold text-text font-Grotesk uppercase md:text-xs">
                {t("footer.info_prodi")}
            </p>
            </div>
        </footer>
    )
} 