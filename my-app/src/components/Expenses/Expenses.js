import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
};

export default Expenses;
