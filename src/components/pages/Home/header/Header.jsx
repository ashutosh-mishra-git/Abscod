import React from "react";
import "./header.css";


const Header = () => {
  return (
    <div>
      <div className="main-container">
        <section className="flex hero-section">
          <div className="flex-basis">
            <p className="hero-upper-desc">DIGITAL MARKETING STRATEGY</p>
            <h1 className="hero-heading fw-bold">We bring you new customers</h1>
            <p className="hero-lower-desc ">
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
          <div className="flex-basis">
          <div className="container">
      <div className="contact-form-wrapper d-flex justify-content-center">
          <form  method="post" className="contact-form">
              <h5 className="title">Have a Query, Fill The Form
              </h5>
              <div>
                  <input type="text" name="name" className="form-control rounded border-white mb-3 form-input mb-10" id="name" placeholder="Name" required="" />
              </div>
              <div>
                  <input type="phone" name="mobile" className="form-control rounded border-white mb-3 form-input mb-10" placeholder="Phone No." required="" />
              </div>
              <div>
                  <input name="email" type="email" className="form-control rounded border-white mb-3 form-input mb-10" placeholder="Email" required="" />
              </div>
              <div>
                  <textarea name="message" className="form-control rounded border-white mb-3 form-text-area mb-10" rows="3" cols="30" placeholder="Message"></textarea>
              </div>
              <div className="submit-button-wrapper">
                  <input type="submit" value="Send" />
              </div>
              
          </form>
      </div>
  </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
