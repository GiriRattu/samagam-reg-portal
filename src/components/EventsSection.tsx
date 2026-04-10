import { motion } from "framer-motion";
import eventBestManager from "@/assets/event-best-manager.png";
import eventHumanResources from "@/assets/event-human-resources.png";
import eventMarketing from "@/assets/event-marketing.png";
import eventFinance from "@/assets/event-finance.png";
import eventPublicRelations from "@/assets/event-public-relations.png";
import eventCreativeClick from "@/assets/event-photography.png";
import eventKalakruti from "@/assets/event-kalakruti.png";
import eventEgaming from "@/assets/event-egaming.png";
import eventTreasureHunt from "@/assets/event-team-events.png";
import eventCulturals from "@/assets/event-group-dance.png";

const individualEvents = [
  {
    name: "Best Manager",
    members: 1,
    image: eventBestManager,
    desc: "A rigorous multi-round competition testing leadership, decision-making, aptitude, stress management, and overall managerial competence. Rounds include aptitude tests, extempore, stress interviews, and task-based challenges."
  },
  {
    name: "Human Resources",
    members: 2,
    image: eventHumanResources,
    desc: "Explore the world of people management through case study analysis, role plays, HR policy drafting, and mock recruitment drives. Demonstrate strategic thinking in talent acquisition and employee engagement."
  },
  {
    name: "Marketing",
    members: 2,
    image: eventMarketing,
    desc: "Showcase your marketing brilliance through brand strategy presentations, ad-making, product launches, and live pitches. Create compelling campaigns and prove your market domination skills."
  },
  {
    name: "Finance",
    members: 2,
    image: eventFinance,
    desc: "Navigate the world of financial analysis, budgeting, stock market simulation, and investment strategies. Test your acumen in financial planning, risk assessment, and wealth management."
  },
  {
    name: "Public Relations",
    members: 2,
    image: eventPublicRelations,
    desc: "Craft press releases, manage crisis communication, conduct mock press conferences, and build brand reputation. Demonstrate your ability to shape public perception and manage media relations."
  },
  {
    name: "Creative Click",
    members: 1,
    image: eventCreativeClick,
    desc: "Capture compelling stories through your lens in themed photography challenges. Express creativity, composition skills, and visual storytelling in timed rounds with surprise themes."
  },
  {
    name: "Kalakruti",
    members: 2,
    image: eventKalakruti,
    desc: "Unleash artistic expression through poster-making, rangoli, collage art, and creative installations. A celebration of visual arts where imagination meets craftsmanship on the battlefield."
  },
  {
    name: "E-Gaming",
    members: 2,
    image: eventEgaming,
    desc: "Compete in intense esports tournaments across popular titles. Strategize, coordinate with your teammate, and battle through knockout rounds to claim digital supremacy."
  },
];

const teamEvents = [
  {
    name: "Treasure Hunt",
    image: eventTreasureHunt,
    desc: "Navigate the Chakravyuha — a campus-wide treasure hunt with cryptic clues, puzzles, and physical challenges. Teams race against time to decode riddles and uncover hidden treasures."
  },
  {
    name: "Culturals",
    image: eventCulturals,
    desc: "A grand showcase of group dance performances and ramp walk — combining rhythm, choreography, fashion, and stage presence into one spectacular cultural extravaganza."
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
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
                  Team of {event.members}
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
