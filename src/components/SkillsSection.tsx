import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "C", "Python"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Figma", "MySQL"],
  },
  {
    title: "Other",
    icon: Sparkles,
    skills: ["Data Analysis", "UI/UX Design", "Web Development"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Card className="bg-card border-border hover:border-primary/40 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <cat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
