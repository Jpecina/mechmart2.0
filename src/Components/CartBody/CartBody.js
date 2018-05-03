import React, { Component } from "react";
import "./cart.css";
import CartItemContainer from "./CartItemContainer";
import axios from "axios";
import CartItem from "./CartItem";
class CartBody extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0,
      image: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/cart")
      .then(response => {
        // let parsed = response.data.
        this.setState({
          cart: response.data.cart
        });
      })
      .catch(console.log());
  }
  render() {
    console.log("this is the cart body props", this.state.cart);
    const cart = this.state.cart;
    const cartListRender = cart.map((product, i) => {
      const {
        product_name,
        product_price,
        product_brand,
        product_images
      } = product;
      console.log("map render images", product_images);

      const parsedArr = product_images.splice(",");
      return (
        <CartItem
          product={product}
          key={i}
          productName={product_name}
          productPrice={product_price}
          productBrand={product_brand}
          //   productImages={parsedImages[0]}
        />
      );
    });
    return (
      <div className="main-cart-body-div">
        <div className="main-cart-body-section">
          <h1>Cart</h1>
        </div>
        <div className="main-cart-body-section">
          <CartItemContainer>{cartListRender}</CartItemContainer>
        </div>
        <div className="main-cart-body-section">dropdowns</div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default CartBody;
