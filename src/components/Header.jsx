import React from 'react';
import PropTypes from 'prop-types';
import NewBudget from './NewBudget';
import ManageBudget from './ManageBudget';

function Header({ budget, setBudget, isValidBudget, setIsValidBudget }) {
  return (
    <header>
      <h1>Expenditure Control</h1>
      {isValidBudget ? (
        <ManageBudget budget={budget} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
}

Header.propTypes = {
  budget: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired
};

export default Header;
