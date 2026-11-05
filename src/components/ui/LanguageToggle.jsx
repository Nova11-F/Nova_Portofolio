import Card from "./Card";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  const labels = ["id", "en"];

  return (
    <Card padding="xs" className="relative flex items-center">
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
              relative z-10 px-3 py-1 text-md font-bold font-Mono text-bg cursor-pointer transition-colors duration-200 md:text-lg
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
