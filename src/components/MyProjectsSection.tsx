import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Shield, Lock } from "lucide-react";

const myProjects = [
  {
    title: "CyberShield AI Chatbot",
    description:
      "An AI-powered cybersecurity assistant chatbot that helps users understand security concepts, threats, and best practices in real time.",
    tags: ["AI", "Cybersecurity", "Chatbot", "React"],
    icon: Shield,
    link: "https://cybershield-ai-chatbot-qii6.vercel.app/",
  },
  {
    title: "Password Strength Checker",
    description:
      "A web tool that evaluates password strength in real time, giving instant feedback on length, complexity, and security recommendations.",
    tags: ["Security", "Web App", "JavaScript"],
    icon: Lock,
    link: "https://password-strength-deva.vercel.app/",
  },
];

const MyProjectsSection = () => {
  return (
    <section id="my-projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded mb-10" />

          <div className="grid md:grid-cols-2 gap-6">
            {myProjects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="block group"
              >
                <Card className="bg-card border-border card-interactive h-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 shimmer-line" />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Project
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjectsSection;
