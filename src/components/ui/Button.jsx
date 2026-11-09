export default function Button({
  children,
  variant = "default",
  size = "md",
  shadow = "default",
  className = "",
  ...props
}) {
  const variants = {
    default: "bg-secondary text-white",
    surface:"bg-surface"
  };

  const sizes = {
    none: "p-0",
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const shadowVariants = {
    none: "shadow-none",
    default: "shadow-brutal-md",
    soft: "shadow-brutal-sm",
    hard: "shadow-brutal-lg",
  };

  return (
    <button
      className={`border-3 border-border font-Mono font-bold text-lg cursor-pointer hover:translate-[2px] hover:shadow-brutal-none  transition duration-300 ${variants[variant]} ${sizes[size]} ${shadowVariants[shadow]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
