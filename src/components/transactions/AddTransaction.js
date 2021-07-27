import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Axios from 'axios';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  let addTransaction = async (text, amount, transactionType) => {
    Axios({
      method: 'POST',
      url: 'https://aspnet-pg-gt.herokuapp.com/transaction',
      data: { Text: text, Amount: amount, TransactionType: transactionType },
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction(text, Math.abs(amount), amount < 0 ? 1 : 0);
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
