import React from "react";
import "./mainNav.css";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <div className="main-nav-div">
      <div className="nav-list-div">
        <Link to="/" style={styles.linkStyles}>
          <li>Home</li>
        </Link>
        <Link to="/shop" style={styles.linkStyles}>
          <li id="shop-on-hover">Shop</li>
        </Link>
        <Link to="/cart" style={styles.linkStyles}>
          <li>Cart</li>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  linkStyles: {
    color: "#666666",
    textDecoration: "none",
    listStyleType: "none",
    fontSize: "18px"
  }
};
export default MainHeader;
