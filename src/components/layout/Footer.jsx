import { useLanguage } from "../../context/LanguageContext"

export default function Footer(){
    const { t } = useLanguage();

    return(
        <footer className="flex flex-col items-center justify-center bg-surface border-t-4 border-border p-4 md:p-8 gap-2 md:gap-4">
            <h4 className="text-xl font-bold text-text font-Mono md:text-2xl">
                {t("footer.title")}
            </h4>
            <p className="text-md font-medium text-muted font-Grotesk text-center md:text-lg">
                {t("footer.desc")}
            </p>
            <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-semibold text-text font-Grotesk uppercase md:text-md">
                {t("footer.info_univ")}
            </p>
            <span className="bg-secondary rounded-full p-1.5"></span> 
            <p className="text-sm font-semibold text-text font-Grotesk uppercase md:text-md">
                {t("footer.info_prodi")}
            </p>
            </div>
        </footer>
    )
} 