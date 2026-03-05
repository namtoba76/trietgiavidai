import Navbar from "@/components/Navbar";
import QuotesSection from "@/components/QuotesSection";

const ThoughtsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <QuotesSection />
      </div>
    </div>
  );
};

export default ThoughtsPage;
