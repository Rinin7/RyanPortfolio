import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__animation">
          <span className="footer__dot footer__dot1">.</span>
          <span className="footer__dot footer__dot2">.</span>
          <span className="footer__dot footer__dot3">.</span>
        </div>
        <div className="footer__copyright">
          <p className="footer__text">©2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
