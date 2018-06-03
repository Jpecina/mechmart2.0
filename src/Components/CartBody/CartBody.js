import React, { Component } from "react";
import "./cart.css";
import CartItemContainer from "./CartItemContainer";
import axios from "axios";
import CartItem from "./CartItem";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert";
class CartBody extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      total: 0
    };
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }
  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      console.log(response);
      this.simulateCheckout(response);
      // response.json().then(data => {
      //   console.log(data);
      // });
    });
  };
  simulateCheckout(response) {
    if (response) {
      swal("Thank You For Shopping MechMarket!!");
      this.setState({
        cart: []
      });
    } else {
      swal("Failure");
    }
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
  deleteFromCart(id) {
    axios.delete(`/api/cart/${id}`).then(res => {
      this.setState({
        cart: res.data.cart
      });
    });
  }
  render() {
    // console.log("this is the cart body props", this.state.cart);
    let totalOfItems = this.state.cart.reduce(
      (total, currentValue) => total + Number(currentValue.product_price),
      0
    );
    let totalInCents = function() {
      return totalOfItems + ".00";
    };
    let converted = totalOfItems * 100;
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
        <div className="main-cart-body-section" id="checkout">
          <div className="checkout-total">
            <h1>${totalInCents()}</h1>
            <h4>Excludes Tax And Shipping</h4>
            <StripeCheckout
              stripeKey="pk_test_u1TUgTCY8tX2jhpsH4LyIo5L"
              token={this.onToken}
              name="MechMart"
              description="KeyboardStuff"
              amount={converted}
              currency="USD"
              shippingAddress={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartBody;
