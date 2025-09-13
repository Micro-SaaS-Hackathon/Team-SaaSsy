"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mail, TrendingUp, Users, Zap } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Ready to Integrate <span className="text-primary">Rashot</span>?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                We invite M10, Leobank, Unibank, and other leading Azerbaijani banks to join us in powering the next
                generation of expense management through our Micro SaaS solution.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() =>
                  (window.location.href =
                    "mailto:matinhuseynzade@gmail.com?subject=SplitEase Banking Integration Inquiry")
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">40%</span>
                </div>
                <div className="text-sm text-muted-foreground">Potential Cost Reduction</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">3x</span>
                </div>
                <div className="text-sm text-muted-foreground">Faster Expense Settlement</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">85%</span>
                </div>
                <div className="text-sm text-muted-foreground">User Satisfaction Increase</div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                🏆 <strong>Hackathon Prototype</strong> • Built for banking integration •
                <span className="text-primary font-medium"> API-first architecture</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
