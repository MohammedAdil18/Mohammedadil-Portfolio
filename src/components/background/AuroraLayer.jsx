import { motion } from "framer-motion";
import GradientBlob from "./GradientBlob";

export default function AuroraLayer() {
  return (
    <>

      {/* Left Blob */}

      <GradientBlob
        className="-left-32 -top-32 w-[550px] h-[500px]"
        animate={{
          x: [0, 35, -15, 0],
          y: [0, -15, 10, 0],
          scale: [1, 1.03, 1],
        }}
        duration={55}
      />


      {/* Right Blob */}

      <GradientBlob
        className="-right-32 top-20 w-[550px] h-[500px]"
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 15, -10, 0],
          scale: [1, 1.04, 1],
        }}
        duration={60}
      />


      {/* Center Glow */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.15), transparent 70%)",
          filter: "blur(40px)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </>
  );
}