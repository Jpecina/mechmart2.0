import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function MainHeaderComponent(props) {
  function handleUser() {}
  console.log("this is users", props.users);
  return (
    <div className="header-logo-icons-main-div">
      <div id="logo">
        <h1>MechMart</h1>
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

const mapStateToProps = state => state;
export default connect(mapStateToProps)(MainHeaderComponent);
