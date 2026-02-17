import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { title: "Cybersecurity Job Simulation", issuer: "Mastercard (Forage)", year: "2024" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco", year: "2024" },
  { title: "Google UX Design", issuer: "Coursera", year: "2024" },
  { title: "Python for Beginners", issuer: "Cisco", year: "2024" },
  { title: "Web Development Fundamentals", issuer: "Udemy", year: "2024" },
  { title: "Data Analysis with Python", issuer: "Coursera", year: "2024" },
  { title: "JavaScript Essentials", issuer: "HackerRank", year: "2024" },
  { title: "UI/UX Design Specialization", issuer: "Coursera", year: "2025" },
  { title: "Ethical Hacking Basics", issuer: "Udemy", year: "2025" },
  { title: "SQL for Data Science", issuer: "Coursera", year: "2025" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="bg-card border-border hover:border-primary/30 transition-colors h-full">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{cert.title}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                      <p className="text-primary text-xs font-medium mt-1">{cert.year}</p>
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

export default CertificationsSection;
