import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ServicesSection from "@/components/ServicesSection";
import JourneySection from "@/components/JourneySection";
import EducationSection from "@/components/EducationSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import EventHighlight from "@/components/EventHighlight";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ServicesSection />
      <JourneySection />
      <EducationSection />
      <ExpertiseSection />
      <EventHighlight />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
