export default function Card({
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    default: "bg-accent-soft text-text",
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-8 py-3",
    lg: "px-10 py-4",
  };

  return <div></div>;
}
