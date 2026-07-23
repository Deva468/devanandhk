import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Shield, Palette, Github, Linkedin, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated blob backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 animate-blob blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 animate-blob-delayed blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary animate-pulse-glow">
              <Shield className="w-3 h-3 mr-1" />
              Aspiring Cybersecurity Professional
            </Badge>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hello, I'm{" "}
            <span className="text-gradient">Devanandh K</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg mb-8 max-w-lg"
          >
            B.E. CSE (Cyber Security) student at Dhanalakshmi College of Engineering
            with interests in Cyber Security, MERN Stack Development, and UI/UX Design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="group">
              <a href="#experience">
                View My Work <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <a href="/Devanandh_K_Resume_CS.docx" download>
                <Download className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 mt-6"
          >
            <a href="https://www.linkedin.com/in/devanandh-k-csa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — Avatar circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center relative animate-pulse-glow">
            <span className="text-6xl md:text-8xl font-bold text-gradient font-['Space_Grotesk']">
              DK
            </span>

            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-[-20px] rounded-full border border-dashed border-primary/20"
            />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-3 py-2 shadow-lg card-interactive"
            >
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-foreground">Cybersecurity</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-3 py-2 shadow-lg card-interactive"
            >
              <div className="flex items-center gap-2 text-sm">
                <Palette className="w-4 h-4 text-primary" />
                <span className="text-foreground">Designer</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 2 }}
              className="absolute top-1/2 -right-12 bg-card border border-border rounded-xl px-3 py-2 shadow-lg card-interactive"
            >
              <div className="flex items-center gap-2 text-sm">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-foreground">Developer</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
