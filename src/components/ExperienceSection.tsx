import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Ekhie Business Solutions",
    period: "Mar – Apr 2025",
    points: [
      "Assisted in developing and maintaining websites using HTML, CSS, and JavaScript",
      "Collaborated with senior developers to implement responsive web design",
      "Gained practical experience in front-end development workflows",
    ],
  },
  {
    role: "UI/UX Designing Intern",
    company: "Industrial Design & Animations, Chennai",
    period: "Jul – Aug 2025",
    points: [
      "Designed user interfaces and user experiences for mobile and web applications using Figma",
      "Conducted user research and created wireframes, prototypes, and design systems",
      "Worked closely with the development team to ensure design feasibility",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "SkillSync",
    period: "Jan – Feb 2026",
    points: [
      "Developed front-end components using HTML, CSS, and JavaScript",
      "Worked on real-time projects to improve user interface and responsiveness",
      "Learned modern front-end development practices and debugging techniques",
      "Collaborated with mentors and team members in project development",
      "Strengthened practical skills in web development and responsive design",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "NoviTech R&D Pvt Ltd",
    period: "Feb – Mar 2026",
    points: [
      "Gained hands-on experience in full stack web development concepts",
      "Learned how real-world web applications are designed, developed, and deployed",
      "Worked on both front-end and back-end development basics",
      "Improved practical skills in HTML, CSS, JavaScript, and backend integration",
      "Understood client-server architecture and application workflow",
      "Collaborated with mentors and learned industry-level development practices",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="bg-card border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                          <span className="text-sm text-primary font-medium">{exp.period}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                        <ul className="space-y-2">
                          {exp.points.map((point, j) => (
                            <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default ExperienceSection;
