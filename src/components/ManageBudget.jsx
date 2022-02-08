import React from 'react';

function ManageBudget({ budget }) {
  const formatMoney = (number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(number);
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Graphic Here</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Budget: </span> {formatMoney(budget)}
        </p>{' '}
        <p>
          <span>Available: </span> {formatMoney(0)}
        </p>{' '}
        <p>
          <span>Spent: </span> {formatMoney(0)}
        </p>
      </div>
    </div>
  );
}

export default ManageBudget;
