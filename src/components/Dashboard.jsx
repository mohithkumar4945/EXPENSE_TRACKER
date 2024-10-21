import React, { useState } from 'react';

const Dashboard = () => {
    const [income, setIncome] = useState('');
    const [expenseType, setExpenseType] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [total, setTotal] = useState(0);

    const addExpense = (e) => {
        e.preventDefault();
        const amount = parseFloat(expenseAmount);
        if (expenseType && !isNaN(amount)) {
            // Add the new expense to the list
            setExpenses([...expenses, { type: expenseType, amount }]);
            
            // Update total (income if positive, expense if negative)
            setTotal((prevTotal) => prevTotal + amount);

            // Clear the input fields
            setExpenseType('');
            setExpenseAmount('');
        }
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <form onSubmit={addExpense}>
                <input 
                    type="text" 
                    placeholder="Source of Income or Type of Expense" 
                    value={expenseType} 
                    onChange={(e) => setExpenseType(e.target.value)} 
                    required 
                />
                <input 
                    type="number" 
                    placeholder="Amount (positive for income, negative for expense)" 
                    value={expenseAmount} 
                    onChange={(e) => setExpenseAmount(e.target.value)} 
                    required 
                />
                <button type="submit">Add Transaction</button>
            </form>

            <ul>
                {expenses.map((exp, index) => (
                    <li key={index}>
                        {exp.type}: {exp.amount >= 0 ? `+₹${exp.amount}` : `-₹${Math.abs(exp.amount)}`}
                    </li>
                ))}
            </ul>

            <h3>Total: ₹{total}</h3>
        </div>
    );
};

export default Dashboard;
