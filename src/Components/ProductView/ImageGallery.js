import React, { Component } from "react";
import "./productViewStyles.css";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ""
    };
  }

  handleClick(image) {
    this.setState({ currentImage: image });
  }
  render() {
    // console.log("in image gallery component", this.props.firstImage);
    let imagesList = this.props.productImages.map((image, i) => {
      // console.log("map:", image);
      return (
        <div
          onClick={() => this.handleClick(image)}
          style={{
            backgroundImage: `url(${image})`,
            width: "113px",
            height: "88px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      );
    });
    return (
      <div className="main-image-gallery-body">
        <img
          src={this.state.currentImage || this.props.productImages[0]}
          id="main-product-image"
        />
        <div className="small-image-container">{imagesList}</div>
      </div>
    );
  }
}

export default ImageGallery;
