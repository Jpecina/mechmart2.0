import React from "react";
import { Link } from "react-router-dom";

function MainHeaderComponent(props) {
  function handleUser() {}
  console.log("this is users", props.users);
  return (
    <div className="header-logo-icons-main-div">
      <div id="logo">
        <Link to="/" style={styles.linkStyles}>
          <h1>MechMart</h1>
        </Link>
      </div>
      <div id="nav-icons">
        <h6>search</h6>
        <h6>cart</h6>
        <a href={process.env.REACT_APP_LOGIN}>
          <h6>Login</h6>
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
