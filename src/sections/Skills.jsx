import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { skills } from "../data/portfolio";
import { Code2, Database, Languages, Wrench } from "lucide-react";

function Skills() {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const getIcon = (title) => {
    switch (title) {
      case "Frontend":
        return <Code2 className="w-8 h-8 text-white" />;
      case "Database":
        return <Database className="w-8 h-8 text-white" />;
      case "Languages":
        return <Languages className="w-8 h-8 text-white" />;
      case "Tools":
        return <Wrench className="w-8 h-8 text-white" />;
      default:
        return <Code2 className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I use to build modern web applications."
        />

        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([title, skillList]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#D8C2A8] bg-[#F8F7F5] p-8 shadow-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-[#9B7653] flex items-center justify-center shadow-md">
                  {getIcon(title)}
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#4F3B2D] mb-6">
                    {title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-5 py-2 rounded-full border border-[#D8C2A8] bg-white text-[#4F3B2D] font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;