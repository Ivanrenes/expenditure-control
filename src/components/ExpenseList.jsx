import React from 'react';
import Expense from './Expense';

function ExpenseList({ expenses }) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Expenses' : 'There are not expenses yet'}</h2>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
