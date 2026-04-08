import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import BrochureSection from "@/components/BrochureSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 z-0 bg-background/85" />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <EventsSection />
        <BrochureSection />
        <RegistrationSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
