import { motion } from "framer-motion";
import poster from "@/assets/poster.png";

const BrochureSection = () => {
  return (
    <section id="brochure" className="relative py-24 bg-ancient">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-primary/80 mb-2">Know More</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gold-gradient mb-4">Brochure</h2>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative border border-primary/30 rounded-sm overflow-hidden glow-gold">
            <img src={poster} alt="Samagam Kurukshetra Poster" className="w-full h-auto" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrochureSection;
