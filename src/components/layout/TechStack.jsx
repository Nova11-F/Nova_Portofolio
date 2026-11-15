import techStack from "../../data/techStack";
import Card from "../ui/Card";

function Ribbon({ className = "", reverse = false }) {
  return (
    <Card
      shadow="soft"
      variant="accent"
      className={`absolute left-[-10%] w-[120%]  h-16 xl:h-20 flex items-center overflow-hidden ${className}`}
    >
      <div
        className={`flex w-max items-center gap-5 ${reverse ? "marquee-reverse" : "marquee"}`}
      >
        <div className="flex xl:w-screen shrink-0 items-center justify-around gap-5">
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex shrink-0 items-center gap-2 lg:gap-4"
              >
                <Icon
                  className="size-4 xl:size-6"
                  style={{ color: tech.color }}
                />
                <span className="text-xs xl:text-md font-Mono font-semibold">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex w-max xl:w-screen shrink-0 items-center justify-around gap-5">
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex shrink-0 items-center gap-2 lg:gap-4"
              >
                <Icon
                  className="size-4 xl:size-6"
                  style={{ color: tech.color }}
                />
                <span className="text-xs xl:text-md font-Mono font-semibold">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default function TechStack() {
  return (
    <div className="relative w-full h-16 xl:h-20 overflow-hidden pointer-events-none">
      <Ribbon
        className="
          top-1/2 -translate-y-1/2
          border-6 border-border
        "
      />
    </div>
  );
}
