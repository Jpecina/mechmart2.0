import React, { Component } from "react";
import "./productViewStyles.css";
import FooterBlock from "../Footer/FooterBlock";

function ProductInfoColumn(props) {
  const {
    product_brand,
    product_name,
    product_price,
    product_description,
    switch_type
  } = props.product;
  return (
    <div className="product-info-column-main">
      <div className="product-info-column-section">
        <h4>{product_brand}</h4>
        <h1>{product_name}</h1>
        <h4>${product_price}</h4>
      </div>
      <div className="product-info-column-section">
        <div id="quantity-input-div">
          <h4>Quantity</h4>
          <input id="quantity-input" />
        </div>
        <button
          id="checkout-button"
          onClick={() => props.handleClick(props.product)}
        >
          Add To Cart
        </button>
      </div>
      <div className="product-info-column-section" id="bottom-container">
        <p>{product_description}</p>
      </div>
    </div>
  );
}

export default ProductInfoColumn;
