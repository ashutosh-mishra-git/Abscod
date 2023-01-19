import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./casestudies.css";

// import required modules
import { Pagination } from "swiper";

const CaseStudies = () => {
  return (
    <div>
      <div className="main-portfolio">
        <div className="main-container">
          <div className="heading-content">
            <h2 className="heading">Our Case Studies</h2>
            <a href="" className="btn btn-des" >
              See all Project
            </a>
          </div>
          <div className="portfolio-slider">
            <Swiper
              spaceBetween={30}
              modules={[Pagination]}
              breakpoints = {{
                0:{
                  slidesPerView: 1
                },
                480:{
                  slidesPerView: 2
                },
                780:{
                  slidesPerView: 3
                }
              
              }}
              className="mySwiper"
            >
              <SwiperSlide className="swipe-item">
                <img src="image/project-thumb-1-style2.png" alt="" />
                <h3 className="cs-title">Opertray Division</h3>
                <p className="cs-description">
                  This website achieved Google ranking in four months: Ranks
                  #1-#3 for keyword “Opertray”
                </p>
              </SwiperSlide>
              <SwiperSlide className="swipe-item">
                <img src="image/project-thumb-2-style2.png" alt="" />
                <h3 className="cs-title">Tremely Designs</h3>
                <p className="cs-description">
                  This site applies a smart SEO strategy to acquire online
                  clients via long-tail search…
                </p>
              </SwiperSlide>
              <SwiperSlide className="swipe-item">
                <img src="image/project-thumb-3-style2.png" alt="" />
                <h3 className="cs-title">Plainst Tech</h3>
                <p className="cs-description">
                  Currently, 65% of the total traffic on the site and most of
                  the online…
                </p>
              </SwiperSlide>
              <SwiperSlide className="swipe-item">
                <img src="image/project-thumb-6-style2.png" alt="" />
                <h3 className="cs-title">Maindex Solutions</h3>
                <p className="cs-description">
                  55% of sales come from organic search. Search traffic is the
                  biggest revenue source…
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
