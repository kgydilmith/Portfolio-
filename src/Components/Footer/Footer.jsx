import React from "react";
import "./Footer.css";
import use_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          
        </div>
        <div className="footer-top-right">
          {/* <div className="footer-email-input">
            <img src={use_icon} alt="" />
            <input type="text" placeholder="enter you email" />
          </div>
          <div className="footer-subscribe">Subscribe</div> */}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">all rights</p>
        <div className="footer-bottom-right">
          <p>term of service</p>
          <p>privacy policy</p>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
