import React from "react";
import ThreeCard from "../../common/three cards/ThreeCard";
import Header from "../../common/header/Header";
import "../../common/utility.css";
import "./home.css";
import FourCard from "../../common/four cards/FourCard";
import IconBox from "../../common/iconBox/IconBox";

const Home = () => {
  // let card = document.getElementsByClassName(".card")

  return (
    <>
      <div className="main">
       
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
          <FourCard
           firstImage="image/icon-agreement-partnership-world.png"
           firstHeading="Social Media Marketing"
           secondImage="image/icon-invest-data-finance.png"
           secondHeading="Organic Long-Term SEO"
           thirdImage="image/icon-target-chart-report.png"
           thirdHeading="Advanced Analytics"
           fourImage="image/icon-office-world-finance-money.png"
           fourHeading="Social Media Marketing"
          />
          <IconBox/>
        </div>
     
    </>
  );
};

export default Home;
