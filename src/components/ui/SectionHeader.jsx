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
        pb-4 md:pb-6
        border-b-4 border-border
        gap-2 lg:gap-4
        ${className}
      `}
    >
      <Card
        shadow="soft"
        padding="xs"
        variant="tertiary"
        className="px-4 lg:px-8 w-fit"
      >
        <p className="text-sm font-bold font-mono text-white uppercase lg:text-md">
          {number}
          <span className="hidden xl:inline">
            .{" "}
            {t(`sectionLabel.${label}`)}
          </span>
        </p>
      </Card>

      <h2 className="text-lg font-bold font-mono text-text xl:text-2xl">
        {t(`sectionHeader.${section}`)}
      </h2>
    </div>
  );
}
