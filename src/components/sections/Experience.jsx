import Card from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";
import SectionHeader from "../ui/SectionHeader";

const expItems = [
  { id: "Work", label: "Experience Work" },
  { id: "Education", label: "Education" },
  { id: "organization", label: "organization" },
  { id: "achievement", label: "achievement" },
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="flex flex-col mx-auto max-w-5xl px-10 md:px-20 md:max-w-full bg-bg py-10 md:py-20"
    >
      <SectionHeader number="04" section="experience" label="experience" />
      <div>
        <Card></Card>
      </div>
    </section>
  );
}
