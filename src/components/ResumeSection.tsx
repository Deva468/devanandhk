import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Eye, GraduationCap, Briefcase, Code, Award, Mail, Phone, MapPin, Languages, FolderGit2, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-primary">Resume</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg">
              <a href="/Devanandh_K_Resume_CS.docx" download>
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </a>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <Eye className="w-4 h-4 mr-2" /> View Online
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Devanandh K — Resume</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4 text-sm">
                  {/* Contact */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground border-b border-border pb-4">
                    <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-primary" /> devanandhkathirvel@gmail.com</span>
                    <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-primary" /> +91 97874 78553</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary" /> Kanchipuram, Tamil Nadu</span>
                  </div>

                  {/* Objective */}
                  <div>
                    <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" /> Objective
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Aspiring Cyber Security professional with a foundation in Network Security, Web Security, Vulnerability Assessment, and Ethical Hacking. Seeking an opportunity to apply my skills in real-world security and web development projects while continuously learning modern tools and technologies.
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4" /> Education
                    </h3>
                    <p className="text-foreground font-medium">B.E. Computer Science and Engineering (Cyber Security)</p>
                    <p className="text-muted-foreground">Dhanalakshmi College of Engineering • 2023 – 2027</p>
                    <p className="text-muted-foreground">CGPA: <span className="text-primary font-bold">8.14</span> (till 5th Semester)</p>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="font-semibold text-primary flex items-center gap-2 mb-3">
                      <Briefcase className="w-4 h-4" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-foreground font-medium">Web Development Intern — Ekhie Business Solutions</p>
                        <p className="text-xs text-muted-foreground mb-1">Mar – Apr 2025</p>
                        <p className="text-muted-foreground text-xs">Built and maintained websites with HTML, CSS, and JavaScript; collaborated on responsive design.</p>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">UI/UX Designing Intern — Industrial Design & Animations</p>
                        <p className="text-xs text-muted-foreground mb-1">Jul – Aug 2025</p>
                        <p className="text-muted-foreground text-xs">Designed mobile & web UI in Figma; created wireframes, prototypes, and design systems.</p>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Front-End Developer Intern — SkillSync</p>
                        <p className="text-xs text-muted-foreground mb-1">Jan – Feb 2026</p>
                        <p className="text-muted-foreground text-xs">Developed front-end components and worked on real-time projects to improve UI and responsiveness.</p>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Frontend Developer Intern — NoviTech R&D Pvt Ltd</p>
                        <p className="text-xs text-muted-foreground mb-1">Feb – Mar 2026</p>
                        <p className="text-muted-foreground text-xs">Built responsive, component-based UIs for an e-commerce app using React.js, HTML, CSS, and JavaScript.</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4" /> Technical Skills
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p><span className="text-foreground font-medium">Security Tools:</span> Kali Linux, Wireshark, Burp Suite, Nmap</p>
                      <p><span className="text-foreground font-medium">Programming Language:</span> Java</p>
                      <p><span className="text-foreground font-medium">Web Development:</span> HTML, CSS, JavaScript, React.js, Node.js (Basics)</p>
                      <p><span className="text-foreground font-medium">Tools:</span> GitHub, VS Code, Figma, Vercel</p>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                      <FolderGit2 className="w-4 h-4" /> Projects
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-foreground font-medium">CyberShield AI Chatbot</p>
                        <p className="text-muted-foreground text-xs">AI-powered cybersecurity assistant for real-time guidance on threats and best practices.</p>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Password Strength Checker</p>
                        <p className="text-muted-foreground text-xs">Web tool that evaluates password strength in real time with instant security feedback.</p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4" /> Certifications
                    </h3>
                    <ul className="text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Certified Ethical Hacker (CEH) — In Progress</li>
                      <li>Web Development Internship — Ekhie Business Solutions</li>
                      <li>UI/UX Design Internship — Industrial Design & Animations</li>
                      <li>Front-End Developer Internship — SkillSync</li>
                      <li>Frontend Developer Internship — NoviTech R&D</li>
                    </ul>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="font-semibold text-primary flex items-center gap-2 mb-2">
                      <Languages className="w-4 h-4" /> Languages
                    </h3>
                    <p className="text-muted-foreground">English, Tamil, Japanese (JLPT N5 – Result Awaited, N4 – Learning)</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Summary cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: GraduationCap, title: "Education", desc: "B.E. CSE (Cyber Security)" },
              { icon: Briefcase, title: "Experience", desc: "4 Internships" },
              { icon: Code, title: "Skills", desc: "9+ Technologies" },
              { icon: Award, title: "Certifications", desc: "10+ Certificates" },
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-5 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
