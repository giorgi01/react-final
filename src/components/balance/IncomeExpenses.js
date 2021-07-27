import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Axios from 'axios';

const IncomeExpenses = () => {
  const [transactions, SetTransactions] = useState([]);
  let fetchFunc = async () =>
    Axios({
      method: 'GET',
      url: 'https://aspnet-pg-gt.herokuapp.com/transaction',
      headers: { 'Access-Control-Allow-Origin': '*' },
    }).then((data) => SetTransactions(data.data));

  useEffect(fetchFunc, []);

  const expenses_amount = transactions.map((transaction) =>
    transaction.transactionType == 1 ? transaction.amount : 0
  );
  const incomes_amount = transactions.map((transaction) =>
    transaction.transactionType == 0 ? transaction.amount : 0
  );

  const income = incomes_amount
    .filter((item) => item)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    expenses_amount
      .filter((item) => item)
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>შემოსავალი</h4>
          <p id="money-plus" className="money plus">
            {income}
          </p>
        </div>
        <div>
          <h4>ხარჯი</h4>
          <p id="money-minus" className="money minus">
            {expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
