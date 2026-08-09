function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        px-4
        py-2
        text-sm
        font-medium
        bg-[#8B6B4A]
        text-white
        border
        border-[#8B6B4A]
        shadow-md
        transition-all
        duration-300
        hover:bg-[#74563A]
        hover:border-[#74563A]
        hover:-translate-y-1
        hover:shadow-[0_10px_25px_rgba(139,107,74,.35)]
      "
    >
      {children}
    </span>
  );
}

export default Badge;