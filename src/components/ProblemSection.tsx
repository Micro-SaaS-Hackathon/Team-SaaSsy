import problemImage from "@/assets/problem-illustration.jpg";

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Problem Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={problemImage} 
              alt="Group struggling with expense splitting" 
              className="w-full h-auto rounded-2xl elevated-card"
            />
          </div>
          
          {/* Right Column - Problem Statement */}
          <div className="order-1 lg:order-2">
            <div className="fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The <span className="text-expense-red">Nightmare</span> of 
                <br />Group Expenses
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Every group outing becomes a mathematical headache. Who paid for dinner? 
                How much did everyone owe for the hotel? Manual calculations, forgotten expenses, 
                and awkward money conversations ruin the fun.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 stagger-1 fade-in-up">
                  <div className="w-12 h-12 bg-expense-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-expense-red text-xl font-bold">73%</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Forget Expenses</h3>
                    <p className="text-muted-foreground">Of people forget to track shared expenses during trips</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 stagger-2 fade-in-up">
                  <div className="w-12 h-12 bg-expense-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-expense-red text-xl font-bold">45min</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Wasted Time</h3>
                    <p className="text-muted-foreground">Average time spent calculating who owes what after each outing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 stagger-3 fade-in-up">
                  <div className="w-12 h-12 bg-expense-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-expense-red text-xl font-bold">₼127</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Money Disputes</h3>
                    <p className="text-muted-foreground">Average amount of unresolved debt per person in friend groups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};