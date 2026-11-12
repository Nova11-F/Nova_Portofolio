import techStack from "../../data/techStack";
import Card from "../ui/Card";

function Ribbon({ className = "", reverse = false }) {
  return (
    <Card
      shadow="soft"
      variant="accent"
      className={`absolute left-[-10%] w-[120%]  h-20 xl:h-28 flex items-center overflow-hidden ${className}`}
    >
      <div
        className={`flex w-max items-center gap-5 ${reverse ? "marquee-reverse" : "marquee"}`}
      >
        <div className="flex w-screen shrink-0 items-center justify-around gap-5">
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex shrink-0 items-center gap-2 lg:gap-4"
              >
                <Icon
                  className="size-5 xl:size-8"
                  style={{ color: tech.color }}
                />
                <span className="text-sm xl:text-xl font-Mono font-semibold">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex w-screen shrink-0 items-center justify-around gap-5">
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="flex shrink-0 items-center gap-2 lg:gap-4"
              >
                <Icon
                  className="size-5 xl:size-8"
                  style={{ color: tech.color }}
                />
                <span className="text-sm xl:text-xl font-Mono font-semibold">
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
    <div className="relative w-full h-20 xl:h-28 overflow-hidden pointer-events-none">
      <Ribbon
        className="
          top-1/2 -translate-y-1/2
          border-6 border-border
        "
      />
    </div>
  );
}
