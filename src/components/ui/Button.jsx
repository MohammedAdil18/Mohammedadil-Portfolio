function Button({
  children,
  href,
  variant = "primary",
  download = false,
  type = "button",
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-[15px] font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[#8B6B4A] text-white shadow-[0_12px_30px_rgba(176,137,104,.25)] hover:-translate-y-1 hover:bg-[#7A5D40] hover:shadow-[0_18px_40px_rgba(176,137,104,.35)]",

    outline:
      "border border-[#DCCAB7] bg-white/60 backdrop-blur-xl text-[#6D4C41] hover:-translate-y-1 hover:bg-[#8B6B4A] hover:text-white hover:border-[#8B6B4A] hover:shadow-[0_12px_30px_rgba(176,137,104,.25)]",
  };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`${baseClasses} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;