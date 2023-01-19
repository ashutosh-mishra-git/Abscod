import React from "react";
import "./navbar.css";
import Topbar from "./topbar/Topbar";

const Navbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if(currentScrollPos===prevScrollpos){
      document.getElementById("navbar").style.top = "30px";
    }
    else if( currentScrollPos>prevScrollpos){
      document.getElementById("navbar").style.top = "0px";
    }
    else if (prevScrollpos > currentScrollPos) {
      // document.getElementById("navbar").style.top = "30px";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = "1";
    } else {
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("navbar").style.visibility = "visible";
      document.getElementById("navbar").style.opacity = "1";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div>
      <Topbar />
      <nav id="navbar">
        <div className="wrapper">
          <div className="logo">
            <a href="/">
              {" "}
              <img src="image/logo.png" alt="" />
            </a>
          </div>
          <div className="navigation">
            <input type="radio" name="slide" id="menuBtn" />
            <input type="radio" name="slide" id="cancelBtn" />
            <ul className="nav-links">
              <label className="cancel-btn" htmlFor="cancelBtn">
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </label>
              <li>
                <a className="desktop-item" href="/">
                  Home
                </a>
                <input type="checkbox" name="" id="About-showMega" />
                <label className="mobile-item" htmlFor="About-showMega">
                  Home
                </label>
                <div className="mega-box about-mega-box">
                  <div className="content">
                    <div className="row">
                      <header>Agency</header>
                      <p className="mega-menu-desc">Highly Experienced Team</p>
                      <ul className="mega-links">
                        <li>
                          <a href="/agency">Our Agency</a>
                        </li>
                        <li>
                          <a href="/services">Our Services</a>
                        </li>
                        <li>
                          <a href="/pricing">Pricing Packages</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header className="ex">Experience</header>
                      <p className="mega-menu-desc">
                        Selected clients and projects
                      </p>
                      <ul className="mega-links">
                        <li>
                          <a href="/">Our Clients</a>
                        </li>
                        <li>
                          <a href="/">Testimonials</a>
                        </li>
                        <li>
                          <a href="/">Free Resources</a>
                        </li>
                        <li>
                          <a href="/">Case Studies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className="desktop-item" href="/">
                  About
                </a>
                <input type="checkbox" name="" id="About-showMega" />
                <label className="mobile-item" htmlFor="About-showMega">
                  About
                </label>
                <div className="mega-box about-mega-box">
                  <div className="content">
                    <div className="row">
                      <header>Agency</header>
                      <p className="mega-menu-desc">Highly Experienced Team</p>
                      <ul className="mega-links">
                        <li>
                          <a href="/agency">Our Agency</a>
                        </li>
                        <li>
                          <a href="/services">Our Services</a>
                        </li>
                        <li>
                          <a href="/pricing">Pricing Packages</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header className="ex">Experience</header>
                      <p className="mega-menu-desc">
                        Selected clients and projects
                      </p>
                      <ul className="mega-links">
                        <li>
                          <a href="/">Our Clients</a>
                        </li>
                        <li>
                          <a href="/">Testimonials</a>
                        </li>
                        <li>
                          <a href="/">Free Resources</a>
                        </li>
                        <li>
                          <a href="/">Case Studies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className="desktop-item" href="/">
                  Services
                </a>
                <input type="checkbox" name="" id="Service-showMega" />
                <label className="mobile-item" htmlFor="Service-showMega">
                  Services
                </label>
                <div className="mega-box service-mega-box">
                  <div className="content">
                    <div className="row">
                      <header>Web Development</header>
                      <p className="mega-menu-desc">
                        Web Design & Development Solutions
                      </p>
                      <ul className="mega-links">
                        <li>
                          <a href="/">Content Marketing Strategy</a>
                        </li>
                        <li>
                          <a href="/">Web Design</a>
                        </li>
                        <li>
                          <a href="/">Web Development</a>
                        </li>
                        <li>
                          <a href="/">Mobile Marketing</a>
                        </li>
                        <li>
                          <a href="/">Digital Consultancy</a>
                        </li>
                        <li>
                          <a href="/">Reputation Management</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header className="ex">Online Marketing</header>
                      <p className="mega-menu-desc">
                        How we can help you to get more sales
                      </p>
                      <ul className="mega-links">
                        <li>
                          <a href="/">Search Engine Optimization</a>
                        </li>
                        <li>
                          <a href="/">Local SEO</a>
                        </li>
                        <li>
                          <a href="/">Social Media Marketing</a>
                        </li>
                        <li>
                          <a href="/">Email Marketing</a>
                        </li>
                        <li>
                          <a href="/">Pay Per Click (PPC) Management</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header className="ex"> Sales Optimization</header>
                      <p className="mega-menu-desc">
                        Improve the success of marketing efforts
                      </p>
                      <ul className="mega-links">
                        <li>
                          <a href="/">Conversion Rate Optimization</a>
                        </li>
                        <li>
                          <a href="/">Online presence analysis</a>
                        </li>
                        <li>
                          <a href="/">Affiliate Management</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header className="ex">
                        Full Service Digital Creative Agency
                      </header>
                      <p className="mega-menu-desc">
                        We have a strategy, experience and a proven track record
                        in increasing leads for our clients
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li>
                <a href="/">Case Studies</a>
              </li> */}
              <li>
                <a className="desktop-item" href="/">
                  Contact
                </a>
                <input type="checkbox" name="" id="Contact-showMega" />
                <label className="mobile-item" htmlFor="Contact-showMega">
                  Contact
                </label>
                <div className="mega-box contact-mega-box">
                  <div className="content">
                    <div className="row">
                      <header> Contact Us</header>
                      <p className="mega-menu-desc">
                        Contact pages with maps, addresses and contact forms.
                      </p>
                      <ul className="mega-links">
                        <li>
                          <a href="/">Single Address</a>
                        </li>
                        <li>
                          <a href="/">Multiply Addresses</a>
                        </li>
                        <h6 className="fw-bold mt-3">Simple Forms:</h6>
                        <li>
                          <a href="/">Free SEO analysis</a>
                        </li>
                        <li>
                          <a href="/">PayPal Service Order</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header className="ex">Instant Quote</header>
                      <p className="mega-menu-desc">
                        Predefined form templates with instant quote and payment
                        options.
                      </p>
                      <ul className="mega-links">
                        <li>
                          <a href="/">Instant SEO Services Quote</a>
                        </li>
                        <li>
                          <a href="/">Web Design & Development Quote</a>
                        </li>
                        <li>
                          <a href="/">Digital Ad Services Quote</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className="desktop-item " href="/">
                  Blog
                </a>
                <input type="checkbox" name="" id="showDrop" />
                <label className="mobile-item" htmlFor="showDrop">
                  Blog
                </label>
                <ul className="dropdown">
                  <li>
                    <a href="/">Blog 1</a>
                  </li>
                  <li>
                    <a href="/">Blog 2</a>
                  </li>
                  <li>
                    <a href="/">Blog 3</a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              id="nav-btn"
              className="btn btn-outline-dark nav-btn px-4 py-2 rounded-pill "
            >
              Free Quote
            </button>
            <label htmlFor="menuBtn">
              <i className="bar-btn fa-sharp fa-solid fa-bars"></i>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
