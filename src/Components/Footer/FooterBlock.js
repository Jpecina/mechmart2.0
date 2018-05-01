import React from "react";
import "./footer.css";

function FooterBlock(props) {
  return (
    <div className="footer-block-body" id={props.middleStyle}>
      {props.children}
    </div>
  );
}

export default FooterBlock;
