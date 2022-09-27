import React from "react";
import "../utility.css";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <section className="row hero-section align-items-center">
            <div className="col-md-6 ">
              <p className="h5 hero-desc" >
                DIGITAL MARKETING STRATEGY
              </p>
              <h1 className="display-2 fw-bold">We bring you new customers</h1>
              <p className="h4">
                We build effective strategies to help you reach customers and
                prospects across the entire web.
              </p>
            </div>
            <div className="col-md-6 ">
              <img
                className="w-100"
                src="https://abscod.com/wp-content/uploads/illustrations-climbthechart.png"
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
