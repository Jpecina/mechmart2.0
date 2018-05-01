import React from "react";
import "./footer.css";
import FooterBlock from "./FooterBlock";

function Footer() {
  return (
    <div>
      <div className="footer">
        <FooterBlock>
          <h4>Get In Touch</h4>
          <h5>Email me!</h5>
          <h5>juanpecina21@gmail.com</h5>
        </FooterBlock>
        <FooterBlock middleStyle="middle-footer-block">
          <h3>Follow Us</h3>
          <h5>social icons</h5>
        </FooterBlock>

        <FooterBlock>
          <h4>payment icons</h4>
        </FooterBlock>
      </div>
    </div>
  );
}
export default Footer;
