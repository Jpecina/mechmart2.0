import React, { Component } from "react";

class CartItemContainer extends Component {
  render() {
    return (
      <div className="cart-item-container-main-div">
        <div className="item-info-container" id="cart-item-header">
          <div className="item-info-first-item">
            <h4>Product</h4>
          </div>
          <div className="item-info-reg-item">
            <h4>Price</h4>
          </div>
          <div className="item-info-reg-item">
            <h4>Quantity</h4>
          </div>
          <div className="item-info-reg-item">
            <h4>Total</h4>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default CartItemContainer;
