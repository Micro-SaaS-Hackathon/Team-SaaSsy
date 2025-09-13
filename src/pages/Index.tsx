import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { DashboardDemo } from "@/components/DashboardDemo";
import { BankingIntegration } from "@/components/BankingIntegration";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <InteractiveDemo />
      <DashboardDemo />
      <BankingIntegration />
      <HowItWorks />
      <FinalCTA />
    </main>
  );
};

export default Index;
