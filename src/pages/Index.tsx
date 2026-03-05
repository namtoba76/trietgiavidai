import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import PhilosophersSection from "@/components/PhilosophersSection";
import LatestInsightsSection from "@/components/LatestInsightsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <PhilosophersSection />
      <LatestInsightsSection />
    </div>
  );
};

export default Index;
