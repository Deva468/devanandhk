import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Shield, Palette, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            <Shield className="w-3 h-3 mr-1" />
            Aspiring Cybersecurity Professional
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hello, I'm{" "}
            <span className="text-primary">Devanandh K</span>
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            B.E. CSE (Cyber Security) student at Dhanalakshmi College of Engineering, 
            passionate about web development, UI/UX design, and cybersecurity.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#experience">
                View My Work <ArrowDown className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right — Avatar circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center relative shadow-2xl shadow-primary/10">
            <span className="text-6xl md:text-8xl font-bold text-primary font-['Space_Grotesk']">
              DK
            </span>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-foreground">Cybersecurity</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-3 py-2 shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm">
                <Palette className="w-4 h-4 text-primary" />
                <span className="text-foreground">Designer</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
