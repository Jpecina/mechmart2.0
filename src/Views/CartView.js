import React from "react";
import MainHeaderComponent from "../Components/Header/MainHeaderComponent";
import MainNavigation from "../Components/Header/MainNavigation";
import CartBody from "../Components/CartBody/CartBody";
import Footer from "../Components/Footer/Footer";

function CartView() {
  return (
    <div className="views">
      <MainHeaderComponent />
      <MainNavigation />
      <CartBody />
      <Footer />
    </div>
  );
}
export default CartView;
