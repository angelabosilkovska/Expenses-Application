import React, {useState} from 'react';

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 296.95,
    date: new Date(2021, 2, 13),
  },
  { id: "e2", title: "New Tv", amount: 95.34, date: new Date(2020, 2, 28) },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 25.65,
    date: new Date(2021, 6, 8),
  },
  { id: "e4", title: "New Desk", amount: 450, date: new Date(2019, 5, 2) },
];

function App() {
  //we are getting the initial dummy expenses as an initial value
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //triggered whenever a new expense is added
  //the setExpenses creates a new array of expenses, we are updating our state
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
