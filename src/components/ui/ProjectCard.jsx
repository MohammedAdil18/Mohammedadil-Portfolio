import { motion } from "framer-motion";
import Badge from "./Badge";
import Button from "./Button";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        grid
        lg:grid-cols-[1fr_1fr]
        gap-10
        items-center
        rounded-[32px]
        border
        border-[#E5D6C5]
        bg-white/70
        p-8
        shadow-xl
        backdrop-blur-xl
      "
    >
      {/* IMAGE ONLY */}
      <div className="overflow-hidden rounded-[24px] border border-[#E5D6C5]">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              w-full
              h-[420px]
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-4xl font-black text-[#4F3B2D]">
            {project.title}
          </h3>

          <p className="mt-5 text-lg leading-8 text-[#6D5A49]">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={project.github} target="_blank">
            <FaGithub />
            GitHub
          </Button>

          <Button href={project.live} target="_blank" variant="outline">
            <FaExternalLinkAlt />
            Live Demo
          </Button>
               <Link
  to={`/projects/${project.id}`}
  className="
    flex
    items-center
    justify-center
    gap-2
    rounded-full
    border
    border-[#8B6B4A]
    px-5
    py-3
    text-sm
    sm:px-6
    sm:py-3
    sm:text-base
    font-semibold
    text-[#8B6B4A]
    transition
    duration-300
    hover:bg-[#8B6B4A]
    hover:text-white
  "
>
  Details
  <FaArrowRight />
</Link>
    
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;