import Card from "./Card";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card padding="xs" className="relative flex items-center shadow-brutal-sm">
      <div
        className={`
          absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-secondary border-2 border-border transition-transform duration-300 ease-in-out
          ${theme === "dark" ? "translate-x-full" : "translate-x-0"}
        `}
      />

      {["light", "dark"].map((themeOption) => {
        const isActive = theme === themeOption;

        return (
          <button
            key={themeOption}
            type="button"
            onClick={() => {
              if (!isActive) toggleTheme();
            }}
            aria-label={`Switch to ${themeOption} mode`}
            aria-pressed={isActive}
            className={`
              relative z-10 px-2 py-2 xl:px-3 font-bold font-Mono text-bg cursor-pointer transition-colors duration-200
              ${isActive ? "" : "text-text"}
            `}
          >
            {themeOption === "dark" ? <FiMoon className="size-4 xl:size-6" /> : <FiSun className="size-4 xl:size-6" />}
          </button>
        );
      })}
    </Card>
  );
}
