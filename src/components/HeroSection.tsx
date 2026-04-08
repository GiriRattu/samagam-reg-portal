import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import samagamLogo from "@/assets/samagam-logo.png";
import klsLogo from "@/assets/kls-logo.png";
import imerLogo from "@/assets/imer-logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-6"
        >
          <img src={klsLogo} alt="KLS" className="h-16 md:h-20 w-auto" />
          <div className="hidden sm:block text-center">
            <p className="font-accent text-xs tracking-[0.3em] uppercase text-foreground/60">The Karnataka Law Society's</p>
            <h2 className="font-heading text-sm md:text-base tracking-[0.15em] uppercase text-foreground/90">
              Institute of Management Education & Research
            </h2>
            <p className="font-accent text-xs tracking-[0.2em] text-foreground/50">(Autonomous, Belagavi)</p>
          </div>
          <img src={imerLogo} alt="IMER" className="h-16 md:h-20 w-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-accent text-sm tracking-[0.4em] uppercase text-primary/80 mb-4"
        >
          Presents
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <img src={samagamLogo} alt="Samagam Kurukshetra" className="mx-auto h-40 md:h-64 lg:h-80 w-auto animate-float" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-lg md:text-xl italic text-foreground/70 max-w-2xl mx-auto mb-8"
        >
          A premier two-day management fest where warriors of intellect and creativity clash on the battlefield of excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 rounded-sm bg-background/40 backdrop-blur-sm"
        >
          <span className="font-heading text-2xl md:text-3xl text-gold-gradient">
            29<sup className="text-sm">th</sup> & 30<sup className="text-sm">th</sup> April 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10"
        >
          <button
            onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
            className="font-accent text-sm tracking-[0.3em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300 rounded-sm"
          >
            Register Now
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
