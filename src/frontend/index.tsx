import React, { useState, useEffect } from 'react';
import { Plus, Users, Receipt, Trash2, Calculator, DollarSign } from 'lucide-react';

const Splitwise = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: 'Aynur', email: 'aynur@mail.com' },
    { id: 2, name: 'Elvin', email: 'elvin@mail.com' },
    { id: 3, name: 'Leyla', email: 'leyla@mail.com' }
  ]);
  
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Restoran yemək',
      amount: 120,
      paidBy: 1,
      splitAmong: [1, 2, 3],
      date: '2024-09-13',
      category: 'Food'
    },
    {
      id: 2,
      description: 'Benzin',
      amount: 80,
      paidBy: 2,
      splitAmong: [1, 2],
      date: '2024-09-12',
      category: 'Transport'
    }
  ]);
  
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [newFriend, setNewFriend] = useState({ name: '', email: '' });
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    paidBy: '',
    splitAmong: [],
    category: 'Food'
  });

  const calculateBalances = () => {
    const balances = {};
    
    // Initialize balances
    friends.forEach(friend => {
      balances[friend.id] = 0;
    });
    
    // Calculate for each expense
    expenses.forEach(expense => {
      const shareAmount = expense.amount / expense.splitAmong.length;
      
      // Person who paid gets credit
      balances[expense.paidBy] += expense.amount;
      
      // Each person in split owes their share
      expense.splitAmong.forEach(friendId => {
        balances[friendId] -= shareAmount;
      });
    });
    
    return balances;
  };

  const addFriend = () => {
    if (newFriend.name.trim()) {
      setFriends([...friends, {
        id: Date.now(),
        name: newFriend.name.trim(),
        email: newFriend.email.trim()
      }]);
      setNewFriend({ name: '', email: '' });
      setShowAddFriend(false);
    }
  };

  const addExpense = () => {
    if (newExpense.description.trim() && newExpense.amount && newExpense.paidBy && newExpense.splitAmong.length > 0) {
      setExpenses([...expenses, {
        id: Date.now(),
        description: newExpense.description.trim(),
        amount: parseFloat(newExpense.amount),
        paidBy: parseInt(newExpense.paidBy),
        splitAmong: newExpense.splitAmong.map(id => parseInt(id)),
        date: new Date().toISOString().split('T')[0],
        category: newExpense.category
      }]);
      setNewExpense({
        description: '',
        amount: '',
        paidBy: '',
        splitAmong: [],
        category: 'Food'
      });
      setShowAddExpense(false);
    }
  };

  const deleteFriend = (id) => {
    setFriends(friends.filter(f => f.id !== id));
    setExpenses(expenses.filter(e => e.paidBy !== id).map(e => ({
      ...e,
      splitAmong: e.splitAmong.filter(fId => fId !== id)
    })));
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const balances = calculateBalances();

  const handleSplitToggle = (friendId) => {
    const currentSplit = newExpense.splitAmong;
    if (currentSplit.includes(friendId)) {
      setNewExpense({
        ...newExpense,
        splitAmong: currentSplit.filter(id => id !== friendId)
      });
    } else {
      setNewExpense({
        ...newExpense,
        splitAmong: [...currentSplit, friendId]
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Splitwise</h1>
                <p className="text-slate-600">Dostlar arasında xərcləri bölüşün</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Valyuta</p>
              <p className="text-lg font-semibold text-slate-800 flex items-center">
                <span className="mr-1">₼</span> Manat (AZN)
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Friends Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-semibold text-slate-800">Dostlar</h2>
                  </div>
                  <button
                    onClick={() => setShowAddFriend(true)}
                    className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {friends.map(friend => {
                  const balance = balances[friend.id] || 0;
                  return (
                    <div key={friend.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border">
                      <div className="flex-1">
                        <p className="font-medium text-slate-800">{friend.name}</p>
                        <p className="text-sm text-slate-600">{friend.email}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <p className={`font-semibold ${
                            balance > 0 ? 'text-green-600' : balance < 0 ? 'text-red-600' : 'text-slate-600'
                          }`}>
                            {balance > 0 ? '+' : ''}{balance.toFixed(2)} ₼
                          </p>
                          <p className="text-xs text-slate-500">
                            {balance > 0 ? 'alacaq' : balance < 0 ? 'borc' : 'bərabər'}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteFriend(friend.id)}
                          className="w-6 h-6 bg-red-100 rounded text-red-600 hover:bg-red-200 transition-colors"
                        >
                          <Trash2 className="w-3 h-3 mx-auto" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {showAddFriend && (
                <div className="p-4 border-t border-slate-200 bg-slate-50">
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Ad"
                      value={newFriend.name}
                      onChange={(e) => setNewFriend({...newFriend, name: e.target.value})}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={newFriend.email}
                      onChange={(e) => setNewFriend({...newFriend, email: e.target.value})}
                      className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={addFriend}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Əlavə et
                      </button>
                      <button
                        onClick={() => setShowAddFriend(false)}
                        className="flex-1 bg-slate-300 text-slate-700 py-2 px-4 rounded-lg hover:bg-slate-400 transition-colors"
                      >
                        Ləğv et
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Expenses Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Receipt className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-semibold text-slate-800">Xərclər</h2>
                  </div>
                  <button
                    onClick={() => setShowAddExpense(true)}
                    className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Xərc əlavə et</span>
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {expenses.map(expense => {
                  const payer = friends.find(f => f.id === expense.paidBy);
                  const splitNames = expense.splitAmong.map(id => 
                    friends.find(f => f.id === id)?.name
                  ).filter(Boolean).join(', ');
                  
                  return (
                    <div key={expense.id} className="p-4 bg-slate-50 rounded-lg border">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-medium text-slate-800">{expense.description}</h3>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {expense.category}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 mb-1">
                            <span className="font-medium">{payer?.name}</span> tərəfindən ödənildi
                          </p>
                          <p className="text-sm text-slate-600">
                            Bölünən: {splitNames}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">{expense.date}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="text-lg font-semibold text-slate-800">
                              {expense.amount.toFixed(2)} ₼
                            </p>
                            <p className="text-sm text-slate-600">
                              {(expense.amount / expense.splitAmong.length).toFixed(2)} ₼ hər kəs
                            </p>
                          </div>
                          <button
                            onClick={() => deleteExpense(expense.id)}
                            className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {showAddExpense && (
                <div className="p-6 border-t border-slate-200 bg-slate-50">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Təsvir</label>
                      <input
                        type="text"
                        value={newExpense.description}
                        onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Xərc təsviri"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Məbləğ (₼)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newExpense.amount}
                        onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Kim ödədi</label>
                      <select
                        value={newExpense.paidBy}
                        onChange={(e) => setNewExpense({...newExpense, paidBy: e.target.value})}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Seçin</option>
                        {friends.map(friend => (
                          <option key={friend.id} value={friend.id}>{friend.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Kateqoriya</label>
                      <select
                        value={newExpense.category}
                        onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="Food">Yemək</option>
                        <option value="Transport">Nəqliyyat</option>
                        <option value="Entertainment">Əyləncə</option>
                        <option value="Utilities">Kommunal</option>
                        <option value="Shopping">Alışveriş</option>
                        <option value="Other">Digər</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Kim arasında bölünsün</label>
                    <div className="grid grid-cols-2 gap-2">
                      {friends.map(friend => (
                        <label key={friend.id} className="flex items-center space-x-2 p-2 bg-white rounded border cursor-pointer hover:bg-slate-50">
                          <input
                            type="checkbox"
                            checked={newExpense.splitAmong.includes(friend.id)}
                            onChange={() => handleSplitToggle(friend.id)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-slate-700">{friend.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={addExpense}
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Xərc əlavə et
                    </button>
                    <button
                      onClick={() => setShowAddExpense(false)}
                      className="flex-1 bg-slate-300 text-slate-700 py-3 px-4 rounded-lg hover:bg-slate-400 transition-colors font-medium"
                    >
                      Ləğv et
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
            Ümumi balans
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-2xl font-bold text-green-600">
                {expenses.reduce((sum, exp) => sum + (exp.totalAmount || exp.payments?.reduce((pSum, p) => pSum + p.amount, 0) || exp.amount || 0), 0).toFixed(2)} ₼
              </p>
              <p className="text-sm text-green-700">Ümumi xərclər</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-2xl font-bold text-blue-600">{friends.length}</p>
              <p className="text-sm text-blue-700">İştirakçılar</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-2xl font-bold text-purple-600">{expenses.length}</p>
              <p className="text-sm text-purple-700">Xərclər</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splitwise;
