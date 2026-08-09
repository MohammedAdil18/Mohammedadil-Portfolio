import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#4F3B2D]">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#8B6B4A] to-[#C39A72]" />

      <p className="mt-8 text-lg leading-8 text-[#6D5A49]">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;