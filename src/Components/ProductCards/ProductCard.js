import React from "react";
import "./productCard.css";

function ProductCard(props) {
  console.log("this is image", props.productImages);
  return (
    <div className="main-card-body">
      <div
        style={{
          height: "60%",
          backgroundImage: `url(${props.productImages})`,
          backgroundSize: "cover"
        }}
      />
      <div className="product-card-text">
        <p style={{ color: "#bbbbbb" }}>{props.productBrand}</p>
        <p style={{ fontWeight: "600" }}>{props.productName}</p>
        <p style={{ fontWeight: "100" }}>${props.productPrice}</p>
      </div>
    </div>
  );
}

export default ProductCard;
