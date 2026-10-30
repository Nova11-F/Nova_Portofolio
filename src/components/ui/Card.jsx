export default function Card({
  children,
  variant = "default",
  padding = "md",
  rounded = "md",
  className = "",
  ...props
}) {
  const variants = {
    default: "bg-accent-soft text-text",
  };

  const paddings = {
    sm: "p-2",
    md: "p-4",
    lg: "p-8",
  };

  const roundeds ={
    sm : "rounded-md",
    md : "rounded-lg",
    lg : "rounded-xl"
  };

  return (
    <div
      className={`cursor-pointer transition-all duration-300 ${variants[variant]} ${paddings[padding]} ${roundeds[rounded]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
