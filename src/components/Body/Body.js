import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Body.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Products products={products}></Products>
    </div>
  );
};

export default Body;
