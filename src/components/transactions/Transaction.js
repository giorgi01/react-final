import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.transactionType == 1 ? '-' : '+';

  return (
    <div>
      <li className={transaction.transactionType == 1 ? 'minus' : 'plus'}>
        <span>
          <span
            style={{ color: 'red', fontWeight: 'bold', fontStyle: 'italic' }}
            onClick={(e) => deleteTransaction(transaction.id)}>
            X{' '}
          </span>
          {transaction.text}
        </span>
        <span>
          {sign}
          {Math.abs(transaction.amount)}₾
        </span>
      </li>
    </div>
  );
};
