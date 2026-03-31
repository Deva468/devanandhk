import { motion } from "framer-motion";
import certThozhil from "@/assets/cert-thozhil.jpg";
import certEkhie from "@/assets/cert-ekhie.jpg";
import certTata from "@/assets/cert-tata.jpg";
import certOracle from "@/assets/cert-oracle.jpg";
import certThozhilUiux from "@/assets/cert-thozhil-uiux.jpg";
import certIda from "@/assets/cert-ida.jpg";
import certSupraja from "@/assets/cert-supraja.jpg";
import certCodecraft from "@/assets/cert-codecraft.jpg";

const certificates = [
  { src: certThozhil, alt: "Thozhil - Web Developer Intern Certificate" },
  { src: certEkhie, alt: "Ekhie Business Solutions - Web Developer Internship" },
  { src: certTata, alt: "Tata Strive & Microsoft - Cybersecurity Certificate" },
  { src: certOracle, alt: "Oracle Certified Foundations Associate" },
  { src: certThozhilUiux, alt: "Thozhil - UI/UX Designer Intern Certificate" },
  { src: certIda, alt: "Industrial Design & Animations - UI/UX Internship" },
  { src: certSupraja, alt: "Supraja Technologies - Cyber Security & Ethical Hacking" },
  { src: certCodecraft, alt: "Code Craft - App Development Intern" },
];

const CertificationsSection = () => {
  const doubled = [...certificates, ...certificates];

  return (
    <section id="certifications" className="py-20 bg-card/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded" />
        </motion.div>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative w-full overflow-hidden mb-5">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex items-center gap-5 animate-marquee-left hover:[animation-play-state:paused]">
          {doubled.slice(0, certificates.length * 2).map((cert, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 w-64 md:w-80 rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.03]"
            >
              <img src={cert.src} alt={cert.alt} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex items-center gap-5 animate-marquee-right hover:[animation-play-state:paused]">
          {[...doubled].reverse().map((cert, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 w-64 md:w-80 rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.03]"
            >
              <img src={cert.src} alt={cert.alt} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
