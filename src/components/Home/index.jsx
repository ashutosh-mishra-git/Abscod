import React from "react";
import "../utility.css";
import "./home.css";

const Home = () => {
let card = document.getElementsByClassName(".card")

  return (
    <>
      <div className="main">
        <div className="container">
          <section className="row  hero-section align-items-end mt-4">
            <div className="col col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <p className="h5 hero-desc">DIGITAL MARKETING STRATEGY</p>
              <h1 className="display-3 fw-bold">We bring you new customers</h1>
              <p className="h5 mt-3">
                We build effective strategies to help you reach customers and
                prospects across the entire web.
              </p>
              <div>
                <button className="btn mt-4 btn-outline-dark">Get Quote</button>
              </div>
              <img
                className="w-50 mt-4"
                src="image/marketing-badges.png"
                alt=""
              />
            </div>
            <div className="col col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <img
                className="img-fluid"
                src="https://abscod.com/wp-content/uploads/illustrations-climbthechart.png"
                alt=""
              />
            </div>
          </section>
          <section className="service my-5 text-center">
            <div className="row g-4">
              <div  className="col-4">
                <div onMouseEnter={this.classList("shadow-lg")}  className="card p-3 border-0 rounded-4 shadow-sm ">
                  <img
                    src="image/icon-data-analytic-accept.png "
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card p-3 border-0 rounded-4 shadow-sm ">
                  <img
                    src="image/icon-target-calculator-calcucations.png "
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card p-3 border-0 rounded-4 shadow-sm ">
                  <img
                    src="image/icon-chart-analytic-graph.png"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container px-4 text-center">
              <div className="row gx-5">
                <div className="col border border-2 border-dark">
                  <img
                    src="image/icon-data-analytic-accept.png "
                    className=" img-fluid"
                    alt="..."
                  />
                  <div className="">
                    <h5 className="">Card title</h5>
                    <p className="">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
                <div className="col border border-2 border-dark">
                  <img
                    src="image/icon-data-analytic-accept.png "
                    className=" img-fluid"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="">Card title</h5>
                    <p className="">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
