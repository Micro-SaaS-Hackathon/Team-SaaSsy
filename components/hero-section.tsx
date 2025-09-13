import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Users, Calculator } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Travel, Eat, Share – <span className="text-primary">We Handle the Money</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Revolutionary banking integration for Azerbaijan. Split expenses selectively, settle debts
                automatically, and never worry about who owes what again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Create Your First Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Leobank Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Rabita Bank Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Auto Settlement</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
              <img
                src="/modern-mobile-banking-app-interface-showing-expens.jpg"
                alt="SplitEase App Interface"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              Live Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
