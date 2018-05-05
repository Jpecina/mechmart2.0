import React, { Component } from "react";
import "./imgSlideShow.css";

class ImgSlideShowComponent extends Component {
  constructor(){
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <img
          src="https://s3.us-east-2.amazonaws.com/mechmart-2/Honeywell_Classic_001.png"
          style={{ width: "1000px", marginTop: "100px" }}
        />
        <div className="available-now-div">
          <h1>GMK Honeywell</h1>
          <h2>Available Now</h2>
        </div>
      </div>
    );
  }
}
export default ImgSlideShowComponent;
