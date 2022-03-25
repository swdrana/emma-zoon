import React from "react";
import "./Summary.css";
const Summary = ({cartInfo}) => {
  let totalPrice = 0;
  let totalShiping = 0;
  for(const cost of cartInfo){
    totalPrice+=cost.price;
    totalShiping+=cost.shipping;
  }
  let tax = (totalPrice+totalShiping)*0.10;
  let grandTotal = totalPrice+totalShiping+tax;
  console.log(tax);
  console.log(totalPrice);
  return (
    <div className="summary">
      <h2>Order Summary</h2>
      <p>Selected Items: {cartInfo.length}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Total Shipping Charge: ${totalShiping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
      <div className="btn-group">
        <button>Clear Cart</button>
        <button>Review Order</button>
      </div>
    </div>
  );
};

export default Summary;
