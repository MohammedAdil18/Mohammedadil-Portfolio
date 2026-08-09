import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="A collection of projects showcasing my skills in building modern, responsive and user-friendly web applications."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-10"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default Projects;
