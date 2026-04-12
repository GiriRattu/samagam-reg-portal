import { motion } from "framer-motion";
import eventBestManager from "@/assets/event-best-manager.png";
import eventHumanResources from "@/assets/event-human-resources.png";
import eventMarketing from "@/assets/event-marketing.png";
import eventFinance from "@/assets/event-finance.png";

import eventCreativeClick from "@/assets/event-photography.png";
import eventKalakruti from "@/assets/event-kalakruti.png";
import eventEgaming from "@/assets/event-egaming.png";
import eventTreasureHunt from "@/assets/event-team-events.png";
import eventCulturals from "@/assets/event-group-dance.png";

const individualEvents = [
  {
    name: "Dharmaraj — Best Manager",
    members: 1,
    image: eventBestManager,
    desc: "The Dharmaraj event tests the qualities of an ideal manager — fair decision-making, leadership, confidence, and strong judgment. Through structured rounds, participants showcase presence of mind, adaptability, and problem-solving skills. The one who performs with balance, intelligence, and leadership earns the title of Dharmaraj."
  },
  {
    name: "Dronacharya — Human Resources",
    members: 2,
    image: eventHumanResources,
    desc: "Inspired by the great mentor Dronacharya, this event reflects the true role of HR as a guide and decision-maker. Participants are tested through rounds focused on recruitment, conflict management, communication, and workplace ethics — showcasing people skills, negotiation, and managerial confidence."
  },
  {
    name: "Krishna Leela — Marketing",
    members: 2,
    image: eventMarketing,
    desc: "Like Krishna's charm and intelligence, this event focuses on creativity, communication, and strategic thinking in marketing. Participants face real-time marketing situations highlighting branding, promotion, market analysis, and customer understanding — proving their persuasion and innovative mindset."
  },
  {
    name: "Guru Dakshina — Finance",
    members: 2,
    image: eventFinance,
    desc: "Symbolising commitment and respect towards knowledge, Guru Dakshina tests financial awareness, budgeting, analytical thinking, and practical problem-solving. Participants manage numbers confidently and respond with clarity under pressure to earn recognition as the top finance performer."
  },
  {
    name: "Sanjay — Creative Click",
    members: 1,
    image: eventCreativeClick,
    desc: "Like Sanjay who had the vision to witness every moment with clarity, this event challenges participants to capture moments with meaning, precision, and creative perspective. Go beyond normal photography and bring uniqueness to every click through powerful visual storytelling."
  },
  {
    name: "Chitrakala — Art Attack",
    members: 1,
    image: eventKalakruti,
    desc: "Chitrakala celebrates creativity, imagination, and artistic expression. Transform ideas into art with originality, precision, and visual appeal under time-bound challenges. Express emotions, tell stories through art, and showcase innovation and artistic excellence."
  },
  {
    name: "Eklavya — E-Gaming",
    members: 1,
    image: eventEgaming,
    desc: "Representing focus, dedication, and skill, Eklavya tests participants on speed, strategy, teamwork, and game sense in a competitive environment. Thrilling matches and high-energy challenges bring out the spirit of determination and smart gameplay."
  },
];

const teamEvents = [
  {
    name: "Chakravyuha — Treasure Hunt",
    image: eventTreasureHunt,
    desc: "An exciting challenge testing teamwork, presence of mind, and problem-solving skills. Navigate thrilling clues and tasks that demand quick thinking, smart strategy, and strong coordination under pressure. The team that solves the trail with the best mix of logic and speed emerges victorious."
  },
  {
    name: "Rangbhoomi — Culturals",
    image: eventCulturals,
    desc: "A vibrant celebration of talent, confidence, and stage presence featuring Dance and Ramp Walk. Showcase energy, expression, style, and creativity on stage. Rangbhoomi is a platform for students to shine and create an unforgettable impact through performance and presentation."
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const EventsSection = () => {
  return (
    <section id="events" className="relative py-24">
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-accent text-sm tracking-[0.4em] uppercase text-primary/80 mb-2">The Battlefield Awaits</p>
          <h2 className="font-heading text-3xl md:text-5xl text-gold-gradient mb-4">Events</h2>
          <div className="w-24 h-px bg-primary/50 mx-auto" />
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-xl md:text-2xl text-foreground/90 text-center mb-10"
          >
            Department Events
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualEvents.map((event, i) => (
              <motion.div
                key={event.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 rounded-sm p-5 transition-all duration-500 hover:glow-gold flex flex-col items-center text-center"
              >
                <img src={event.image} alt={event.name} loading="lazy" className="w-full h-auto max-h-32 object-contain mb-4" />
                <span className="font-accent text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {event.members === 1 ? "Individual" : `Team of ${event.members}`}
                </span>
                <p className="font-body text-sm text-muted-foreground italic">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-xl md:text-2xl text-foreground/90 text-center mb-10"
          >
            Group Participation Events
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamEvents.map((event, i) => (
              <motion.div
                key={event.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 rounded-sm p-5 text-center transition-all duration-500 hover:glow-gold flex flex-col items-center"
              >
                <img src={event.image} alt={event.name} loading="lazy" className="w-full h-auto max-h-32 object-contain mb-4" />
                <p className="font-body text-sm text-muted-foreground italic">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
