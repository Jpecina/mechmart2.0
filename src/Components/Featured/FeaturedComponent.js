import React, { Component } from "react";
import "./featured.css";
import { connect } from "react-redux";
import { getFeaturedProducts } from "../../ducks/reducer";
import ProductCard from "../ProductCards/ProductCard";
import { Link } from "react-router-dom";
class FeaturedComponent extends Component {
  componentDidMount() {
    this.props.getFeaturedProducts();
    // console.log(this.props);
  }
  handleRender() {}
  render() {
    // console.log(this.props.featuredProducts);
    const { featuredProducts } = this.props;
    // console.log(featuredProducts);
    if (!featuredProducts) {
      return <div>loading</div>;
    }

    const featuredList = featuredProducts.map((featuredProduct, i) => {
      // console.log(
      //   "this is the featured product",
      //   featuredProduct.product_images
      // );
      let parsedImagesArray = featuredProduct.product_images.split(",");
      // console.log("this is parsedImages", parsedImagesArray);
      return (
        <Link
          to={`/shop/item/${featuredProduct.product_id}`}
          style={styles.linkStyles}
        >
          <ProductCard
            productImages={parsedImagesArray[0]}
            productBrand={featuredProduct.product_brand}
            productName={featuredProduct.product_name}
            productPrice={featuredProduct.product_price}
          />
        </Link>
      );
    });
    return (
      <div>
        <div id="featured-text-div">
          <h2 style={{ fontWeight: "300" }}>Featured Products</h2>
        </div>
        <div className="featured-list-render-body-div">{featuredList}</div>
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

const mapStateToProps = state => state;
export default connect(mapStateToProps, { getFeaturedProducts })(
  FeaturedComponent
);
