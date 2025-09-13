"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Users, Plus, DollarSign, TrendingUp } from "lucide-react"

export function DashboardDemo() {
  const [selectedExpense, setSelectedExpense] = useState(0)

  const expenses = [
    {
      id: 1,
      description: "Dinner at Sahil Restaurant",
      amount: 120,
      paidBy: "Anar",
      sharedBy: ["Anar", "Leyla", "Rashad"],
      category: "Food",
      date: "Dec 15",
    },
    {
      id: 2,
      description: "Fuel for road trip",
      amount: 80,
      paidBy: "Leyla",
      sharedBy: ["Leyla", "Rashad"],
      category: "Transport",
      date: "Dec 15",
    },
    {
      id: 3,
      description: "Hotel booking",
      amount: 200,
      paidBy: "Rashad",
      sharedBy: ["Anar", "Leyla", "Rashad"],
      category: "Accommodation",
      date: "Dec 16",
    },
    {
      id: 4,
      description: "Groceries",
      amount: 45,
      paidBy: "Anar",
      sharedBy: ["Anar", "Leyla"],
      category: "Food",
      date: "Dec 16",
    },
  ]

  const pieData = [
    { name: "Food", value: 165, color: "#10b981" },
    { name: "Transport", value: 80, color: "#059669" },
    { name: "Accommodation", value: 200, color: "#34d399" },
  ]

  const balanceData = [
    { name: "Anar", owes: 0, owed: 35 },
    { name: "Leyla", owes: 15, owed: 0 },
    { name: "Rashad", owes: 20, owed: 0 },
  ]

  return (
    <section id="demo" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Interactive <span className="text-primary">Dashboard Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Experience how SplitEase handles complex expense splitting in real-time. Click around to see the magic
            happen.
          </p>
        </div>

        <div className="bg-card rounded-2xl border shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">Baku Weekend Trip</h3>
              <p className="text-muted-foreground">3 participants • ₼445 total</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/10 text-primary">Active Event</Badge>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-1" />
                Add Expense
              </Button>
            </div>
          </div>

          <Tabs defaultValue="expenses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="balances">Balances</TabsTrigger>
            </TabsList>

            <TabsContent value="expenses" className="space-y-4">
              <div className="grid gap-3">
                {expenses.map((expense, index) => (
                  <Card
                    key={expense.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                      selectedExpense === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedExpense(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{expense.description}</h4>
                          <Badge variant="outline" className="text-xs">
                            {expense.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Paid by {expense.paidBy} • Shared by {expense.sharedBy.join(", ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">₼{expense.amount}</div>
                        <div className="text-xs text-muted-foreground">{expense.date}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Spending by Category</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`₼${value}`, "Amount"]} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-4 mt-4">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Daily Spending</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { day: "Dec 15", amount: 200 },
                          { day: "Dec 16", amount: 245 },
                        ]}
                      >
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`₼${value}`, "Amount"]} />
                        <Bar dataKey="amount" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="balances" className="space-y-6">
              <div className="grid gap-4">
                {balanceData.map((person, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{person.name}</h4>
                          <p className="text-sm text-muted-foreground">Trip participant</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {person.owed > 0 ? (
                          <div className="text-primary font-bold">+₼{person.owed}</div>
                        ) : person.owes > 0 ? (
                          <div className="text-destructive font-bold">-₼{person.owes}</div>
                        ) : (
                          <div className="text-muted-foreground font-bold">₼0</div>
                        )}
                        <p className="text-xs text-muted-foreground">
                          {person.owed > 0 ? "Owed" : person.owes > 0 ? "Owes" : "Settled"}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ready for Settlement</h4>
                    <p className="text-sm text-muted-foreground">
                      All debts calculated and ready for automatic payment
                    </p>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Settle All Debts (₼35)
                </Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
