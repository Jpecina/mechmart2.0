import React, { Component } from "react";
import "./featured.css";

class FeaturedComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 style={{ fontWeight: "300" }}>Featured Products</h2>
        </div>
        <div className="featured-list-render-body-div" />
      </div>
    );
  }
}

export default FeaturedComponent;
