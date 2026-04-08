import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 bg-ancient/80">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-primary/80 mb-2">Reach Out</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gold-gradient mb-4">Contact</h2>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-accent text-xs tracking-widest uppercase text-muted-foreground mb-1">Address</p>
                <p className="font-heading text-foreground">
                  KLS Institute of Management Education & Research,<br />
                  Hindwadi, Belagavi, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-accent text-xs tracking-widest uppercase text-muted-foreground mb-1">Registration Department</p>
                <p className="font-heading text-foreground">
                  Giri Rattu — <a href="tel:6362239058" className="text-primary hover:text-gold-light transition-colors">6362239058</a>
                </p>
                <p className="font-heading text-foreground">
                  Aadhya Bhat — <a href="tel:7676288787" className="text-primary hover:text-gold-light transition-colors">7676288787</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-accent text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                <p className="font-heading text-foreground">
                  <a href="mailto:imer@klsimer.edu" className="hover:text-primary transition-colors">imer@klsimer.edu</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-accent text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Follow Us</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/klsimer_official/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://www.facebook.com/klsimer/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://www.youtube.com/@klsimer" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Youtube className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/school/kls-imer/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-border pt-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-accent text-xs tracking-[0.2em] uppercase text-muted-foreground">
            © 2026 Samagam Kurukshetra — KLS IMER, Belagavi
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
