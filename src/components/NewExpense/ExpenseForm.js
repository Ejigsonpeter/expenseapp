import './ExpenseForm.css';

const ExpenseForm = () => {
    return (
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text"></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01"></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max ='2022-01-01' ></input>
                </div>
                <div className='new_expense__action'>
                    <button type='submit'>New Expense</button>
            </div>
        </div>
      </form>
    );
};
export default ExpenseForm;