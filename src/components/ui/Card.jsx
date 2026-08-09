import { motion } from "framer-motion";

function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        rounded-[28px]
        border
        border-[#E5D6C5]
        bg-white/80
        p-6
        shadow-[0_10px_30px_rgba(139,107,74,0.10)]
        hover:shadow-[0_15px_35px_rgba(139,107,74,0.15)]
        transition-shadow
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

export default Card;