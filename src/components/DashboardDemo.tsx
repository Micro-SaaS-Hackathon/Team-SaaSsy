import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, CreditCard, Users, Calendar } from "lucide-react";

const expenseData = [
  { name: "Food & Dining", value: 340, color: "#ef4444" },
  { name: "Accommodation", value: 450, color: "#3b82f6" },
  { name: "Transport", value: 155, color: "#10b981" },
  { name: "Activities", value: 125, color: "#f59e0b" },
  { name: "Shopping", value: 95, color: "#8b5cf6" },
];

const participantData = [
  { name: "Anar", spent: 425, owes: 45, balance: -45 },
  { name: "Leyla", spent: 380, owes: 0, balance: 158 },
  { name: "Elvin", spent: 360, owes: 113, balance: -113 },
];

const COLORS = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

export const DashboardDemo = () => {
  const totalSpent = expenseData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient-primary">Smart Analytics</span> Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant insights into your group spending with beautiful visualizations 
            and real-time balance tracking.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="elevated-card fade-in-up stagger-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
                  <p className="text-2xl font-bold text-foreground">₼{totalSpent}</p>
                </div>
                <div className="w-12 h-12 bg-banking-blue/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-banking-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevated-card fade-in-up stagger-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Transactions</p>
                  <p className="text-2xl font-bold text-foreground">27</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevated-card fade-in-up stagger-3">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Participants</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevated-card fade-in-up stagger-4">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Trip Days</p>
                  <p className="text-2xl font-bold text-foreground">4</p>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Spending by Category - Pie Chart */}
          <Card className="elevated-card fade-in-up">
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`₼${value}`, 'Amount']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 space-y-2">
                {expenseData.map((category, index) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="font-medium">₼{category.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Individual Balances - Bar Chart */}
          <Card className="elevated-card fade-in-up">
            <CardHeader>
              <CardTitle>Individual Balances</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={participantData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₼${value}`, 'Amount']} />
                    <Bar dataKey="spent" fill="hsl(var(--banking-blue))" name="Total Spent" />
                    <Bar dataKey="balance" fill="hsl(var(--accent))" name="Final Balance" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 space-y-3">
                {participantData.map((participant) => (
                  <div key={participant.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-banking-blue text-white rounded-full flex items-center justify-center font-semibold">
                        {participant.name[0]}
                      </div>
                      <div>
                        <p className="font-medium">{participant.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Spent ₼{participant.spent}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={participant.balance > 0 ? "default" : participant.balance < 0 ? "destructive" : "secondary"}
                        className="font-semibold"
                      >
                        {participant.balance > 0 ? '+' : ''}₼{participant.balance}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {participant.balance > 0 ? 'Gets back' : participant.balance < 0 ? 'Owes' : 'Even'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};