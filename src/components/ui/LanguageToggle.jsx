import Card from "./Card";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  const labels = ["id", "en"];

  return (
    <Card padding="xs" className="relative flex items-center shadow-brutal-sm xl:shadow-brutal-md">
    <div
        className={`
          absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-secondary border-2 border-border transition-transform duration-300 ease-in-out
          ${lang === 'en' ? 'translate-x-full' : 'translate-x-0'}
        `}
      />

      {labels.map((language) => {
        const isActive = lang === language;

        return (
            <button
              key={language}
              type="button"
              onClick={() => {
                if (!isActive) toggleLang();
              }}
              aria-label={`Change language to ${language.toUpperCase()}`}
              aria-pressed={isActive}
              className={`
              relative z-10 px-2 py-1.5 xl:px-3 xl:py-2.5 text-sm font-bold font-Mono text-bg cursor-pointer transition-colors duration-200 xl:text-md
              ${isActive ? "" : "text-text"}
            `}
            >
              {language.toUpperCase()}
            </button>
        );
      })}
    </Card>
  );
}
