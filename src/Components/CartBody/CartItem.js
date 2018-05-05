import React from "react";
import "./cart.css";
import { TiDeleteOutline } from "react-icons/lib/ti";

function CartItem(props) {
  console.log("this is props", props);
  return (
    <div className="item-info-container">
      <div className="item-info-first-item">
        <img
          src={props.productImages}
          style={{ height: "61px", width: "91px" }}
        />
        <div className="cart-item-info-container">
          <h3>{props.productBrand}</h3>
          <h1>{props.productName}</h1>
        </div>
      </div>
      <div className="item-info-reg-item">
        <h4>${props.productPrice}</h4>
      </div>
      <div className="item-info-reg-item">1</div>
      <div className="item-info-reg-item">
        <h4>${props.productPrice}</h4>
      </div>
      <div className="item-info-reg-last-item">
        <TiDeleteOutline
          style={{ height: "25px", width: "25px" }}
          onClick={() => props.deleteFromCart(props.productId)}
        />
      </div>
    </div>
  );
}

export default CartItem;
