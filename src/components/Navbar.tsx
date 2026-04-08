import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import samagamLogo from "@/assets/samagam-logo.png";

const navLinks = ["Home", "Events", "Brochure", "Registration", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,0%)]">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
          <img src={samagamLogo} alt="Samagam" className="h-10 w-auto" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-heading text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="w-full border-t border-gold/10 py-1.5">
        <p className="text-center font-heading text-[10px] md:text-xs tracking-[0.15em] uppercase text-foreground/50">
          KLS Institute of Management Education & Research, Hindwadi, Belagavi
        </p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[hsl(0,0%,0%)] border-t border-gold/20"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="font-heading text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
