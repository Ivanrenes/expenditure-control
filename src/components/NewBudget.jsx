import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

function NewBudget({ budget, setBudget, setIsValidBudget }) {
  const [msg, setMsg] = useState('');
  const handleBudget = (event) => {
    event.preventDefault();
    if (!budget || budget < 0) {
      setMsg('Please enter a valid budget');
      return;
    }
    setMsg('');
    setIsValidBudget(true);
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label htmlFor="campo">Configure Budget</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            id="campo"
            placeholder="Add your budget"
            value={budget}
            onChange={(event) => setBudget(Number(event.target.value))}
          />
        </div>
        <input type="submit" value="Add" />
        {msg && <Message type="error"> {msg} </Message>}
      </form>
    </div>
  );
}

NewBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired
};

export default NewBudget;
