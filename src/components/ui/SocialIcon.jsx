function SocialIcon({
  href,
  children,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-white
        border
        border-[#DCCAB7]
        text-[#8B6B4A]
        shadow-md
        transition-all
        duration-300
        hover:bg-[#8B6B4A]
        hover:text-white
        hover:border-[#8B6B4A]
        hover:-translate-y-1
      "
    >
      {children}
    </a>
  );
}

export default SocialIcon;