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
        pb-3 md:pb-4
        border-b-4 border-border
        gap-2 lg:gap-4
        ${className}
      `}
    >
      <Card
        shadow="soft"
        padding="xs"
        variant="tertiary"
        className="px-2 md:px-3 lg:px-6 w-fit"
      >
        <p className="text-sm font-bold font-mono text-white uppercase lg:text-base">
          {number}
          <span className="hidden md:inline">
            .{" "}
            {t(`sectionLabel.${label}`)}
          </span>
        </p>
      </Card>

      <h2 className="text-sm font-bold font-mono text-text tracking-tight md:tracking-wide md:text-lg lg:text-xl">
        {t(`sectionHeader.${section}`)}
      </h2>
    </div>
  );
}
