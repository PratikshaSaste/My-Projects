import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses= props.expenseitems.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent= <p>No expense found.</p>;

  // if(filterExpenses.length > 0 ){
  //  expensesContent= filterExpenses.map((expense) => (
  //   <ExpenseItem
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   />
  //  ))  
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
       <ExpensesList expenseitems={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
