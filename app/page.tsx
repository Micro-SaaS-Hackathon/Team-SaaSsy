import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { DashboardDemo } from "@/components/dashboard-demo"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DashboardDemo />
        <HowItWorksSection />
        <CTASection />
      </main>
    </div>
  )
}
