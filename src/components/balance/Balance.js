import React, { useState, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Axios from 'axios';

const Balance = () => {
  const [transactions, SetTransactions] = useState([]);

  let fetchFunc = async () =>
    Axios({
      method: 'GET',
      url: 'https://aspnet-pg-gt.herokuapp.com/transaction',
      headers: { 'Access-Control-Allow-Origin': '*' },
    }).then((data) => SetTransactions(data.data));

  useEffect(fetchFunc, []);
  const expenses = transactions.map((transaction) =>
    transaction.transactionType == 1 ? transaction.amount : 0
  );
  const incomes = transactions.map((transaction) =>
    transaction.transactionType == 0 ? transaction.amount : 0
  );

  const expenses_amount = expenses
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const incomes_amount = incomes
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const total = incomes_amount - expenses_amount;

  return (
    <div id="balance">
      <h4>ბალანსი</h4>
      <h1>{total}₾</h1>
    </div>
  );
};

export default Balance;
