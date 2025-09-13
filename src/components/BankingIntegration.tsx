import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Building, CheckCircle, Lock, ArrowRight } from "lucide-react";
import bankingIntegrationImage from "@/assets/banking-integration.jpg";

const supportedBanks = [
  { name: "Leobank", status: "Live", color: "success" },
  { name: "Rabita Bank", status: "Live", color: "success" },
  { name: "Kapital Bank", status: "Coming Soon", color: "warning" },
  { name: "AccessBank", status: "Coming Soon", color: "warning" },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "256-bit encryption and OAuth 2.0 authentication"
  },
  {
    icon: Lock,
    title: "No Card Details Stored",
    description: "Direct integration means we never see your banking credentials"
  },
  {
    icon: CheckCircle,
    title: "Regulatory Compliant", 
    description: "Licensed and monitored by Azerbaijan Central Bank"
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Real-time settlement between connected bank accounts"
  }
];

export const BankingIntegration = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">Seamless Banking</span> Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The first expense splitting app with direct bank integration in Azerbaijan. 
            Secure, fast, and completely automated money transfers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Banking Integration Image */}
          <div className="order-2 lg:order-1 fade-in-up">
            <img 
              src={bankingIntegrationImage} 
              alt="Banking Integration Security" 
              className="w-full h-auto rounded-2xl elevated-card"
            />
          </div>

          {/* Right Column - Security Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Your Money, Your Bank, Your Peace of Mind
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Built with enterprise-level security and compliance standards. 
                We connect directly to your bank's API for instant, secure transfers.
              </p>
            </div>

            {securityFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`flex items-start gap-4 stagger-${index + 1} fade-in-up interactive-demo`}
              >
                <div className="w-12 h-12 bg-banking-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-banking-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Banks */}
        <div className="fade-in-up">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Supported Banks & Financial Institutions
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedBanks.map((bank, index) => (
              <Card key={bank.name} className={`elevated-card text-center stagger-${index + 1} fade-in-up`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-banking-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-banking-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{bank.name}</h4>
                  <Badge 
                    variant={bank.color === "success" ? "default" : "secondary"}
                    className={bank.color === "success" ? "bg-success text-success-foreground" : ""}
                  >
                    {bank.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Process */}
        <div className="mt-20 fade-in-up">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            How Bank Integration Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-banking-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h4 className="font-semibold text-lg mb-2">Connect Securely</h4>
              <p className="text-muted-foreground">
                Link your bank account using OAuth 2.0 - we never see your login details
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h4 className="font-semibold text-lg mb-2">Real-time Sync</h4>
              <p className="text-muted-foreground">
                Your account balance and transaction history sync automatically
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h4 className="font-semibold text-lg mb-2">Auto Settlement</h4>
              <p className="text-muted-foreground">
                When you close an event, debts are settled instantly via bank transfers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};