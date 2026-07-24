import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldAlert, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const tips = [
  "Use unique passwords for every account — a password manager makes it painless.",
  "Enable Multi-Factor Authentication (MFA) wherever possible.",
  "Never click suspicious links — hover to preview the real URL first.",
  "Keep your OS, browser, and apps updated to patch known CVEs.",
  "Public Wi-Fi? Always tunnel through a trusted VPN.",
  "Backups follow the 3-2-1 rule: 3 copies, 2 media, 1 offsite.",
  "Verify HTTPS + certificate before entering any credentials.",
  "Least privilege beats convenience — grant only what's needed.",
];

const CyberTipsSection = () => {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped("");
    const tip = tips[index];
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(tip.slice(0, i));
      if (i >= tip.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [index]);

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % tips.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="cyber-tips" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              CyberSec <span className="text-gradient">Tip of the Moment</span>
            </h2>
          </div>
          <div className="w-16 h-1 shimmer-line rounded mb-8" />

          <div className="rounded-xl border border-primary/30 bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-primary/10 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex items-center gap-1 ml-3 text-xs text-muted-foreground">
                  <Terminal className="w-3 h-3" /> devanandh@secure ~ %
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 text-xs"
                onClick={() => setIndex((p) => (p + 1) % tips.length)}
              >
                <RefreshCw className="w-3 h-3 mr-1" /> next
              </Button>
            </div>
            <div className="p-6 font-mono text-sm md:text-base min-h-[110px]">
              <p className="text-primary">$ sudo security --tip</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-foreground mt-2"
                >
                  {typed}
                  <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse align-middle" />
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberTipsSection;
