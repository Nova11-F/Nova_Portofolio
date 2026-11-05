export default function Card({
  children,
  variant = "default",
  padding = "md",
  shadow = "default",
  className = "",
  ...props
}) {
  const variants = {
    default: "bg-surface",
  };

  const paddings = {
    none : "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-4",
    lg: "p-8",
  };

  const shadowVariants = {
    none: "shadow-none",
    default: "shadow-brutal-md",
    soft: "shadow-brutal-sm",
    hard: "shadow-brutal-lg",
  };

  return (
    <div
      className={`border-3 border-border cursor-pointer transition-all duration-300 ${variants[variant]} ${paddings[padding]} ${shadowVariants[shadow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
