import React, { Component } from "react";
import "./testimonial.css";
import "../../common/utility.css";

const Testimonial = () => {
  return (
    <div className="main-testimonial">
      <div className="client">
        <div className="main-container">
          <div className="client-container">
            <img src="image/icon-img/clientlogo-5.png" alt="" />
            <img src="image/icon-img/clientlogo-6.png" alt="" />
            <img src="image/icon-img/clientlogo-8.png" alt="" />
            <img src="image/icon-img/clientlogo-9.png" alt="" />
            <img src="image/icon-img/clientlogo-11.png" alt="" />
            <img src="image/icon-img/clientlogo-12.png" alt="" />
          </div>
        </div>
      </div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div className="main-container">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-block carousel-item-bg w-100 ">
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
              </div>
            </div>
            <div class="carousel-item">
              <div class="d-block carousel-item-bg w-100 ">
                <img
                  className="message-icon"
                  src="image/message-icon.png"
                  alt=""
                />

                <h3 className="t-message">
                  “We have a constant flow of new leads thanks to this amazing
                  SEO company. They gave us all the tools to convert leads into
                  customers.”
                </h3>
                <h5 className="t-person-name">Jeffery Polk </h5>
                <p className="t-person-proffesion">CEO & Founder</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
