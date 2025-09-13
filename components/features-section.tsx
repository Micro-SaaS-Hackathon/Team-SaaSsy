import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calculator, CreditCard, Bell, BarChart3, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Selective Expense Splitting",
      description: "Choose exactly which participants share each expense. Perfect for complex group dynamics.",
      badge: "Core Feature",
      demo: "Live Demo Available",
    },
    {
      icon: Calculator,
      title: "Real-Time Debt Calculation",
      description: "Watch debts update instantly as expenses are added. Visual charts show who owes what.",
      badge: "Smart Algorithm",
      demo: "Interactive Charts",
    },
    {
      icon: CreditCard,
      title: "Automatic Bank Settlement",
      description: "One-click debt settlement through direct bank integration. No manual transfers needed.",
      badge: "Bank Integration",
      demo: "Secure & Instant",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get alerts for new expenses, debt updates, and settlement confirmations.",
      badge: "Stay Updated",
      demo: "Push Notifications",
    },
    {
      icon: BarChart3,
      title: "Expense Analytics",
      description: "Detailed breakdowns by category, person, and time period. Export reports for records.",
      badge: "Insights",
      demo: "Visual Reports",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security. Compliant with Azerbaijan banking regulations.",
      badge: "Secure",
      demo: "Certified Safe",
    },
  ]

  return (
    <section id="features" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Powerful Features for <span className="text-primary">Smart Splitting</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Everything you need to manage group expenses effortlessly, from selective splitting to automatic settlement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {feature.badge}
                </Badge>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>

              <div className="pt-2">
                <span className="text-primary text-sm font-medium">{feature.demo}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-secondary rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
            </div>
            <span className="text-primary font-medium">Trusted by 10,000+ users across Azerbaijan</span>
          </div>
        </div>
      </div>
    </section>
  )
}
