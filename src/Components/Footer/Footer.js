import React from "react";
import "./footer.css";
import FooterBlock from "./FooterBlock";
import * as FontAwesome from "react-icons/lib/fa";

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
          <div>
            <FontAwesome.FaInstagram className="payment-icons" />
            <FontAwesome.FaFacebookOfficial className="payment-icons" />
          </div>
        </FooterBlock>

        <FooterBlock>
          <div className="payment-icons-container">
            <FontAwesome.FaCcStripe className="payment-icons" />
            <FontAwesome.FaCcVisa className="payment-icons" />
            <FontAwesome.FaCcPaypal className="payment-icons" />
            <FontAwesome.FaCcAmex className="payment-icons" />
          </div>
        </FooterBlock>
      </div>
    </div>
  );
}
export default Footer;
