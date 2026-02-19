import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, Languages } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Internships", value: "5" },
  { icon: Award, label: "Certificates", value: "10+" },
  { icon: GraduationCap, label: "Year", value: "2023–27" },
  { icon: Languages, label: "Languages", value: "2" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-8" />

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am Devanandh K, a dedicated CSE (Cyber Security) student at Dhanalakshmi College 
                of Engineering with a strong foundation in web development and UI/UX design. I am 
                passionate about creating intuitive digital experiences and securing them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With hands-on experience through internships in web development and UI/UX designing, 
                I bring a blend of creativity and technical skills. I'm proficient in HTML, CSS, 
                JavaScript, Python, C, and tools like Figma and MySQL.
              </p>

              <div className="flex gap-4 mt-4">
                <span className="text-sm text-muted-foreground">
                  📍 Kanchipuram
                </span>
                <span className="text-sm text-muted-foreground">
                  🗣️ English, Tamil, Japanese (Learning)
                </span>
              </div>
            </div>

            <div>
              <Card className="bg-card border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Education</h3>
                  </div>
                  <p className="text-foreground font-medium">B.E. CSE (Cyber Security)</p>
                  <p className="text-muted-foreground text-sm">Dhanalakshmi College of Engineering</p>
                  <p className="text-muted-foreground text-sm">2023 – 2027 • CGPA: <span className="text-primary font-bold text-base">8.31</span></p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
