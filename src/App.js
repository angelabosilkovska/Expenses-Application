import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 296.95, date: new Date(2021, 2, 13) },
    { title: "New Tv", amount: 95.34, date: new Date(2020, 2, 28) },
    { title: "Toilet Paper", amount: 25.65, date: new Date(2021, 6, 8) },
    { title: "New Desk", amount: 450, date: new Date(2019, 5, 2) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>this is also visible</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
