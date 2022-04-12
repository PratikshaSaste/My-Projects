
import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Chocolates',
      amount: 94.12,
      date: new Date(2022, 11, 4),
    },
    { id: 'e2', title: 'Mac Book', amount: 1000.49, date: new Date(2022, 8, 1) },
    {
      id: 'e3',
      title: 'Teddy Bear',
      amount: 194.67,
      date: new Date(2022, 11, 30),
    },
    {
      id: 'e4',
      title: 'Books',
      amount: 450,
      date: new Date(2022, 8, 12),
    },
    {
      id: 'e5',
      title: 'Guitar',
      amount: 550,
      date: new Date(2022, 2, 9),
    },
    {
      id: 'e6',
      title: 'Nike shoes',
      amount: 500,
      date: new Date(2022, 9, 13),
    },
    {
      id: 'e7',
      title: 'Lether Jacket',
      amount: 700,
      date: new Date(2022, 1, 18),
    },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses expenseitems={expenses}/>
    </div>
  );
}

export default App;
