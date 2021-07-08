import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100_000_000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>დაამატე ტრანზაქცია</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">დანიშნულება</label>
          <input
            type="text"
            id="text"
            placeholder="შეიყვანე ტექსტი..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            რაოდენობა <br />
            (უარყოფითი - ხარჯი, დადებითი - შემოსავალი)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">დაამატე</button>
      </form>
    </div>
  );
};

export default AddTransaction;
