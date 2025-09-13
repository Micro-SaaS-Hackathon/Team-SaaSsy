"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Users, Calculator } from "lucide-react"

export function HeroSection() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Banking Integration for <span className="text-primary">Smart Expense Splitting</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Micro SaaS solution for Azerbaijan banks. Integrate selective expense splitting directly into M10,
                Leobank, Unibank, and other banking apps. Reduce customer support calls and increase user engagement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToDemo}
              >
                Add Your First Expense
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToDemo}>
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">M10 & Leobank Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Unibank Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calculator className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">API-First Solution</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8">
              <img
                src="/mobile-banking-interface.png"
                alt="SplitEase Banking Integration - Mobile Banking App with Split Bill Feature"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              B2B Solution
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
