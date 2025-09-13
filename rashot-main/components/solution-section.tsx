"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      number: "1",
      title: "Bank Integration Setup",
      description: "Quick API integration into existing banking infrastructure",
    },
    {
      number: "2",
      title: "User Onboarding",
      description: "Customers discover the feature within their banking app",
    },
    {
      number: "3",
      title: "Event Creation",
      description: "Users create expense groups for trips, dinners, or activities",
    },
    {
      number: "4",
      title: "Selective Splitting",
      description: "Choose which participants share each specific expense",
    },
    {
      number: "5",
      title: "Real-time Calculation",
      description: "Automatic debt calculation with visual summaries",
    },
    {
      number: "6",
      title: "Automated Settlement",
      description: "One-click bank transfers settle all debts instantly",
    },
  ]

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="roadmap" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            <span className="text-primary">Selective Splitting</span> Roadmap
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our step-by-step process integrates seamlessly into Azerbaijan banking apps, providing customers with
            revolutionary expense management capabilities.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6">
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold border-4 border-background bg-primary text-primary-foreground">
                  {step.number}
                </div>

                <Card className="flex-1 p-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Quick Integration</h3>
            <p className="text-muted-foreground">Deploy in existing banking apps within 2 weeks</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Regulatory Compliant</h3>
            <p className="text-muted-foreground">Meets Azerbaijan Central Bank security standards</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">White-Label Ready</h3>
            <p className="text-muted-foreground">Customizable UI matching your bank's branding</p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={scrollToDemo}>
            View Interactive Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
