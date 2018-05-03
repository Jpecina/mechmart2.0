import React from "react";
import "./cart.css";

function CartItem(props) {
  return (
    <div className="item-info-container">
      <div className="item-info-first-item">
        <div />
        <div>
          <h3>{props.productBrand}</h3>
          <h1>{props.productName}</h1>
        </div>
      </div>
      <div className="item-info-reg-item">
        <h4>${props.productPrice}</h4>
      </div>
      <div className="item-info-reg-item">1</div>
      <div className="item-info-reg-item">
        <h4>total price</h4>
      </div>
      <div className="item-info-reg-last-item" />
    </div>
  );
}

export default CartItem;
