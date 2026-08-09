import { FaLaptopCode, FaMobileAlt, FaRocket, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

import { about, skills, projects } from "../data/portfolio";

const iconMap = {
  laptop: <FaLaptopCode />,
  mobile: <FaMobileAlt />,
  rocket: <FaRocket />,
  code: <FaCode />,
};

function About() {
  const highlights = [
    {
      title: `${new Set(skills.map((s) => s.name)).size}+`,
      subtitle: "Technologies",
    },
    {
      title: `${projects.length}+`,
      subtitle: "Projects",
    },
    {
      title: "React",
      subtitle: "Primary Framework",
    },
    {
      title: "Git",
      subtitle: "Version Control",
    },
  ];

  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle
          title="About Me"
          subtitle="Crafting modern, responsive and engaging digital experiences with clean code and thoughtful design."
        />

        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#F4ECE1] px-4 py-2 text-sm font-semibold text-[#8B6B4A] border border-[#DCCAB7]">
              {about.title}
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-[#4E382A]">
              Building interfaces people enjoy using.
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#6D5A49]">
              {about.description}
            </p>

            <p className="mt-6 text-lg leading-9 text-[#6D5A49]">
              My focus is writing clean, scalable code while creating user
              experiences that are elegant, fast and accessible.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-12">
              {about.services.map((item) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-[#E8D7C6] bg-white/60 backdrop-blur-xl p-5 shadow-sm"
                >
                  <div className="text-2xl text-[#8B6B4A]">
                    {iconMap[item.icon]}
                  </div>

                  <span className="font-medium text-[#5B3A29]">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.subtitle}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="text-center py-10">
                  <h2 className="text-5xl font-black text-[#8B6B4A]">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-lg text-[#6D5A49]">
                    {item.subtitle}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;