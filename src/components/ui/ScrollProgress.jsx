import { useEffect, useState } from "react";

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const total =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          const progress =
            total > 0
              ? (window.scrollY / total) * 100
              : 0;

          setWidth(progress);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        z-[100]
        h-1
        bg-[#8B6B4A]
      "
      style={{
        width: `${width}%`,
      }}
    />
  );
}

export default ScrollProgress;