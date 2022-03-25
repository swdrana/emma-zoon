import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  let {id,img,name,price,shipping,seller,ratings}=props.product;
  return (
    <div>
      <div className="single-product">
        <img
          src={img}
          alt={name}
        />
        <div className="info">
          <h3>{name}</h3>
          <p>Price: ${price} </p>
          <p>Manufacturer : {seller}</p>
          <small>Rating : {ratings} start</small>
        </div>
        <button onClick={()=>{
          props.cartFunction(id, price, shipping)
        }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
