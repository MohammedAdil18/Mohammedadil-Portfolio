import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseSpotlight() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 30,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="
        fixed
        pointer-events-none
        z-0
      "
      style={{
        x,
        y,
        width: 350,
        height: 350,
        marginLeft: -175,
        marginTop: -175,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(176,137,104,0.12) 45%, transparent 70%)",
        filter: "blur(50px)",
        willChange: "transform",
      }}
    />
  );
}