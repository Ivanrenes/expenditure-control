import React from 'react';

function Expense({ expense }) {
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria"> {expense.description} </p>
        </div>
      </div>
    </div>
  );
}

export default Expense;
