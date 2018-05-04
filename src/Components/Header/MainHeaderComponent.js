import React from "react";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";

function MainHeaderComponent(props) {
  function handleUser() {}
  return (
    <div className="header-logo-icons-main-div">
      <div id="logo">
        <Link to="/" style={styles.linkStyles}>
          <h1>MechMart</h1>
        </Link>
      </div>
      <div id="nav-icons">
        <Ionicon icon="md-search" fontSize="30px" />

        <Ionicon icon="ios-basket-outline" fontSize="30px" />
        <a href={process.env.REACT_APP_LOGIN}>
          <Ionicon icon="md-contact" fontSize="30px" />
        </a>
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

export default MainHeaderComponent;
