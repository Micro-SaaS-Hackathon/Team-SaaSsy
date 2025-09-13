import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Smartphone, Mail, Star } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Ready to Revolutionize <span className="text-primary">Group Expenses</span>?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Join thousands of users across Azerbaijan who have already simplified their group expense management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Smartphone className="mr-2 h-5 w-5" />
                Create Your First Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">₼2.5M+</div>
                <div className="text-sm text-muted-foreground">Expenses Managed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="text-2xl font-bold text-primary">4.9</span>
                </div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                🏆 <strong>Hackathon Ready</strong> • Built for judges and investors •
                <span className="text-primary font-medium"> Live demo available</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
