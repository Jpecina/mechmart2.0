import React, { Component } from "react";
import "../Featured/featured.css";
import { connect } from "react-redux";
import { getAllProducts } from "../../ducks/reducer";
import ProductCard from "../ProductCards/ProductCard";

class ShopRender extends Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  handleRender() {}
  render() {
    const { allProducts } = this.props;
    if (!allProducts) {
      return <div>loading</div>;
    }

    const productList = allProducts.map((product, i) => {
      let parsedImagesArray = product.product_images.split(",");
      console.log("this is parsedImages", parsedImagesArray);
      return (
        <ProductCard
          productImages={parsedImagesArray[0]}
          productBrand={product.product_brand}
          productName={product.product_name}
          productPrice={product.product_price}
        />
      );
    });
    return (
      <div>
        <div id="featured-text-div">
          <h2 style={{ fontWeight: "300" }}>All Products</h2>
        </div>
        <div className="featured-list-render-body-div">{productList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getAllProducts })(ShopRender);
