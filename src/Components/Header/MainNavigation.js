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
          <div className="dropdown">
            <li className="dropbtn">Shop</li>
            <div className="dropdown-content">
              <Link to="/shop" style={styles.dropDownLinkStyles}>
                Keyboards
              </Link>
              <Link to="/cart" style={styles.dropDownLinkStyles}>
                KeySets
              </Link>
            </div>
          </div>
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
  },
  dropDownLinkStyles: {
    height: "50px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "#666666",
    color: "white"
  }
};
export default MainHeader;
