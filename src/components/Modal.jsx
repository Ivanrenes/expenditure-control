import React, { useState } from 'react';
import Message from './Message';
import CloseBtn from '../img/cerrar.svg';

function Modal({ setModal, animateModal, setAnimateModal, saveExpense }) {
  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([description, amount, category].includes('')) {
      setMessage('All fields are required');
      setTimeout(() => {
        setMessage('');
      }, 2000);
      return;
    }
    saveExpense({ description, amount, category });
    closeModal();
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="Close Modal"
          onClick={closeModal}
          role="presentation"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? 'animar' : ''}`}
      >
        <legend>New Expense</legend>
        {message && <Message type="error"> {message} </Message>}
        <div className="campo">
          <label htmlFor="name">Expense Description</label>
          <input
            type="text"
            id="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add your Expense description"
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Expense Quantity</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Add your Expense amount, eg: 300"
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Expense Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
          >
            <option value="">-- Select a category --</option>
            <option value="drugs">Drugs</option>
            <option value="food">Food</option>
            <option value="drinks">Drinks</option>
            <option value="saving">Saving</option>
            <option value="health">Health</option>
            <option value="various">Various</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
}

export default Modal;
