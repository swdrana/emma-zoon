import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";
import Summary from "../Summary/Summary";
import "./Body.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="body">
      <Products products={products}></Products>
      <Summary></Summary>
    </div>
  );
};

export default Body;
