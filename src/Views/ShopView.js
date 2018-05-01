import React from "react";
import { defaultCoreCipherList } from "constants";
import MainHeaderComponent from "../Components/Header/MainHeaderComponent";
import MainNavigation from "../Components/Header/MainNavigation";
import Footer from "../Components/Footer/Footer";
import ShopRender from "../Components/Shop/ShopRender";

function ShopView() {
  return (
    <div className="views">
      <MainHeaderComponent />
      <MainNavigation />
      <ShopRender />
      <Footer />
    </div>
  );
}
export default ShopView;
