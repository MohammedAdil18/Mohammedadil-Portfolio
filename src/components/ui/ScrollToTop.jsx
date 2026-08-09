import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#8B6B4A]
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:bg-[#6D4C41]
        hover:-translate-y-1
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-10"
        }
      `}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;