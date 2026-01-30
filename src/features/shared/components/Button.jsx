
export default function Button({
  isSubmitting = false,
  type = "submit",
  onClick,
  children,
  variant = "primary",
  size = "none",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-2xl transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    full: "w-full text-lg px-4 py-1",
    none:"w-full"
  };
  const variants = {
    primary:
      "bg-sky-800 text-white hover:text-indigo-800 border hover:bg-white hover:border hover:border-indigo-800 shadow-sm",
    info: "bg-white text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white hover:border hover:border-gray-800 shadow-sm",
    ghost: "bg-transparent text-indigo-800 hover:bg-indigo-50",
    success:
      "bg-green-800 text-white border hover:text-green-800 hover:bg-white hover:border hover:border-green-800 shadow-sm",
    danger:
      "bg-red-800 text-white border hover:text-red-800 hover:bg-white hover:border hover:border-red-800",
  };
  return (
    <button
      style={{maxWidth:500}}
      type={type}
      disabled={isSubmitting}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}
