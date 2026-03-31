import { motion } from "framer-motion";

const companies = [
  "Mastercard",
  "Cisco",
  "Google",
  "Coursera",
  "Udemy",
  "HackerRank",
  "Forage",
  "Microsoft",
  "IBM",
  "Amazon",
];

const CertificationsSection = () => {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-16 bg-card/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground text-sm uppercase tracking-[0.2em] font-medium"
        >
          Trusted & Certified By
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex items-center gap-16 animate-marquee-left hover:[animation-play-state:paused] whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
