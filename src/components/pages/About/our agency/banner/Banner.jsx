import React from "react";
import "../../../../common/utility.css";
import "./banner.css"

const Banner = () => {
  return (
    <div className="banner">
      <div className="main-container flex">
        <div className="flex-basis">
          <h1 className="heading">A full service digital marketing agency</h1>
          <p className="description">
            Our team develops effective content strategies for forward thinking
            companies. We have a proven track record in increasing search engine
            rankings.
          </p>
        </div>
        <div className="flex-basis">
            <img src="image/about/agency/illustrations-idea-startup.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
