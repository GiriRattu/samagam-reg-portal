import { motion } from "framer-motion";
import eventBestManager from "@/assets/event-best-manager.png";
import eventHumanResources from "@/assets/event-human-resources.png";
import eventMarketing from "@/assets/event-marketing.png";
import eventFinance from "@/assets/event-finance.png";
import eventPublicRelations from "@/assets/event-public-relations.png";
import eventPhotography from "@/assets/event-photography.png";
import eventKalakruti from "@/assets/event-kalakruti.png";
import eventEgaming from "@/assets/event-egaming.png";
import eventTeamEvents from "@/assets/event-team-events.png";
import eventGroupDance from "@/assets/event-group-dance.png";
import eventRampWalk from "@/assets/event-ramp-walk.png";
import chakravyuha from "@/assets/chakravyuha.png";

const individualEvents = [
  { name: "Best Manager", members: 1, image: eventBestManager, desc: "Prove your mettle as the ultimate leader. One warrior, one throne." },
  { name: "Human Resources", members: 2, image: eventHumanResources, desc: "Master the art of people management. Build empires through wisdom." },
  { name: "Marketing", members: 2, image: eventMarketing, desc: "Unleash your strategic prowess. Conquer markets with divine persuasion." },
  { name: "Finance", members: 2, image: eventFinance, desc: "Navigate the vaults of wealth. Command resources with foresight." },
  { name: "Public Relations", members: 2, image: eventPublicRelations, desc: "Shape narratives and build alliances. The voice of the empire." },
  { name: "Photography", members: 1, image: eventPhotography, desc: "Capture moments that echo through eternity. One frame, one story." },
  { name: "Kalakruti", members: 2, image: eventKalakruti, desc: "Express the soul through art. Creative mastery on the battlefield." },
  { name: "E-Gaming", members: 2, image: eventEgaming, desc: "Dominate the digital arena. Virtual warriors, real glory." },
];

const teamEvents = [
  { name: "Team Events", image: eventTeamEvents, desc: "Unite as one force. Collective strength conquers all challenges." },
  { name: "Group Dance", image: eventGroupDance, desc: "Move in harmony. Let rhythm become your weapon of expression." },
  { name: "Ramp Walk", image: eventRampWalk, desc: "Walk the path of style. Command the stage with grace and power." },
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
    <section id="events" className="relative py-24 bg-background">
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

        {/* Chakravyuha - Treasure Hunt highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <img src={chakravyuha} alt="Chakravyuha - Treasure Hunt" loading="lazy" className="h-28 md:h-40 w-auto" />
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
                className="group relative bg-card border border-border hover:border-primary/40 rounded-sm p-5 transition-all duration-500 hover:glow-gold flex flex-col items-center text-center"
              >
                <img src={event.image} alt={event.name} loading="lazy" width={896} height={512} className="w-full h-auto max-h-32 object-contain mb-4" />
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamEvents.map((event, i) => (
              <motion.div
                key={event.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-card border border-primary/20 hover:border-primary/50 rounded-sm p-5 text-center transition-all duration-500 hover:glow-gold flex flex-col items-center"
              >
                <img src={event.image} alt={event.name} loading="lazy" width={896} height={512} className="w-full h-auto max-h-32 object-contain mb-4" />
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
