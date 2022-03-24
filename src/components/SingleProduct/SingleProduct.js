import React from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div>
      <div className="single-product">
        <img
          src="https://images.prothomalo.com/prothomalo-bangla%2F2021-06%2F0b0c5e5e-9722-4464-bf4a-3a1d8e82ea80%2F3.jpg?rect=13%2C0%2C521%2C293&auto=format%2Ccompress&fmt=webp&format=webp&w=480&dpr=2.6"
          alt=""
        />
        <div className="info">
          <h3>Ultraboost 22 Shoes</h3>
          <p>Price: $190 </p>
          <p>Manufacturer : Addidas</p>
          <small>Rating : 3 start</small>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
