import React from 'react'
import "./threeCard.css"
import "../../common/utility.css"

const ThreeCard = (props) => {
  return (
    <div> 
       <section className="service  my-5 text-center">
            <div className="flex ">
              <div  className="service-section">
                <div  className="card p-3 border-0 rounded-4 shadow-sm ">
                  <img
                    src={props.firstImage}
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{props.firstHeading}</h5>
                    <p className="text-black card-text">
                      {props.firstDesc}
                    </p>
                    <a href="#" className="btn btn-outline-dark border-0 px-4 py-2 rounded-pill">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-section">
                <div className="card p-3 border-0 rounded-4 shadow-sm ">
                  <img
                    src={props.secondImage}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{props.secondHeading}</h5>
                    <p className="card-text">
                      {props.secondDesc}
                    </p>
                    <a href="#" className="btn btn-outline-dark border-0 px-4 py-2 rounded-pill">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="service-section">
                <div className="card p-3 border-0 rounded-4 shadow-sm ">
                  <img
                    src={props.thirdImage}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{props.thirdHeading}</h5>
                    <p className="card-text">
                      {props.thirdDesc}
                    </p>
                    <a href="#" className="btn btn-outline-dark border-0 px-4 py-2 rounded-pill">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default ThreeCard
