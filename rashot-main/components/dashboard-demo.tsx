"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Users, Plus, DollarSign, TrendingUp, X, Receipt } from "lucide-react"

export function DashboardDemo() {
  const [selectedExpense, setSelectedExpense] = useState(0)
  const [events, setEvents] = useState([])
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [showAddExpense, setShowAddExpense] = useState(false)
  const [participantInput, setParticipantInput] = useState("")
  const [newEvent, setNewEvent] = useState({ name: "", participants: [] })
  const [newExpense, setNewExpense] = useState({
    description: "",
    amount: "",
    paidBy: "",
    sharedBy: [],
    category: "",
  })

  useEffect(() => {
    const sampleEvent = {
      id: 1,
      name: "Baku Weekend Trip",
      participants: ["Anar", "Leyla", "Rashad"],
      expenses: [
        {
          id: 1,
          description: "Hotel booking",
          amount: 180,
          paidBy: "Anar",
          sharedBy: ["Anar", "Leyla", "Rashad"],
          category: "Accommodation",
          date: "Dec 15",
        },
        {
          id: 2,
          description: "Dinner at restaurant",
          amount: 85,
          paidBy: "Leyla",
          sharedBy: ["Anar", "Leyla"],
          category: "Food",
          date: "Dec 15",
        },
        {
          id: 3,
          description: "Taxi to airport",
          amount: 25,
          paidBy: "Rashad",
          sharedBy: ["Anar", "Leyla", "Rashad"],
          category: "Transport",
          date: "Dec 16",
        },
      ],
      status: "active",
    }
    setEvents([sampleEvent])
  }, [])

  const getEventTotal = (event) => {
    return event.expenses?.reduce((sum, expense) => sum + expense.amount, 0) || 0
  }

  const getAllExpenses = () => {
    return events.flatMap((event) => event.expenses || [])
  }

  const addEvent = () => {
    if (newEvent.name && newEvent.participants.length > 0) {
      setEvents([
        ...events,
        {
          id: events.length + 1,
          name: newEvent.name,
          participants: newEvent.participants,
          expenses: [],
          status: "active",
        },
      ])
      setNewEvent({ name: "", participants: [] })
      setParticipantInput("")
      setShowAddEvent(false)
    }
  }

  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const addExpense = () => {
    if (events.length === 0) {
      alert("Please create an event first before adding expenses.")
      return
    }

    if (newExpense.description && newExpense.amount && newExpense.paidBy && newExpense.sharedBy.length > 0) {
      const activeEvent = events[0]
      const expense = {
        id: (activeEvent.expenses?.length || 0) + 1,
        description: newExpense.description,
        amount: Number.parseFloat(newExpense.amount),
        paidBy: newExpense.paidBy,
        sharedBy: newExpense.sharedBy,
        category: newExpense.category || "Other",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      }

      setEvents(
        events.map((event) =>
          event.id === activeEvent.id ? { ...event, expenses: [...(event.expenses || []), expense] } : event,
        ),
      )

      setNewExpense({ description: "", amount: "", paidBy: "", sharedBy: [], category: "" })
      setShowAddExpense(false)
    }
  }

  const pieData = [
    {
      name: "Food",
      value: getAllExpenses()
        .filter((e) => e.category === "Food")
        .reduce((sum, e) => sum + e.amount, 0),
      color: "#10b981",
    },
    {
      name: "Transport",
      value: getAllExpenses()
        .filter((e) => e.category === "Transport")
        .reduce((sum, e) => sum + e.amount, 0),
      color: "#059669",
    },
    {
      name: "Accommodation",
      value: getAllExpenses()
        .filter((e) => e.category === "Accommodation")
        .reduce((sum, e) => sum + e.amount, 0),
      color: "#34d399",
    },
  ].filter((item) => item.value > 0)

  const calculateBalances = () => {
    const allParticipants = [...new Set(events.flatMap((event) => event.participants))]
    const balances = {}
    allParticipants.forEach((participant) => {
      balances[participant] = 0
    })

    getAllExpenses().forEach((expense) => {
      const shareAmount = expense.amount / expense.sharedBy.length
      expense.sharedBy.forEach((person) => {
        if (person !== expense.paidBy) {
          balances[person] -= shareAmount
          balances[expense.paidBy] += shareAmount
        }
      })
    })

    return Object.entries(balances).map(([name, balance]) => ({
      name,
      owes: balance < 0 ? Math.abs(balance) : 0,
      owed: balance > 0 ? balance : 0,
    }))
  }

  const balanceData = calculateBalances()

  const settleAllDebts = () => {
    setEvents(events.map((event) => ({ ...event, expenses: [] })))
  }

  const activeEvent = events[0]
  const allExpenses = getAllExpenses()

  return (
    <section id="demo" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Interactive <span className="text-primary">Banking Integration Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Experience how our Micro SaaS solution integrates into Azerbaijan banking apps. Create events, add expenses,
            and see real-time calculations.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Your Events</h3>
            <Button onClick={() => setShowAddEvent(true)} size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Create Event
            </Button>
          </div>

          <div className="grid gap-3 mb-6">
            {events.map((event) => (
              <Card key={event.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{event.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {event.participants.length} participants • ₼{getEventTotal(event)} total
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default">{event.status}</Badge>
                    <Button variant="ghost" size="sm" onClick={() => removeEvent(event.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {showAddEvent && (
            <Card className="p-6 border-primary/20 bg-primary/5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Create New Event</h4>
                  <Button variant="ghost" size="sm" onClick={() => setShowAddEvent(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label>Event Name</Label>
                    <Input
                      value={newEvent.name}
                      onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                      placeholder="e.g., Weekend Trip to Gabala"
                    />
                  </div>
                  <div>
                    <Label>Participants (comma separated)</Label>
                    <Input
                      value={participantInput}
                      onChange={(e) => {
                        setParticipantInput(e.target.value)
                        const participants = e.target.value
                          .split(",")
                          .map((p) => p.trim())
                          .filter((p) => p.length > 0)
                        setNewEvent({ ...newEvent, participants })
                      }}
                      placeholder="e.g., Anar, Leyla, Rashad"
                    />
                  </div>
                  <Button onClick={addEvent} className="w-full">
                    Create Event
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="bg-card rounded-2xl border shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">{activeEvent?.name || "No Active Event"}</h3>
              <p className="text-muted-foreground">
                {activeEvent?.participants.length || 0} participants • ₼{activeEvent ? getEventTotal(activeEvent) : 0}{" "}
                total
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default">Active Event</Badge>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={() => setShowAddExpense(true)}
                disabled={events.length === 0}
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Expense
              </Button>
            </div>
          </div>

          {showAddExpense && (
            <Card className="p-6 border-primary/20 bg-primary/5 mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Add New Expense</h4>
                  <Button variant="ghost" size="sm" onClick={() => setShowAddExpense(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <Label>Description</Label>
                      <Input
                        value={newExpense.description}
                        onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                        placeholder="e.g., Lunch at restaurant"
                      />
                    </div>
                    <div>
                      <Label>Amount (₼)</Label>
                      <Input
                        type="number"
                        value={newExpense.amount}
                        onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <Label>Paid By</Label>
                      <Select
                        value={newExpense.paidBy}
                        onValueChange={(value) => setNewExpense({ ...newExpense, paidBy: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select person" />
                        </SelectTrigger>
                        <SelectContent>
                          {activeEvent?.participants.map((person) => (
                            <SelectItem key={person} value={person}>
                              {person}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Label>Category</Label>
                      <Select
                        value={newExpense.category}
                        onValueChange={(value) => setNewExpense({ ...newExpense, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Food">Food</SelectItem>
                          <SelectItem value="Transport">Transport</SelectItem>
                          <SelectItem value="Accommodation">Accommodation</SelectItem>
                          <SelectItem value="Entertainment">Entertainment</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Shared By (select participants)</Label>
                      <div className="space-y-2 mt-2">
                        {activeEvent?.participants.map((person) => (
                          <div key={person} className="flex items-center space-x-2">
                            <Checkbox
                              id={person}
                              checked={newExpense.sharedBy.includes(person)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setNewExpense({ ...newExpense, sharedBy: [...newExpense.sharedBy, person] })
                                } else {
                                  setNewExpense({
                                    ...newExpense,
                                    sharedBy: newExpense.sharedBy.filter((p) => p !== person),
                                  })
                                }
                              }}
                            />
                            <Label htmlFor={person}>{person}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <Button onClick={addExpense} className="w-full">
                  <Receipt className="h-4 w-4 mr-2" />
                  Add Expense
                </Button>
              </div>
            </Card>
          )}

          <Tabs defaultValue="expenses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="balances">Balances</TabsTrigger>
            </TabsList>

            <TabsContent value="expenses" className="space-y-4">
              <div className="grid gap-3">
                {(activeEvent?.expenses || []).map((expense, index) => (
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
                          {
                            day: "Dec 15",
                            amount: allExpenses
                              .filter((e) => e.date === "Dec 15")
                              .reduce((sum, e) => sum + e.amount, 0),
                          },
                          {
                            day: "Dec 16",
                            amount: allExpenses
                              .filter((e) => e.date === "Dec 16")
                              .reduce((sum, e) => sum + e.amount, 0),
                          },
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
                          <div className="text-primary font-bold">+₼{person.owed.toFixed(2)}</div>
                        ) : person.owes > 0 ? (
                          <div className="text-destructive font-bold">-₼{person.owes.toFixed(2)}</div>
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
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={settleAllDebts}>
                  <DollarSign className="h-4 w-4 mr-2" />
                  Settle All Debts (₼{balanceData.reduce((sum, p) => sum + p.owes, 0).toFixed(2)})
                </Button>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
