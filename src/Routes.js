import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePageview from "./Views/HomeView";
import ShopView from "./Views/ShopView";
import CartView from "./Views/CartView";
import ProductView from "./Components/ProductView/ProductView";

export default (
  <Switch>
    <Route exact path="/" component={HomePageview} />
    <Route exact path="/Shop" component={ShopView} />
    <Route exact path="/shop/item/:id" component={ProductView} />
    <Route exact path="/Cart" component={CartView} />
  </Switch>
);
