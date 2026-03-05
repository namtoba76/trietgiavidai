import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import PhilosophersSection from "@/components/PhilosophersSection";
import QuotesSection from "@/components/QuotesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <PhilosophersSection />
      <QuotesSection />
      <CTASection />
    </div>
  );
};

export default Index;
