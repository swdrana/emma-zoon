import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  let {img,name,price,seller,ratings}=props.product;
  console.log(props.product);
  return (
    <div>
      <div className="single-product">
        <img
          src={img}
          alt=""
        />
        <div className="info">
          <h3>{name}</h3>
          <p>Price: ${price} </p>
          <p>Manufacturer : {seller}</p>
          <small>Rating : {ratings} start</small>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
