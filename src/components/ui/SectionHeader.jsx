import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";

export default function SectionHeader({
  section,
  number,
  label,
  className = "",
}) {
  const { t } = useLanguage();

  return (
    <div
      className={`
        flex items-center justify-start
        pb-4 md:pb-8
        border-b-4 border-border
        gap-4 md:gap-6
        ${className}
      `}
    >
      <Card
        padding="xs"
        variant="tertiary"
        className="px-4 md:px-8"
      >
        <p className="text-sm font-bold font-mono text-white uppercase md:text-xl">
          {number}. {t(`sectionLabel.${label}`)}
        </p>
      </Card>

      <h2 className="text-2xl font-bold font-mono text-text md:text-4xl">
        {t(`sectionHeader.${section}`)}
      </h2>
    </div>
  );
}