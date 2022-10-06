import React from "react";
import "./fourcards.css";
import "../../common/utility.css";

const FourCard = (props) => {
  return (
    <div>
      <section className="card-wrapper my-5 text-center">
        <div className="main-container">
          <p className="description">
            SEARCH ENGINE & SOCIAL MEDIA OPTIMIZATION
          </p>
          <h1 className="heading">Full Service Digital Marketing Agency</h1>

          <div className="flex ">
            <div className="card-container">
              <div className="card mycard border-0 p-3 rounded-4 ">
                <img
                  src={props.firstImage}
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h5 className="mycard-title card-title">
                    {props.firstHeading}
                  </h5>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card mycard border-0 p-3 rounded-4 ">
                <img
                  src={props.secondImage}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="mycard-title card-title">
                    {props.secondHeading}
                  </h5>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card mycard border-0 p-3 rounded-4 ">
                <img
                  src={props.thirdImage}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="mycard-title card-title">
                    {props.thirdHeading}
                  </h5>
                </div>
              </div>
            </div>
            <div className="card-container">
              <div className="card mycard border-0 p-3 rounded-4 ">
                <img
                  src={props.fourImage}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="mycard-title card-title">
                    {props.fourHeading}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FourCard;
