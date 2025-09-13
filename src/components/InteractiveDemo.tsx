import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Plus, DollarSign, Users, Calculator } from "lucide-react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  paidBy: string;
  category: string;
  participants: string[];
}

const mockExpenses: Expense[] = [
  { id: 1, description: "Hotel Booking", amount: 450, paidBy: "Anar", category: "Accommodation", participants: ["Anar", "Leyla", "Elvin"] },
  { id: 2, description: "Restaurant Dinner", amount: 180, paidBy: "Leyla", category: "Food", participants: ["Anar", "Leyla", "Elvin"] },
  { id: 3, description: "Fuel for Car", amount: 90, paidBy: "Elvin", category: "Transport", participants: ["Anar", "Leyla", "Elvin"] },
  { id: 4, description: "Grocery Shopping", amount: 75, paidBy: "Anar", category: "Food", participants: ["Anar", "Leyla", "Elvin"] },
];

const participants = ["Anar", "Leyla", "Elvin"];

export const InteractiveDemo = () => {
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);
  const [selectedExpense, setSelectedExpense] = useState<number | null>(null);
  
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const perPersonAmount = totalAmount / participants.length;
  
  const calculateBalances = () => {
    const balances: Record<string, number> = {};
    participants.forEach(person => {
      balances[person] = 0;
    });
    
    expenses.forEach(expense => {
      const splitAmount = expense.amount / expense.participants.length;
      balances[expense.paidBy] += expense.amount - splitAmount;
      expense.participants.forEach(participant => {
        if (participant !== expense.paidBy) {
          balances[participant] -= splitAmount;
        }
      });
    });
    
    return balances;
  };
  
  const balances = calculateBalances();
  
  const addMockExpense = () => {
    const newExpense: Expense = {
      id: expenses.length + 1,
      description: "Coffee Break",
      amount: 45,
      paidBy: "Leyla",
      category: "Food",
      participants: ["Anar", "Leyla", "Elvin"]
    };
    setExpenses([...expenses, newExpense]);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">Live Demo:</span> Gabala Weekend Trip
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how expenses are tracked and automatically calculated in real-time. 
            Click around to see the magic happen!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Expenses List */}
          <div className="lg:col-span-2">
            <Card className="elevated-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  Trip Expenses
                </CardTitle>
                <Button variant="cta" size="sm" onClick={addMockExpense}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Expense
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expenses.map((expense) => (
                    <div 
                      key={expense.id}
                      className={`p-4 rounded-lg border transition-all cursor-pointer interactive-demo ${
                        selectedExpense === expense.id 
                          ? 'border-accent bg-accent/5' 
                          : 'border-border hover:border-accent/50'
                      }`}
                      onClick={() => setSelectedExpense(selectedExpense === expense.id ? null : expense.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{expense.description}</h4>
                          <p className="text-sm text-muted-foreground">Paid by {expense.paidBy}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-foreground">₼{expense.amount}</div>
                          <Badge variant="secondary">{expense.category}</Badge>
                        </div>
                      </div>
                      
                      {selectedExpense === expense.id && (
                        <div className="mt-4 pt-4 border-t border-border animate-fade-in-up">
                          <div className="flex items-center gap-2 mb-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Split between:</span>
                          </div>
                          <div className="flex gap-2">
                            {expense.participants.map(participant => (
                              <Badge key={participant} variant={participant === expense.paidBy ? "default" : "outline"}>
                                {participant} {participant === expense.paidBy && "(Paid)"}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-3 text-sm">
                            <strong>₼{(expense.amount / expense.participants.length).toFixed(2)}</strong> per person
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Summary & Balances */}
          <div className="space-y-6">
            {/* Trip Summary */}
            <Card className="elevated-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-success" />
                  Trip Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Spent:</span>
                    <span className="font-bold text-xl">₼{totalAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per Person:</span>
                    <span className="font-semibold">₼{perPersonAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants:</span>
                    <span>{participants.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Balance Settlement */}
            <Card className="elevated-card">
              <CardHeader>
                <CardTitle className="text-success">Final Balances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(balances).map(([person, balance]) => (
                    <div key={person} className="flex justify-between items-center">
                      <span className="font-medium">{person}</span>
                      <span className={`font-bold ${
                        balance > 0 ? 'text-success' : balance < 0 ? 'text-expense-red' : 'text-muted-foreground'
                      }`}>
                        {balance > 0 ? '+' : ''}₼{balance.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <Button variant="success" className="w-full" size="lg">
                    Process Automatic Payments
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Settlements will be processed via bank integration
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};