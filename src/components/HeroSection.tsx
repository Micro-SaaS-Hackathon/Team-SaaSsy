import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-banking-app.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Travel, Eat, Share –<br />
                <span className="text-gradient-accent">We Handle the Money</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed stagger-1 fade-in-up">
                The first expense splitting app fully integrated with Azerbaijan's banks. 
                Automatic debt settlement, no more awkward money conversations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start stagger-2 fade-in-up">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Create Your First Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-white/80 stagger-3 fade-in-up">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5K+</div>
                  <div className="text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">₼2.5M</div>
                  <div className="text-sm">Processed Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3 Banks</div>
                  <div className="text-sm">Integrated</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative stagger-4 fade-in-up">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Banking App Interface" 
                className="w-full h-auto rounded-2xl shadow-hero elevated-card"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce-in">
              <span className="text-2xl">₼</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <span className="text-xl">✓</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path d="m0,60L48,56.7C96,53,192,47,288,53.3C384,60,480,80,576,85C672,90,768,80,864,71.7C960,63,1056,57,1152,58.3L1200,60L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
                fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};