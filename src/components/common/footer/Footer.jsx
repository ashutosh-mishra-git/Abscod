import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-before">
        <div className="main-container">
          <div className="fb-content">
            <h2 className="fb-detail">
              We offer Technical SEO Audits, Search Engine Optimization
              Strategies, Google AdWords Advertising (Search Engine Marketing,
              Pay per Click Management & Video Advertising), Social Media
              Strategies and Creative Content Resulting in Fully Managed and
              Highly Successful Online Marketing Campaigns.
            </h2>
            <div className="contact-info">
              <p className="number">+91 8630062102</p>
              <p className="email">
                {" "}
                <img src="image/icon-img/email.png" alt="" /> info@abscod.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="main-container">
          <div className="footer-content">
            <p className="copyright">
              ©2021 <b>Abscod Informatics.</b> All Rights Reserved.
            </p>
            <img src="image/logo2.png" alt="" />
            <div className="policy">
              <p className="private-policy">Private Policy | </p>
              <p className="terms"> Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
