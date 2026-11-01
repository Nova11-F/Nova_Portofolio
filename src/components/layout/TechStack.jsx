import  techStack  from '../../data/techStack'

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {techStack.map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2"
          >
            <Icon className="text-4xl" style={{ color: tech.color }} />
            <span className="text-sm font-semibold">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
