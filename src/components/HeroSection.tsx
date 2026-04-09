import { motion } from "framer-motion";
import samagamLogo from "@/assets/samagam-logo.png";
import klsLogo from "@/assets/kls-logo.png";
import imerLogo from "@/assets/imer-logo.png";
import naacLogo from "@/assets/naac.png";
import years35Logo from "@/assets/35-years.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* College logos + name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 md:gap-6 mb-6"
        >
          <img src={klsLogo} alt="KLS" className="h-14 md:h-20 w-auto" />
          <h2 className="font-heading text-xl md:text-4xl lg:text-5xl tracking-[0.08em] uppercase text-gold-gradient leading-tight">
            KLS Institute of Management<br />Education & Research
          </h2>
          <img src={imerLogo} alt="IMER" className="h-14 md:h-20 w-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="font-accent text-xs md:text-sm tracking-[0.25em] text-foreground/50 mb-1"
        >
          (Autonomous)
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-accent text-xs md:text-sm tracking-[0.25em] text-foreground/50 mb-2"
        >
          Hindwadi, Belgavi
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-4"
        >
          <img src={years35Logo} alt="35 Years" className="h-10 md:h-14 w-auto" />
          <img src={naacLogo} alt="NAAC A Grade" className="h-10 md:h-14 w-auto" />
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
          <img src={samagamLogo} alt="Samagam Kurukshetra" className="mx-auto h-52 md:h-72 lg:h-96 w-auto animate-float" />
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
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 rounded-sm bg-background/40 backdrop-blur-sm mb-10"
        >
          <span className="font-heading text-2xl md:text-3xl text-gold-gradient">
            29<sup className="text-sm">th</sup> & 30<sup className="text-sm">th</sup> April 2026
          </span>
        </motion.div>

        {/* Director & Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-10 space-y-6"
        >
          <div>
            <p className="font-accent text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Director, KLS IMER</p>
            <p className="font-heading text-lg md:text-xl text-foreground">Dr. Arif Shaikh</p>
          </div>
          <div>
            <p className="font-accent text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Faculty Coordinators</p>
            <p className="font-heading text-lg text-foreground">Asst. Prof. Goutami Maganur</p>
            <p className="font-heading text-lg text-foreground">Asst. Prof. Rashmi Harti</p>
          </div>
          <div>
            <p className="font-accent text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">Student Coordinators</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              <p className="font-heading text-foreground">Sahard Dongre</p>
              <p className="font-heading text-foreground">Prajyot Ashtekar</p>
              <p className="font-heading text-foreground">Prajwal Joshi</p>
              <p className="font-heading text-foreground">Rajshree Bhadache</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
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
