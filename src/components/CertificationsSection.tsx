import { motion } from "framer-motion";
import certThozhil from "@/assets/cert-thozhil.jpg";
import certEkhie from "@/assets/cert-ekhie.jpg";
import certTata from "@/assets/cert-tata.jpg";

const certificates = [
  { src: certThozhil, alt: "Thozhil - Web Developer Intern Certificate" },
  { src: certEkhie, alt: "Ekhie Business Solutions - Web Developer Internship Certificate" },
  { src: certTata, alt: "Tata Strive & Microsoft - Cybersecurity Certificate" },
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

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex items-center gap-6 animate-marquee-left hover:[animation-play-state:paused]">
          {doubled.map((cert, i) => (
            <div
              key={`cert-${i}`}
              className="flex-shrink-0 w-72 md:w-96 rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
