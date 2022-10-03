import React from "react";
import ThreeCard from "../../common/three cards/ThreeCard";
import Header from "../../common/header/Header";
import "../../common/utility.css";
import "./home.css";

const Home = () => {
  // let card = document.getElementsByClassName(".card")

  return (
    <>
      <div className="main">
        <div className="main-container">
          <Header />
          <ThreeCard
            firstImage="image/icon-data-analytic-accept.png"
            firstHeading="Online Reputation Management"
            firstDesc="Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution."
            secondImage="image/icon-target-calculator-calcucations.png"
            secondHeading="Conversion Rate Optimization"
            secondDesc="Turn your visitors into customers with our team of experts. We'll analyze your website and create a conversion-rate strategy. "
            thirdImage="image/icon-chart-analytic-graph.png"
            thirdHeading="Online Reputation Management"
            thirdDesc="Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
