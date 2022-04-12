import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenseitems[0].title}
        amount={props.expenseitems[0].amount}
        date={props.expenseitems[0].date}
      />
      <ExpenseItem
        title={props.expenseitems[1].title}
        amount={props.expenseitems[1].amount}
        date={props.expenseitems[1].date}
      />
      <ExpenseItem
        title={props.expenseitems[2].title}
        amount={props.expenseitems[2].amount}
        date={props.expenseitems[2].date}
      />
    </Card>
  );
}

export default Expenses;