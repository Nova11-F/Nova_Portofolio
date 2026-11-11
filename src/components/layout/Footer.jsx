import { useLanguage } from "../../context/LanguageContext"

export default function Footer(){
    const { t } = useLanguage();

    return(
        <footer className="flex flex-col items-center justify-center bg-surface border-t-4 border-border p-8 gap-2 md:gap-4">
            <h4 className="text-2xl font-bold text-text font-Mono">Firman Nova - 2026</h4>
            <p className="text-lg font-medium text-muted font-Grotesk text-center">Didesain dengan metodologi Neobrutalisme & dioptimalkan untuk mobile web standards. Dibuat dengan HTML5, Tailwind CSS, & Vanilla JS.</p>
            <div className="flex items-center justify-center gap-2">
            <p className="text-md font-semibold text-text font-Grotesk uppercase">Universitas Negeri Surabaya </p>
            <span className="bg-secondary rounded-full p-1.5"></span> 
            <p className="text-md font-semibold text-text font-Grotesk uppercase">Program Studi Teknik Informatika</p>
            </div>
        </footer>
    )
} 