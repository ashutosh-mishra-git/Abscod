import React from "react";
import ThreeCard from "./three cards/ThreeCard";
import Header from "./header/Header";
import "../../common/utility.css";
import "./home.css";
import FourCard from "./four cards/FourCard";
import IconBox from "./iconBox/IconBox";
import Testimonial from "./testimonial/Testimonial";
import CaseStudies from "./case studies/CaseStudies";

const Home = () => {
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
          fourHeading="Web Development"
        />
        <IconBox />

        <Testimonial />
        {/* <CaseStudies /> */}
      </div>
    </>
  );
};

export default Home;
