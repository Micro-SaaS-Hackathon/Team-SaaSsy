import { Card } from "@/components/ui/card"
import { AlertCircle, Clock, Calculator, Users } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Who Paid What?",
      description: "Friends constantly forget who covered dinner, fuel, or hotel costs during group trips.",
    },
    {
      icon: Clock,
      title: "Manual Calculations",
      description: "Hours spent calculating complex splits, especially when not everyone shares every expense.",
    },
    {
      icon: Calculator,
      title: "Settlement Confusion",
      description: "Awkward conversations about money and delayed payments strain relationships.",
    },
    {
      icon: Users,
      title: "Group Coordination",
      description: "Managing expenses across multiple people and events becomes overwhelming.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">The Problem with Group Expenses</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Traditional expense splitting creates friction, confusion, and awkward money conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-lg">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium">
            <AlertCircle className="h-4 w-4" />
            Over 50% of holiday disputes between friends come down to money
          </div>
          <p className="text-xs text-muted-foreground mt-2 opacity-60">Source: Outlook India</p>
        </div>
      </div>
    </section>
  )
}
