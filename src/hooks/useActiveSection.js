import { useEffect, useState } from "react";

const sections = [
  "hero",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}

export default useActiveSection;