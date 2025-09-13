import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  UserPlus, 
  Receipt, 
  Calculator, 
  CreditCard, 
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Smartphone,
    title: "Create Event",
    description: "Start a new expense group for your trip, dinner, or any shared activity",
    details: [
      "Name your event (e.g., 'Gabala Weekend')",
      "Set event duration and description",
      "Choose privacy settings"
    ],
    bgColor: "bg-banking-blue",
    textColor: "text-white"
  },
  {
    number: 2,
    icon: UserPlus,
    title: "Add Participants",
    description: "Invite friends from your bank contacts or via phone/email",
    details: [
      "Import from bank contacts",
      "Send SMS/email invitations",
      "Set spending permissions"
    ],
    bgColor: "bg-accent",
    textColor: "text-white"
  },
  {
    number: 3,
    icon: Receipt,
    title: "Log Expenses",
    description: "Add expenses in real-time with photos, categories, and participant splits",
    details: [
      "Snap receipt photos for auto-entry",
      "Categorize by type (food, transport, etc.)",
      "Choose who participated in each expense"
    ],
    bgColor: "bg-success",
    textColor: "text-white"
  },
  {
    number: 4,
    icon: Calculator,
    title: "AI Calculates",
    description: "Our smart algorithm optimizes debt settlement to minimize transactions",
    details: [
      "Real-time balance calculations",
      "Optimal debt settlement paths",
      "Visual spending breakdowns"
    ],
    bgColor: "bg-warning",
    textColor: "text-foreground"
  },
  {
    number: 5,
    icon: CreditCard,
    title: "Auto Payment",
    description: "Close the event and all debts are automatically settled via bank integration",
    details: [
      "One-click debt settlement",
      "Bank-to-bank transfers",
      "Transaction confirmations"
    ],
    bgColor: "bg-expense-red",
    textColor: "text-white"
  },
  {
    number: 6,
    icon: CheckCircle,
    title: "Everyone's Happy",
    description: "No more IOUs, no forgotten debts, no awkward money conversations",
    details: [
      "Instant payment confirmations",
      "Trip expense reports",
      "Happier friendships!"
    ],
    bgColor: "bg-money-green",
    textColor: "text-white"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From creating your first event to automatic payment settlement - 
            see exactly how our app transforms group expense management.
          </p>
          
          <Button variant="outline" size="lg" className="mb-8">
            <Play className="mr-2 h-5 w-5" />
            Watch Video Demo
          </Button>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-banking-blue via-accent to-success rounded-full"></div>
          
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative mb-16 lg:mb-20 fade-in-up stagger-${index + 1}`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Step Content */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <Card className="elevated-card interactive-demo">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center`}>
                          <step.icon className={`h-8 w-8 ${step.textColor}`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            Step {step.number}
                          </Badge>
                          <h3 className="text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Step Visual/Mockup */}
                <div className={`${index % 2 === 0 ? '' : 'lg:col-start-1'} text-center`}>
                  <div className={`w-80 h-80 mx-auto ${step.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <step.icon className={`h-32 w-32 ${step.textColor} opacity-60`} />
                  </div>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-6 h-6 ${step.bgColor} rounded-full border-4 border-background shadow-lg`}></div>
              </div>
              
              {/* Step Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8">
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-16 fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Group Expenses?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already simplified their group spending. 
            Start your first event in under 30 seconds.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-12 py-4">
            Start Your Free Event Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};