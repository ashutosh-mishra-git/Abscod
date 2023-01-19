import React from "react";
import "../../../common/utility.css";
import "./iconbox.css";

const IconBox = () => {
  return (
    <div>
      <section className="iconBox-container">
        <div className="main-container">
          <div className="iconBox-text">
            <p className="upper-description">GROW TRAFFIC & INCREASE REVENUE</p>
            <h1 className="iconBox-heading">
              Appear On the Front Page of Google!
            </h1>
            <p className="lower-description">
              We offer professional SEO services that help websites increase
              their organic search score drastically in order to compete for the
              highest rankings — even when it comes to highly competitive
              keywords.{" "}
            </p>
          </div>
          <div className="flex">
            <div className="iconBox">
              <img
                src="image/icon-img/small-icon-target.png"
                alt=""
                className="icon-img"
              />
              <a href="/" className="icon-heading">
                Local Search Strategy
              </a>
              <p className="icon-description">
                Maximize your presence on search engine results pages on a local
                scale.
              </p>
            </div>
            <div className="iconBox">
              <img
                src="image/icon-img/small-icon-globe.png"
                alt=""
                className="icon-img"
              />
              <a href="/" className="icon-heading">
                MAP Search Optimization
              </a>
              <p className="icon-description">
                Google Maps Optimization is an important part for your local
                marketing strategy.
              </p>
            </div>
            <div className="iconBox">
              <img
                src="image/icon-img/small-icon-cogs.png"
                alt=""
                className="icon-img"
              />
              <a href="/" className="icon-heading">
                Link Building & Content
              </a>
              <p className="icon-description">
                Link building is a tremendously important component of Search
                Engine Optimization.
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="iconBox">
              <img
                src="image/icon-img/small-icon-coin.png"
                alt=""
                className="icon-img"
              />
              <a href="/" className="icon-heading">
                Paid Search Advertising
              </a>
              <p className="icon-description">
                Paid listings on Google AdWords can help you reach new
                customers.{" "}
              </p>
            </div>
            <div className="iconBox">
              <img
                src="image/icon-img/small-icon-notebook.png"
                alt=""
                className="icon-img"
              />
              <a href="/" className="icon-heading">
                Custom Website Design
              </a>
              <p className="icon-description">
                Our team specializes in affordable web design and e-commerce.
              </p>
            </div>
            <div className="iconBox">
              <img
                src="image/icon-img/small-icon-mail.png"
                alt=""
                className="icon-img"
              />
              <a href="/" className="icon-heading">
                Email Campaign Design
              </a>
              <p className="icon-description">
                Custom email templates that speak to your customers and resonate
                with your brand.{" "}
              </p>
            </div>
          </div>
          <div className="icon-btn flex p-3">
            <button className="btn btn-dark">Free Seo Consultation</button>
            <button className="btn btn-outline-dark">
              Request a Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconBox;
