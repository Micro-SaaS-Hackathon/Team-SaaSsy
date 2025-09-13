import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Star, 
  Shield, 
  Users, 
  TrendingUp,
  Mail,
  Smartphone
} from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Anar Məmmədov",
    role: "Software Engineer",
    company: "SOCAR",
    rating: 5,
    text: "Finally! No more awkward conversations about money after group dinners. The bank integration is seamless.",
    avatar: "A"
  },
  {
    name: "Leyla Hasanova",
    role: "Marketing Manager", 
    company: "ASAN Service",
    rating: 5,
    text: "Perfect for our team outings. Automatic settlement saved us hours of manual calculations.",
    avatar: "L"
  },
  {
    name: "Elvin Quliyev",
    role: "Entrepreneur",
    company: "TechStart",
    rating: 5,
    text: "Game changer for organizing events. My friends love how easy it is to split expenses now.",
    avatar: "E"
  }
];

const features = [
  { icon: Shield, text: "Bank-grade security" },
  { icon: Users, text: "Unlimited participants" },
  { icon: TrendingUp, text: "Smart debt optimization" },
  { icon: Smartphone, text: "Mobile & web apps" }
];

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the email to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-banking-blue via-banking-blue to-accent text-white">
      <div className="container mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-20 fade-in-up">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            🚀 Launch Special - Free for First 1000 Users
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Never Split Bills 
            <br />Manually Again?
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the financial revolution in Azerbaijan. Experience the future of group expense management 
            with seamless bank integration and automatic debt settlement.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-12 py-4 bg-white text-banking-blue hover:bg-white/90 shadow-xl">
              Create Your First Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-12 py-4 border-white/30 text-white hover:bg-white/10">
              Schedule Demo Call
            </Button>
          </div>
          
          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <feature.icon className="h-5 w-5" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="max-w-2xl mx-auto mb-20 fade-in-up">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Mail className="h-12 w-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Early Access
                </h3>
                <p className="text-white/80">
                  Be among the first to experience hassle-free group expenses
                </p>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="bg-accent hover:bg-accent/90"
                    disabled={!email}
                  >
                    Join Waitlist
                  </Button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-8 w-8 text-white rotate-45" />
                  </div>
                  <p className="text-white font-semibold">
                    Thanks! We'll be in touch soon.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            What Early Users Are Saying
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-white/10 border-white/20 backdrop-blur-sm elevated-card stagger-${index + 1} fade-in-up`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-semibold text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/70">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Stats */}
        <div className="text-center mt-20 fade-in-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">₼2.5M+</div>
              <div className="text-white/80">Processed Monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5,000+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <div className="text-white/80">Partner Banks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};