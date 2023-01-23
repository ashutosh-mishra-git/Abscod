import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Pagination } from "swiper";

import "./testimonial.css";
import "../../../common/utility.css";

const Testimonial = () => {
  return (
    <div className="main-testimonial">
      <div className="client">
        <div className="main-container">
          <div className="client-container">
            <img className="img-size" src="image/icon-img/clientlogo-5.png" alt="" />
            <img className="img-size" src="image/icon-img/clientlogo-6.png" alt="" />
            <img className="img-size" src="image/icon-img/clientlogo-8.png" alt="" />
            <img className="img-size" src="image/icon-img/clientlogo-9.png" alt="" />
            <img className="img-size" src="image/icon-img/clientlogo-11.png" alt="" />
            <img className="img-size" src="image/icon-img/clientlogo-12.png" alt="" />
          </div>
        </div>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="main-container">
          <Swiper
            spaceBetween={30}
           
            modules={[Pagination]}
            mouseGrab="true"
          >
            <SwiperSlide className="carousel-item-bg ">
              <img
                className="message-icon"
                src="image/message-icon.png"
                alt=""
              />
              <h3 className="t-message">
                “We’ve looked at a lot of SEO solutions but these guys were
                always the clear favorite. They have the right strategy and
                they’ve been awesome to work with.”
              </h3>
              <h5 className="t-person-name">Irene Warner </h5>
              <p className="t-person-proffesion">CEO & Founder </p>
            </SwiperSlide>
            <SwiperSlide className="carousel-item-bg ">
              {" "}
              <img
                className="message-icon"
                src="image/message-icon.png"
                alt=""
              />
              <h3 className="t-message">
                “We have a constant flow of new leads thanks to this amazing SEO
                company. They gave us all the tools to convert leads into
                customers.”
              </h3>
              <h5 className="t-person-name">Jeffery Polk </h5>
              <p className="t-person-proffesion">CEO & Founder</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
