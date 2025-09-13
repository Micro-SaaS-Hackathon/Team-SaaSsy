import { Button } from "@/components/ui/button";
import { Users, Calculator, CreditCard, Zap } from "lucide-react";
import solutionImage from "@/assets/solution-illustration.jpg";

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Your <span className="text-gradient-primary">Money Butler</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four simple steps to never worry about group expenses again. 
            Our AI handles the math, your bank handles the money.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Solution Steps */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 stagger-1 fade-in-up interactive-demo">
              <div className="w-16 h-16 bg-banking-blue rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">1. Create Event</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Name your trip, dinner, or outing. Invite friends from your bank contacts 
                  or via phone/email. Everyone gets instant access.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 stagger-2 fade-in-up interactive-demo">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">2. Log Expenses</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Snap photos of receipts or manually add expenses. Categorize by fuel, 
                  food, accommodation. Everyone sees real-time updates.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 stagger-3 fade-in-up interactive-demo">
              <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">3. AI Calculates</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our smart algorithm instantly calculates optimal debt settlement. 
                  Minimizes transactions and shows exactly who owes whom.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 stagger-4 fade-in-up interactive-demo">
              <div className="w-16 h-16 bg-warning rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">4. Auto Payment</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Close the event and debts are automatically settled via bank integration. 
                  No manual transfers, no forgotten IOUs.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Solution Image */}
          <div className="relative stagger-4 fade-in-up">
            <img 
              src={solutionImage} 
              alt="Happy friends with solved expenses" 
              className="w-full h-auto rounded-2xl elevated-card"
            />
            
            {/* Success Badge */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-6 py-3 rounded-full font-bold shadow-lg animate-bounce-in">
              Problem Solved! ✨
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center fade-in-up">
          <Button variant="cta" size="lg" className="text-lg px-12 py-4">
            Try It Free - No Credit Card Required
          </Button>
        </div>
      </div>
    </section>
  );
};