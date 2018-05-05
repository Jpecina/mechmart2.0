import React from "react";
import "./mainNav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProductsByCategory } from "../../ducks/reducer";

function MainHeader(props) {
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
                <div onClick={() => props.getProductsByCategory("Keyboards")}>
                  KEYBOARDS
                </div>
              </Link>
              <Link to="/shop" style={styles.dropDownLinkStyles}>
                <div onClick={() => props.getProductsByCategory("Keysets")}>
                  KEYSETS
                </div>
              </Link>
              <Link to="/shop" style={styles.dropDownLinkStyles}>
                <div onClick={() => props.getProductsByCategory("Accessories")}>
                  ACCESSORIES
                </div>
              </Link>
              <Link to="/shop" style={styles.dropDownLinkStyles}>
                <div onClick={() => props.getProductsByCategory("Add-ons")}>
                  ADD-ONS
                </div>
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
    minHeight: "50px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    backgroundColor: "#E8E8E8",
    color: "#595959",
    padding: "10px"
  }
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, { getProductsByCategory })(MainHeader);
