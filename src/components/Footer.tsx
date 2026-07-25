import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-primary/3" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {[
              { icon: Mail, label: "Email", href: "mailto:devanandhkathirvel@gmail.com" },
              { icon: Phone, label: "Phone", href: "tel:+919787478553" },
              { icon: Linkedin, label: null, href: "https://www.linkedin.com/in/devanandh-k-a56708337" },
              { icon: Github, label: null, href: "https://github.com/dashboard" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -2 }}
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <item.icon className="w-4 h-4" />
                {item.label && item.label}
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Devanandh K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
