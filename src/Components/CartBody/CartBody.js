import React, { Component } from "react";
import "./cart.css";
import CartItemContainer from "./CartItemContainer";
class CartBody extends Component {
  render() {
    return (
      <div className="main-cart-body-div">
        <div className="main-cart-body-section">
          <h1>Cart</h1>
        </div>
        <div className="main-cart-body-section">
          <CartItemContainer />
        </div>
        <div className="main-cart-body-section">dropdowns</div>
      </div>
    );
  }
}
export default CartBody;
