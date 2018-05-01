import React, { Component } from "react";
import ImageGallery from "./ImageGallery";
import ProductInfoColumn from "./ProductInfoColumn";
import MainHeaderComponent from "../Header/MainHeaderComponent";
import Footer from "../Footer/Footer";
import MainNavigation from "../Header/MainNavigation";
import axios from "axios";

class ProductView extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    };
  }
  componentDidMount() {
    axios.get(`/api/product/${this.props.match.params.id}`).then(response => {
      console.log("this is product response", response.data[0]);
      this.setState({ product: response.data[0] });
    });
  }

  render() {
    return (
      <div className="views">
        <MainHeaderComponent />
        <MainNavigation />
        <div className="product-view-container">
          <ImageGallery />
          <ProductInfoColumn product={this.state.product} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductView;


