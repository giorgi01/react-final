import React from 'react';

const AddTransaction = () => {
  return (
    <div>
      <h3>დაამატე ტრანზაქცია</h3>
      <form id="form">
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount">
            რაოდენობა <br />
            (უარყოფითი - ხარჯი, დადებითი - შემოსავალი)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">დაამატე</button>
      </form>
    </div>
  );
};

export default AddTransaction;
