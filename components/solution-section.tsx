import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      number: "01",
      title: "Create Event",
      description: "Start a new trip, dinner, or group activity in seconds",
    },
    {
      number: "02",
      title: "Add Participants",
      description: "Import friends from your bank contacts or invite via phone",
    },
    {
      number: "03",
      title: "Log Expenses",
      description: "Add expenses with amount, category, and date",
    },
    {
      number: "04",
      title: "Choose Who Shares",
      description: "Select which participants split each specific expense",
    },
    {
      number: "05",
      title: "Auto Calculate",
      description: "Real-time debt calculation with visual summaries",
    },
    {
      number: "06",
      title: "Auto Pay",
      description: "Automatic bank transfers settle all debts instantly",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            <span className="text-primary">Selective Splitting</span> Made Simple
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our revolutionary approach lets you choose exactly who shares each expense, then handles everything
            automatically through your bank.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="flex justify-center pt-2">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Lightning Fast</h3>
            <p className="text-muted-foreground">Set up events and split expenses in under 30 seconds</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Bank-Grade Security</h3>
            <p className="text-muted-foreground">Direct integration with Azerbaijan's leading banks</p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Native Integration</h3>
            <p className="text-muted-foreground">Works seamlessly within your existing banking app</p>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Try Interactive Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
