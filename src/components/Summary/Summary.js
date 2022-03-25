import React from "react";
import "./Summary.css";
const Summary = () => {
  return (
    <div className="summary">
      <h2>Order Summary</h2>
      <p>Selected Items: 6</p>
      <p>Total Price: $1140</p>
      <p>Total Shipping Charge: $5</p>
      <p>Tax: $114</p>
      <h2>Grand Total: $1559</h2>
      <div className="btn-group">
        <button>Clear Cart</button>
        <button>Review Order</button>
      </div>
    </div>
  );
};

export default Summary;
