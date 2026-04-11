import { motion } from "framer-motion";
import { Users, User } from "lucide-react";

const RegistrationSection = () => {
  return (
    <section id="registration" className="relative py-24">
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-primary/80 mb-2">Join the Battle</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gold-gradient mb-4">Registration</h2>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 rounded-sm p-8 text-center transition-all duration-500 hover:glow-gold flex flex-col items-center"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6 group-hover:text-gold-light transition-colors" />
            <h3 className="font-heading text-2xl text-foreground mb-2">Group Registration</h3>
            <p className="font-body text-muted-foreground italic mb-8">
              Register your entire team for all department events and group participation events together.
            </p>
            <a
              href="https://forms.gle/W3whQv2PJxNz82d26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-accent text-sm tracking-[0.3em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300 rounded-sm"
            >
              Register Team
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 rounded-sm p-8 text-center transition-all duration-500 hover:glow-gold flex flex-col items-center"
          >
            <User className="w-12 h-12 text-primary mx-auto mb-6 group-hover:text-gold-light transition-colors" />
            <h3 className="font-heading text-2xl text-foreground mb-2">Individual Registration</h3>
            <p className="font-body text-muted-foreground italic mb-8">
              Browse and register for a specific event individually or as a pair.
            </p>
            <a
              href="https://forms.gle/KgiDGSxAUuvBBitW8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-accent text-sm tracking-[0.3em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300 rounded-sm"
            >
              Register Individual
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
