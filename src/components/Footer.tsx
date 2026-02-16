import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="text-2xl font-bold font-['Space_Grotesk'] text-primary">
              DK<span className="text-foreground">.</span>
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:devanandhkathirvel@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="tel:+919787478553" className="hover:text-primary transition-colors flex items-center gap-1">
              <Phone className="w-4 h-4" /> Phone
            </a>
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
