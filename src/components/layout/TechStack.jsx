import techStack from "../../data/techStack";

function Ribbon({ className = "", reverse = false }) {
  return (
    <div
      className={`absolute left-[-10%] w-[120%] min-h-20 md:min-h-28 flex items-center overflow-hidden ${className}`}
    >
      <div
        className={`flex w-max ${reverse ? "marquee-reverse" : "marquee"}`}
      >
        <div className="flex w-screen shrink-0 items-center justify-around gap-5 px-5 md:gap-10 md:px-10">
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div key={tech.name} className="flex shrink-0 items-center gap-2">
                <Icon
                  className="text-xl md:text-4xl"
                  style={{ color: tech.color }}
                />
                <span className="text-sm md:text-lg font-semibold">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex w-screen shrink-0 items-center justify-around gap-5 px-5 md:gap-10 md:px-10">
          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div key={tech.name} className="flex shrink-0 items-center gap-2">
                <Icon
                  className="text-xl md:text-4xl"
                  style={{ color: tech.color }}
                />
                <span className="text-sm md:text-lg font-semibold">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden">
      <Ribbon className="bottom-24 bg-section text-text border-6 border-border" />
    </div>
  );
}
