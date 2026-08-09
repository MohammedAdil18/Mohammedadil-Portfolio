import { motion } from "framer-motion";

export default function FloatingGrid() {
  return (
    <motion.div
      className="
        absolute
        inset-0
        opacity-30
        pointer-events-none
      "
      animate={{
        x: [0, 40, 0],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 45,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `
          linear-gradient(rgba(120,90,60,.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(120,90,60,.06) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
        maskImage:
          "radial-gradient(circle at center, black 35%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 35%, transparent 85%)",
        willChange: "transform",
      }}
    />
  );
}