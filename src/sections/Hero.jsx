import { motion } from "framer-motion";

import { personalInfo } from "../data/portfolio";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import {
  fadeLeft,
  fadeRight,
} from "../utils/animations";

const techStack = [
  "React",
  "JavaScript",
  "SQL",
  "Tailwind CSS",
  "Git",
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center text-[#3F2F24]"
    >
      <Container className="relative z-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-24 min-h-[calc(100vh-80px)]">

          {/* LEFT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#DCCAB7] bg-white/60 backdrop-blur-xl px-5 py-2 shadow-sm">

              <span className="w-2 h-2 rounded-full bg-[#8B6B4A] animate-pulse"/>

              <span className="text-sm font-medium text-[#8B6B4A]">
                Available for Frontend Opportunities
              </span>

            </div>

            {/* Greeting */}

            <p className="mt-16 text-lg font-semibold tracking-wide text-[#8B6B4A]">
              👋 Hello, I'm
            </p>

            {/* Name */}

            <h1 className="mt-3 leading-[0.9] tracking-tight">

              <span className="block text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#5A3828] via-[#8B6B4A] to-[#C89F77] bg-clip-text text-transparent">

                {personalInfo.name}

              </span>

            </h1>

            {/* Role */}

            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-[#4F3B2D]">

              {personalInfo.role}

            </h2>

            {/* Description */}

            <p className="mt-8 max-w-[580px] text-lg leading-9 text-[#6D5A49]">

              {personalInfo.tagline}

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                href={personalInfo.resume}
                download="Mohammed_Adil_Resume.pdf"
              >
                <FaDownload />
                Download Resume
              </Button>

              <Button
                href="#contact"
                variant="outline"
              >
                Contact Me
              </Button>

            </div>

            {/* Social */}

            <div className="mt-10 flex items-center gap-5">

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-[#DCCAB7] bg-white/60 backdrop-blur-xl shadow-md flex items-center justify-center text-[#6D4C41] hover:bg-[#8B6B4A] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub size={20}/>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-[#DCCAB7] bg-white/60 backdrop-blur-xl shadow-md flex items-center justify-center text-[#6D4C41] hover:bg-[#8B6B4A] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin size={20}/>
              </a>

              <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
  target="_blank"
  rel="noreferrer"
  className="w-12 h-12 rounded-full border border-[#DCCAB7] bg-white/60 backdrop-blur-xl shadow-md flex items-center justify-center text-[#6D4C41] hover:bg-[#8B6B4A] hover:text-white hover:-translate-y-1 transition-all duration-300"
>
  <MdEmail size={20} />
</a>

            </div>

            {/* Tech */}

            <div className="mt-10 flex flex-wrap gap-3">

              {techStack.map((tech)=>(

                <Badge key={tech}>

                  {tech}

                </Badge>

              ))}

            </div>

          </motion.div>
                    {/* RIGHT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Background Glow */}
            <div
              className="absolute w-[520px] h-[520px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(176,137,104,.18), transparent 70%)",
                filter: "blur(120px)",
              }}
            />

            {/* Image Card */}
            <motion.div
              whileHover={{
                y: -8,
                rotate: -1,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                w-[400px]
                h-[500px]
                rounded-[32px]
                overflow-hidden
                border
                border-white/50
                bg-white/25
                backdrop-blur-2xl
                shadow-[0_35px_80px_rgba(176,137,104,.22)]
              "
            >
              {/* Top Gradient */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,.08), transparent 30%, transparent 70%, rgba(0,0,0,.08))",
                }}
              />

              <img
                src="/profile.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
