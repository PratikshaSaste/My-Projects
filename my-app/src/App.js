import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Chocolates',
      amount: 94.12,
      date: new Date(2022, 12, 4),
    },
    { id: 'e2', title: 'Mac Book', amount: 1000.49, date: new Date(2022, 9, 1) },
    {
      id: 'e3',
      title: 'Teddy Bear',
      amount: 194.67,
      date: new Date(2022, 12, 30),
    },
    {
      id: 'e4',
      title: 'Books',
      amount: 450,
      date: new Date(2022, 9, 12),
    },
    {
      id: 'e5',
      title: 'Guitar',
      amount: 550,
      date: new Date(2022, 3, 9),
    },
    {
      id: 'e6',
      title: 'Nike shoes',
      amount: 500,
      date: new Date(2022, 10, 13),
    },
    {
      id: 'e7',
      title: 'Lether Jacket',
      amount: 700,
      date: new Date(2022, 2, 18),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenseitems={expenses}/>
    </div>
  );
}

export default App;
