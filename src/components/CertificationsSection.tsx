import { motion } from "framer-motion";
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

const CertCard = ({ cert }: { cert: typeof certifications[0] }) => (
  <div className="flex-shrink-0 w-72 bg-card border border-border rounded-xl p-5 flex items-start gap-3 group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-0.5 bg-primary/0 group-hover:bg-primary transition-all duration-300" />
    <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
      <Award className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{cert.title}</h3>
      <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
      <p className="text-primary text-xs font-medium mt-1">{cert.year}</p>
    </div>
  </div>
);

const CertificationsSection = () => {
  // Duplicate for seamless loop
  const doubled = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded" />
        </motion.div>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative w-full overflow-hidden mb-4">
        <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused]">
          {doubled.map((cert, i) => (
            <CertCard key={`row1-${i}`} cert={cert} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused]">
          {[...doubled].reverse().map((cert, i) => (
            <CertCard key={`row2-${i}`} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
