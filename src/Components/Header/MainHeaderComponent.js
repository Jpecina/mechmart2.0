import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";
import axios from "axios";

class MainHeaderComponent extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    axios.get("/api/me").then(response => {
      this.setState({ user: response.data.name });
      // console.log("this is user response", response.data);
    });
  }

  render() {
    // console.log("the user after mount", this.state.user);
    return (
      <div className="header-logo-icons-main-div">
        <div id="logo">
          <Link to="/" style={styles.linkStyles}>
            <h1>MechMart</h1>
          </Link>
        </div>
        <div id="nav-icons">
          {/*<Ionicon icon="md-search" fontSize="30px" />*/}
          <Link to="/cart">
            <Ionicon icon="ios-basket-outline" fontSize="30px" />
          </Link>
          <a href={process.env.REACT_APP_LOGIN}>
            <Ionicon icon="md-contact" fontSize="30px" />
          </a>
        </div>
      </div>
    );
  }
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
