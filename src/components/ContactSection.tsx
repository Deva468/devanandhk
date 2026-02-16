import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "devanandhkathirvel@gmail.com", href: "mailto:devanandhkathirvel@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9787478553", href: "tel:+919787478553" },
  { icon: MapPin, label: "Location", value: "Kanchipuram", href: null },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out! I'm always open to discussing new opportunities, 
                projects, or collaborations.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card key={item.label} className="bg-card border-border">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-foreground hover:text-primary transition-colors text-sm">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="bg-secondary border-border" />
                    <Input type="email" placeholder="Your Email" className="bg-secondary border-border" />
                  </div>
                  <Input placeholder="Subject" className="bg-secondary border-border" />
                  <Textarea placeholder="Your Message" rows={5} className="bg-secondary border-border" />
                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
