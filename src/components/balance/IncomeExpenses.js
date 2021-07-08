import React from 'react';

const IncomeExpenses = () => {
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>შემოსავალი</h4>
          <p id="money-plus" className="money plus">
            +0.00₾
          </p>
        </div>
        <div>
          <h4>ხარჯი</h4>
          <p id="money-minus" className="money minus">
            -0.00₾
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;