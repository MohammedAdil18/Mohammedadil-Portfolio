import { motion } from "framer-motion";
import Card from "./Card";

import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const icons = {
  Frontend: <FaCode />,
  Backend: <FaServer />,
  Tools: <HiOutlineWrenchScrewdriver />,
};

function SkillsGroup({ title, skills }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="px-10 py-10">

        <div className="flex items-center gap-16">

          {/* Left Icon */}

          <div
            className="
              flex
              h-20
              w-20
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#8B6B4A]
              text-white
              shadow-lg
            "
          >
            <span className="text-3xl">
              {icons[title]}
            </span>
          </div>

          {/* Right Content */}

          <div className="flex-1">

            <h3 className="mb-8 text-4xl font-bold text-[#4F3B2D]">
              {title}
            </h3>

            <div className="flex flex-wrap gap-5">

              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.25 }}
                  className="
                    rounded-full
                    border
                    border-[#DCCAB7]
                    bg-white
                    px-7
                    py-3
                    text-lg
                    font-semibold
                    text-[#5A4030]
                    shadow-md
                    transition-all
                    duration-300
                    hover:border-[#8B6B4A]
                    hover:bg-[#8B6B4A]
                    hover:text-white
                    hover:shadow-xl
                  "
                >
                  {skill}
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}

export default SkillsGroup;