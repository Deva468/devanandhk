import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield } from "lucide-react";

const projects = [
  {
    title: "Ethical Hacking Hackathon",
    type: "Hackathon Project | Team Based",
    period: "Jan 2026",
    icon: Shield,
    points: [
      "Participated in a team-based ethical hacking hackathon and performed basic network security analysis",
      "Used Wireshark to capture and analyze network packets",
      "Demonstrated basic password sniffing techniques in a controlled lab environment",
      "Analyzed network traffic to identify insecure data transmission",
      "Learned fundamentals of network monitoring, packet analysis, and ethical hacking concepts",
      "Understood real-world cyber attack techniques and security vulnerabilities",
      "Worked collaboratively with team members to complete hacking challenges",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Team <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                          <span className="text-sm text-primary font-medium">{project.period}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{project.type}</p>
                        <ul className="space-y-2">
                          {project.points.map((point, j) => (
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

export default ProjectsSection;
