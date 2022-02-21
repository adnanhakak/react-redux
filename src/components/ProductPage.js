import React from "react";
import { NavLink } from "react-router-dom";

import "./product.css";

const ProductPage = ({ products }) => {
  let allProducts = products.map((product) => {
    return (
      <div className="product" key={product.id}>
        <div>
          <img src="#" alt="ImageNotAvailable" />
        </div>
        <NavLink to={`/${product.id}`}>
          <h3>Name : {product.name}</h3>
          <h4>Model : {product.model}</h4>
          <h5>Price : &#8377; {product.price}</h5>
        </NavLink>
      </div>
    );
  });

  return <div className="allProducts">{allProducts}</div>;
};
export default ProductPage;
