import { motion } from "framer-motion";

export default function GradientBlob({
  className = "",
  animate,
  duration = 25,
}) {
  return (
    <motion.div
      className={`
        absolute
        rounded-full
        pointer-events-none
        ${className}
      `}
      style={{
        background:
          "radial-gradient(circle, rgba(176,137,104,0.55) 0%, rgba(214,184,150,0.30) 45%, transparent 75%)",
        filter: "blur(25px)",
        willChange: "transform",
      }}
      animate={animate}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
}