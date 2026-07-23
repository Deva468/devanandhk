import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "devanandhkathirvel@gmail.com", href: "mailto:devanandhkathirvel@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9787478553", href: "tel:+919787478553" },
  { icon: MapPin, label: "Location", value: "Kanchipuram", href: null },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: form,
      });
      if (error) throw error;
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact form failed:", err);
      toast.error("Couldn't send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 shimmer-line rounded mb-10" />

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground mb-8">
                Feel free to reach out! I'm always open to discussing new opportunities,
                projects, or collaborations.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <Card className="bg-card border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                      <CardContent className="p-4 flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors"
                        >
                          <item.icon className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-foreground hover:text-primary transition-colors text-sm underline-grow">
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground text-sm">{item.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 shimmer-line" />
                <CardContent className="p-6">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <Input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" maxLength={100} className="bg-secondary border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                      <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" maxLength={255} className="bg-secondary border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    </div>
                    <Input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" maxLength={200} className="bg-secondary border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} maxLength={2000} className="bg-secondary border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                    <Button type="submit" disabled={loading} className="w-full group" size="lg">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
