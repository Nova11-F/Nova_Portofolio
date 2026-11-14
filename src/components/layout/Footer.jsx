import { useLanguage } from "../../context/LanguageContext"

export default function Footer(){
    const { t } = useLanguage();

    return(
        <footer className="flex flex-col items-center justify-center bg-surface border-t-4 border-border p-2 xl:p-4 gap-2">
            <h4 className="text-md font-bold text-text font-Mono xl:text-lg">
                {t("footer.title")}
            </h4>
            <p className="text-xs font-medium text-muted font-Grotesk text-center xl:text-md">
                {t("footer.desc")}
            </p>
            <div className="flex flex-col items-center justify-center gap-2 xl:flex-row">
            <p className="text-xs font-semibold text-text font-Grotesk uppercase xl:text-sm">
                {t("footer.info_univ")}
            </p>
            <span className="hidden bg-secondary rounded-full p-1 xl:block"></span> 
            <p className="text-xs font-semibold text-text font-Grotesk uppercase xl:text-sm">
                {t("footer.info_prodi")}
            </p>
            </div>
        </footer>
    )
} 