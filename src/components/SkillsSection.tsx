import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Wrench, Sparkles, BookOpen } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "C", "Python", "GitHub"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Figma", "MySQL", "VS Code"],
  },
  {
    title: "Other",
    icon: Sparkles,
    skills: ["Data Analysis", "UI/UX Design", "Web Development"],
  },
  {
    title: "Learning",
    icon: BookOpen,
    skills: ["Japanese N5 Exam", "Front-End Development", "Bootstrap", "MERN Stack", "Node.js"],
  },
];

const SkillsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className="bg-card border-border card-interactive h-full relative overflow-hidden">
                  {/* Hover glow */}
                  {hoveredCard === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"
                    />
                  )}
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        animate={hoveredCard === i ? { rotate: [0, -10, 10, 0], scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      >
                        <cat.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-lg text-foreground">{cat.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, j) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 + j * 0.05 }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="px-3 py-1.5 text-sm rounded-full bg-background text-foreground border border-border hover:border-primary/50 hover:text-primary hover:shadow-md hover:shadow-primary/10 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
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
