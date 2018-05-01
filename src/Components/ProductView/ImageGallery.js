import React, { Component } from "react";
import "./productViewStyles.css";

class ImageGallery extends Component {
  render() {
    console.log("in image gallery com", this.props.productImages);

    return (
      <div className="main-image-gallery-body">
        <img alt="main image" />
        <div className="small-image-container">
          <img alt="small image" />
          <img alt="small image" />
          <img alt="small image" />
        </div>
      </div>
    );
  }
}

export default ImageGallery;
