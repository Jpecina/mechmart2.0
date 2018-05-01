import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { connect } from "react-redux";
import { getUsers } from "./ducks/reducer";

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return <div className="App">{Routes}</div>;
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUsers })(App);
