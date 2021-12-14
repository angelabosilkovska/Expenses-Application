import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const selectHandler = (event) => {
    props.onSelectedYear(event.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectHandler}>
          <option >2022</option>
          <option >2021</option>
          <option >2020</option>
          <option >2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;