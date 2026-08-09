import { motion } from "framer-motion";
import Card from "./Card";

function SkillCard({
  icon,
  name,
  category,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full">

        <div className="flex flex-col items-center text-center">

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-[#F7EFE5]
              to-[#EFE2D2]
              text-6xl
              text-[#8B6B4A]
              shadow-md
            "
          >
            {icon}
          </div>

          <h3 className="mt-8 text-2xl font-bold text-[#4E382A]">
            {name}
          </h3>

          <span
            className="
              mt-4
              rounded-full
              bg-[#8B6B4A]
              px-5
              py-2
              text-sm
              font-semibold
              text-white
            "
          >
            {category}
          </span>

        </div>

      </Card>
    </motion.div>
  );
}

export default SkillCard;