import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import ExpenseList from './components/ExpenseList';
import IconNewSpent from './img/nuevo-gasto.svg';
import generateId from './helpers';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewSpent = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpense = (expense) => {
    const expenseWithID = { id: generateId(), ...expense };
    setExpenses([...expenses, expenseWithID]);
  };

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <ExpenseList expenses={expenses} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewSpent}
              alt="New Spent"
              onClick={handleNewSpent}
              onKeyPress={handleNewSpent}
              onKeyDown={handleNewSpent}
              role="presentation"
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
        />
      )}
    </>
  );
}

export default App;
