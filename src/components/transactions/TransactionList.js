import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Transaction } from './Transaction';
import Axios from 'axios';

const TransactionList = () => {
  const [transactions, SetTransactions] = useState([]);

  let fetchFunc = async () =>
    Axios({
      method: 'GET',
      url: 'https://aspnet-pg-gt.herokuapp.com/transaction',
      headers: { 'Access-Control-Allow-Origin': '*' },
    }).then((data) => SetTransactions(data.data));

  useEffect(fetchFunc, []);

  // setTimeout(function () {
  //   window.location.reload(1);
  // }, 5000);

  let clearTransactions = async () => {
    transactions.forEach((element) => {
      Axios({
        method: 'DELETE',
        url:
          'https://aspnet-pg-gt.herokuapp.com/transaction/' +
          element.transactionId,
        headers: { 'Access-Control-Allow-Origin': '*' },
      });
    });
    window.location.reload();
  };

  return (
    <div>
      <h3>ისტორია</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <button
        className="btn danger"
        style={{ backgroundColor: 'red', width: '300px' }}
        onClick={() => clearTransactions()}>
        წაშალე ყველა ტრანზაქცია
      </button>
    </div>
  );
};

export default TransactionList;
