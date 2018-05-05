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
      total: 0
    };
    this.deleteFromCart = this.deleteFromCart.bind(this);
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
  deleteFromCartls(id) {
    axios.delete(`/api/cart/${id}`).then(res => {
      this.setState({
        cart: res.data.cart
      });
    });
  }
  render() {
    // console.log("this is the cart body props", this.state.cart);
    const cart = this.state.cart;
    const cartListRender = cart.map((product, i) => {
      const {
        product_name,
        product_price,
        product_brand,
        product_images,
        product_id
      } = product;
      const parsedArr = product_images.split(",");
      // console.log("map render images", parsedArr[0]);
      return (
        <CartItem
          product={product}
          key={i}
          productName={product_name}
          productPrice={product_price}
          productBrand={product_brand}
          productImages={parsedArr[0]}
          productId={product_id}
          deleteFromCart={this.deleteFromCart}
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

export default CartBody;
