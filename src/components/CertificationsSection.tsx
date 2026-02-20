import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

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
    <section id="certifications" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Card className="bg-card border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full group overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/0 group-hover:bg-primary transition-all duration-300" />
                  <CardContent className="p-5 flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                    >
                      <Award className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{cert.title}</h3>
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
