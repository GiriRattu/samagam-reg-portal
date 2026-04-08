import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 bg-ancient">
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
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl text-foreground mb-4">Key People</h3>
              <div className="space-y-4 font-body text-sm">
                <div>
                  <p className="text-muted-foreground uppercase font-accent text-xs tracking-widest">Chairman, Governing Council, KLS IMER</p>
                  <p className="text-foreground text-lg">Shri U. N. Kalkundrikar</p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-accent text-xs tracking-widest">Director, KLS IMER</p>
                  <p className="text-foreground text-lg">Dr. Arif Shaikh</p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase font-accent text-xs tracking-widest">Faculty Coordinators</p>
                  <p className="text-foreground text-lg">Prof. Goutami Maganur</p>
                  <p className="text-foreground text-lg">Prof. Rashmi Harti</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl text-foreground mb-4">Student Coordinators</h3>
              <div className="grid grid-cols-2 gap-2 font-body text-foreground">
                <p>Sahard Dongre</p>
                <p>Prajyot Ashtekar</p>
                <p>Prajwal Joshi</p>
                <p>Rajshree Bhadache</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-accent text-xs tracking-widest uppercase text-muted-foreground mb-1">Address</p>
                <p className="font-body text-foreground">
                  KLS Institute of Management Education & Research,<br />
                  Hindwadi, Belagavi, Karnataka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-accent text-xs tracking-widest uppercase text-muted-foreground mb-1">Phone</p>
                <p className="font-body text-foreground">Contact the coordinators for queries</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-accent text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                <p className="font-body text-foreground">imer@klsimer.edu</p>
              </div>
            </div>
          </motion.div>
        </div>
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
