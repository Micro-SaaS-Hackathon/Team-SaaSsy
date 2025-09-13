import React, { useState } from 'react';
import { Plus, Users, Receipt, Trash2, Calculator, DollarSign, X } from 'lucide-react';

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
    friends.forEach(friend => balances[friend.id] = 0);
    
    expenses.forEach(expense => {
      const shareAmount = expense.amount / expense.splitAmong.length;
      balances[expense.paidBy] += expense.amount;
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

  const handleSplitToggle = (friendId) => {
    const currentSplit = newExpense.splitAmong;
    setNewExpense({
      ...newExpense,
      splitAmong: currentSplit.includes(friendId)
        ? currentSplit.filter(id => id !== friendId)
        : [...currentSplit, friendId]
    });
  };

  const balances = calculateBalances();
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const categoryIcons = {
    Food: '🍽️',
    Transport: '🚗',
    Entertainment: '🎬',
    Utilities: '💡',
    Shopping: '🛍️',
    Other: '📝'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Splitwise
                </h1>
                <p className="text-slate-600 text-lg">Dostlar arasında xərcləri bölüşün</p>
              </div>
            </div>
            <div className="text-right bg-slate-50 rounded-2xl p-4">
              <p className="text-sm text-slate-500 mb-1">Valyuta</p>
              <p className="text-xl font-bold text-slate-800 flex items-center justify-end">
                <span className="text-2xl mr-2">₼</span>
                Manat (AZN)
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Friends Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-white" />
                    <h2 className="text-xl font-bold text-white">Dostlar</h2>
                  </div>
                  <button
                    onClick={() => setShowAddFriend(true)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-105"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {friends.map(friend => {
                  const balance = balances[friend.id] || 0;
                  return (
                    <div key={friend.id} className="group relative bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4 border border-slate-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-white font-semibold text-sm">
                              {friend.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-800">{friend.name}</p>
                              <p className="text-sm text-slate-500">{friend.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className={`font-bold text-lg ${
                              balance > 0 ? 'text-emerald-600' : balance < 0 ? 'text-rose-600' : 'text-slate-600'
                            }`}>
                              {balance > 0 ? '+' : ''}{balance.toFixed(2)} ₼
                            </p>
                            <p className={`text-xs px-2 py-1 rounded-full ${
                              balance > 0 ? 'bg-emerald-100 text-emerald-700' : 
                              balance < 0 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {balance > 0 ? 'alacaq' : balance < 0 ? 'borc' : 'bərabər'}
                            </p>
                          </div>
                          <button
                            onClick={() => deleteFriend(friend.id)}
                            className="w-8 h-8 bg-rose-100 rounded-xl text-rose-600 hover:bg-rose-200 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-4 h-4 mx-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {showAddFriend && (
                <div className="p-6 bg-slate-50 border-t border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-800">Yeni dost əlavə et</h3>
                      <button
                        onClick={() => setShowAddFriend(false)}
                        className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-300 transition-colors"
                      >
                        <X className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Ad"
                      value={newFriend.name}
                      onChange={(e) => setNewFriend({...newFriend, name: e.target.value})}
                      className="w-full p-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={newFriend.email}
                      onChange={(e) => setNewFriend({...newFriend, email: e.target.value})}
                      className="w-full p-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    />
                    <button
                      onClick={addFriend}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold"
                    >
                      Əlavə et
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Expenses Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Receipt className="w-6 h-6 text-white" />
                    <h2 className="text-xl font-bold text-white">Xərclər</h2>
                  </div>
                  <button
                    onClick={() => setShowAddExpense(true)}
                    className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-105 font-semibold"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Xərc əlavə et</span>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {expenses.map(expense => {
                  const payer = friends.find(f => f.id === expense.paidBy);
                  const splitNames = expense.splitAmong.map(id => 
                    friends.find(f => f.id === id)?.name
                  ).filter(Boolean).join(', ');
                  
                  return (
                    <div key={expense.id} className="group bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.01]">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 flex items-start space-x-4">
                          <div className="text-3xl">{categoryIcons[expense.category]}</div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <h3 className="font-bold text-lg text-slate-800">{expense.description}</h3>
                              <span className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full font-medium">
                                {expense.category}
                              </span>
                            </div>
                            <div className="space-y-2">
                              <p className="text-slate-600">
                                <span className="font-semibold text-blue-600">{payer?.name}</span> tərəfindən ödənildi
                              </p>
                              <p className="text-slate-600">
                                <span className="font-medium">Bölünən:</span> {splitNames}
                              </p>
                              <p className="text-sm text-slate-500">{expense.date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right bg-white rounded-xl p-4 shadow-sm">
                            <p className="text-2xl font-bold text-slate-800">
                              {expense.amount.toFixed(2)} ₼
                            </p>
                            <p className="text-sm text-slate-600">
                              {(expense.amount / expense.splitAmong.length).toFixed(2)} ₼ hər kəs
                            </p>
                          </div>
                          <button
                            onClick={() => deleteExpense(expense.id)}
                            className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 hover:bg-rose-200 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {showAddExpense && (
                <div className="p-6 bg-slate-50 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-xl text-slate-800">Yeni xərc əlavə et</h3>
                    <button
                      onClick={() => setShowAddExpense(false)}
                      className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center hover:bg-slate-300 transition-colors"
                    >
                      <X className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Təsvir</label>
                      <input
                        type="text"
                        value={newExpense.description}
                        onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        placeholder="Xərc təsviri"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Məbləğ (₼)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={newExpense.amount}
                        onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Kim ödədi</label>
                      <select
                        value={newExpense.paidBy}
                        onChange={(e) => setNewExpense({...newExpense, paidBy: e.target.value})}
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      >
                        <option value="">Seçin</option>
                        {friends.map(friend => (
                          <option key={friend.id} value={friend.id}>{friend.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Kateqoriya</label>
                      <select
                        value={newExpense.category}
                        onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                        className="w-full p-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      >
                        <option value="Food">🍽️ Yemək</option>
                        <option value="Transport">🚗 Nəqliyyat</option>
                        <option value="Entertainment">🎬 Əyləncə</option>
                        <option value="Utilities">💡 Kommunal</option>
                        <option value="Shopping">🛍️ Alışveriş</option>
                        <option value="Other">📝 Digər</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Kim arasında bölünsün</label>
                    <div className="grid grid-cols-2 gap-3">
                      {friends.map(friend => (
                        <label key={friend.id} className="flex items-center space-x-3 p-4 bg-white rounded-xl border-2 border-slate-200 cursor-pointer hover:bg-slate-50 transition-all">
                          <input
                            type="checkbox"
                            checked={newExpense.splitAmong.includes(friend.id)}
                            onChange={() => handleSplitToggle(friend.id)}
                            className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                            {friend.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-slate-700 font-medium">{friend.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={addExpense}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-bold text-lg"
                  >
                    Xərc əlavə et
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <DollarSign className="w-7 h-7 mr-3 text-purple-600" />
            Ümumi balans
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200 hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">💰</div>
              <p className="text-3xl font-bold text-emerald-600 mb-2">
                {totalExpenses.toFixed(2)} ₼
              </p>
              <p className="text-emerald-700 font-semibold">Ümumi xərclər</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">👥</div>
              <p className="text-3xl font-bold text-blue-600 mb-2">{friends.length}</p>
              <p className="text-blue-700 font-semibold">İştirakçılar</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">📋</div>
              <p className="text-3xl font-bold text-purple-600 mb-2">{expenses.length}</p>
              <p className="text-purple-700 font-semibold">Xərclər</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splitwise;