import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import useActiveSection from "../../hooks/useActiveSection";

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-7xl rounded-b-[30px] border-x border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/75 backdrop-blur-2xl border-[#E5D6C5] shadow-[0_12px_35px_rgba(176,137,104,.18)]"
            : "bg-white/55 backdrop-blur-xl border-white/40"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-5">
          {/* Logo */}
          <a
            href="#hero"
            className="text-[30px] font-black tracking-tight text-[#5B3A29]"
          >
            Mohammed Adil
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`rounded-full px-5 py-2.5 text-[15px] font-medium transition-all duration-300 ${
                  active === item.id
                    ? "bg-[#8B6B4A] text-white shadow-md"
                    : "text-[#6D5A49] hover:bg-[#F4ECE1] hover:text-[#5B3A29]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#5B3A29] md:hidden"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden md:hidden"
        >
          <div className="border-t border-[#E5D6C5] bg-white/90 px-6 py-4 backdrop-blur-xl">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`mb-2 block rounded-xl px-4 py-3 transition-all ${
                  active === item.id
                    ? "bg-[#8B6B4A] text-white"
                    : "text-[#6D5A49] hover:bg-[#F4ECE1]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
}

export default Navbar;