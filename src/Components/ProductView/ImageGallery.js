import React, { Component } from "react";
import "./productViewStyles.css";

class ImageGallery extends Component {
  render() {
    return (
      <div className="main-image-gallery-body">
        <img alt="main image" />
        <div>
          <img alt="small image" />
          <img alt="small image" />
          <img alt="small image" />
        </div>
      </div>
    );
  }
}

export default ImageGallery;
