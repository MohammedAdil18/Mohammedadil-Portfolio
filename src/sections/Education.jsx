import { motion } from "framer-motion";
import { education } from "../data/portfolio";

function Education() {
  return (
    <section id="education" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}

        <div className="text-center mb-16">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#4F3B2D]">
              Education
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#8B6B4A] to-[#C39A72]" />

            <p className="mt-8 text-lg leading-8 text-[#6D5A49]">
              My academic journey and qualifications.
            </p>
          </div>


        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Line */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              bg-[#D8C8B5]
              md:left-1/2
            "
          />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`
                  relative
                  flex
                  md:justify-between
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Dot */}

                <div
                  className="
                    absolute
                    left-[11px]
                    top-8
                    h-4
                    w-4
                    rounded-full
                    bg-[#8B6B4A]
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                />

                {/* Card */}

                <div
                  className="
                    ml-12
                    w-full
                    md:ml-0
                    md:w-[45%]
                    rounded-[28px]
                    border
                    border-[#E5D6C5]
                    bg-white/60
                    p-8
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-[#4F3B2D]
                    "
                  >
                    {item.degree}
                  </h3>

                  {item.specialization && (
                    <p
                      className="
                        mt-3
                        text-[#8B6B4A]
                        font-semibold
                      "
                    >
                      {item.specialization}
                    </p>
                  )}

                  <p
                    className="
                      mt-3
                      text-[#6D5A49]
                    "
                  >
                    {item.college || item.school}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[#7B6856]
                    "
                  >
                    {item.duration}
                  </p>

                  <span
                    className="
                      inline-block
                      mt-5
                      rounded-full
                      bg-[#8B6B4A]
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    {item.cgpa || item.percentage}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
