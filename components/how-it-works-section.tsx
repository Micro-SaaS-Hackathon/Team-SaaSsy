import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Smartphone, Users, Receipt, Calculator, CreditCard, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Smartphone,
      title: "Open Your Banking App",
      description: "Access SplitEase directly within your Leobank or Rabita Bank mobile app",
      badge: "Native Integration",
      mockup: "Banking app interface with SplitEase integration",
    },
    {
      icon: Users,
      title: "Create Event & Add Friends",
      description: "Start a new event and invite participants from your contacts or via phone number",
      badge: "Quick Setup",
      mockup: "Event creation screen with contact selection",
    },
    {
      icon: Receipt,
      title: "Log Expenses as They Happen",
      description: "Add expenses with photos, categories, and amounts. Choose who shares each expense",
      badge: "Selective Splitting",
      mockup: "Expense entry form with participant selection",
    },
    {
      icon: Calculator,
      title: "Watch Real-Time Calculations",
      description: "See debts update instantly with visual charts and detailed breakdowns",
      badge: "Live Updates",
      mockup: "Dashboard showing real-time debt calculations",
    },
    {
      icon: CreditCard,
      title: "One-Click Settlement",
      description: "Settle all debts automatically through secure bank transfers",
      badge: "Automatic Payment",
      mockup: "Settlement confirmation screen",
    },
    {
      icon: CheckCircle,
      title: "Everyone Gets Notified",
      description: "All participants receive confirmation of payments and final balances",
      badge: "Complete",
      mockup: "Notification and confirmation screens",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            How <span className="text-primary">SplitEase</span> Works
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            From expense logging to automatic settlement, see how our seamless process eliminates the hassle of group
            expense management.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <Badge variant="secondary">{step.badge}</Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold flex items-center gap-3">
                        <step.icon className="h-6 w-6 text-primary" />
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6">
                      <img
                        src={`/abstract-geometric-shapes.png?height=300&width=400&query=${step.mockup}`}
                        alt={step.title}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-border"></div>
                  <ArrowRight className="h-6 w-6 text-primary -mt-1 bg-background" />
                  <div className="w-px h-8 bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Average setup time: Under 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
