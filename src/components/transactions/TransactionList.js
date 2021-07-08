import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Transaction } from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { clearTransactions } = useContext(GlobalContext);

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
