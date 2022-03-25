import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import Summary from "../Summary/Summary";
import "./Body.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // cart state 
  const [cart, setCart]=useState([]);
  const addToCurt = (product) => {
    setCart([...cart,product]); 
  };
  //clear cart
  const clearCart =() =>{
    setCart([]);
  }
  return (
    <div className="body">
      <Products products={products} cartFunction={addToCurt}></Products>
      <Summary cartInfo={cart} clearCart={clearCart}></Summary>
    </div>
  );
};

export default Body;
