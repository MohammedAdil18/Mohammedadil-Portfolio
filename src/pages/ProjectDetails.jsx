import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { projects } from "../data/portfolio";

import Container from "../components/layout/Container";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";


function ProjectDetails() {

  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );


  if (!project) {
    return (
      <section className="py-40">
        <Container>
          <h1 className="text-4xl font-bold text-[#4F3B2D]">
            Project Not Found
          </h1>
        </Container>
      </section>
    );
  }


  return (
    <section className="py-32">

      <Container>

        {/* Image */}

        {project.image && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-[#E5D6C5]
              shadow-xl
            "
          >

            <img
              src={project.image}
              alt={project.title}
              className="
                h-[450px]
                w-full
                object-cover
              "
            />

          </motion.div>
        )}


        {/* Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-12"
        >

          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              text-[#4F3B2D]
            "
          >
            {project.title}
          </h1>


          <p
            className="
              mt-6
              max-w-4xl
              text-lg
              leading-8
              text-[#6D5A49]
            "
          >
            {project.description}
          </p>


          {/* Technologies */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >

            {project.technologies.map((tech)=>(
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}

          </div>


          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-5
            "
          >

            {project.github && (
              <Button
                href={project.github}
                target="_blank"
              >
                <FaGithub />
                GitHub
              </Button>
            )}


            {project.live && (
              <Button
                href={project.live}
                target="_blank"
                variant="outline"
              >
                <FaExternalLinkAlt />
                Live Demo
              </Button>
            )}

          </div>


        </motion.div>


      </Container>

    </section>
  );
}


export default ProjectDetails;