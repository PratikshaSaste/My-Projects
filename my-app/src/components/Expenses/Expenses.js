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
      <ExpenseItem
        title={props.expenseitems[3].title}
        amount={props.expenseitems[3].amount}
        date={props.expenseitems[3].date}
      />
      <ExpenseItem
        title={props.expenseitems[4].title}
        amount={props.expenseitems[4].amount}
        date={props.expenseitems[4].date}
      />
      <ExpenseItem
        title={props.expenseitems[5].title}
        amount={props.expenseitems[5].amount}
        date={props.expenseitems[5].date}
      />
      <ExpenseItem
        title={props.expenseitems[6].title}
        amount={props.expenseitems[6].amount}
        date={props.expenseitems[6].date}
      />
    </Card>
  );
}

export default Expenses;