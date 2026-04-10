import { motion } from "framer-motion";
import poster from "@/assets/poster.png";

const BROCHURE_LINK = "#"; // Replace with actual brochure PDF link

const BrochureSection = () => {
  return (
    <section id="brochure" className="relative py-24">
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
            <img src={poster} alt="Samagam Kurukshetra Brochure" className="w-full h-auto" loading="lazy" />
          </div>

          <div className="text-center mt-8">
            <a
              href={BROCHURE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-accent text-sm tracking-[0.3em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-gold-light transition-colors duration-300 rounded-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Brochure
            </a>
            <p className="font-body text-xs text-muted-foreground mt-3 italic">
              Replace the link in <code className="text-primary/70">src/components/BrochureSection.tsx</code> (BROCHURE_LINK constant)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrochureSection;
