import React from "react";
import "./navbar.css";

const Navbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      //   document.getElementById("navbar").style.display = "block";
    } else {
      document.getElementById("navbar").style.top = "-100px";
      //   document.getElementById("navbar").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div>
      {/* <nav id="navbar" className="navbar">
        <div className="navbar-container">
          <div className="nav-logo">
            <img
              src="https://abscod.com/wp-content/uploads/cropped-abslogo1.png"
              alt=""
            />
          </div>
          <div className="nav-links">
            <div className="dropdown">
              <a>About</a>
              <div className="dropdown-container">
                <div className="dropdown-content ">
                  <div className="dropdown-col">
                    <h4 className="dropdown-heading">Agency</h4>
                    <p className="dropdown-description">
                      Highly Experienced Team
                    </p>
                    <ul className="dropdown-list">
                      <li>
                        <a href="">Our Agency</a>
                      </li>
                      <li>
                        <a href="">Our Services</a>
                      </li>
                      <li>
                        <a href="">Pricing Packages</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-col">
                    <h4 className="dropdown-heading">Experience</h4>
                    <p className="dropdown-description">
                      Selected clients and projects
                    </p>
                    <ul className="dropdown-list">
                      <li>
                        <a href="">Our Clients</a>
                      </li>
                      <li>
                        <a href="">Testimonial</a>
                      </li>
                      <li>
                        <a href="">Free Resources</a>
                      </li>
                      <li>
                        <a href="">Case Studies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <a>Services</a>
              <div className="dropdown-container">
                <div className="dropdown-content ">
                  <div className="dropdown-col">
                    <h4 className="dropdown-heading">Website Development</h4>
                    <p className="dropdown-description">
                      Web Design & Development Solutions
                    </p>
                    <ul className="dropdown-list">
                      <li>
                        <a href="">Our Agency</a>
                      </li>
                      <li>
                        <a href="">Our Services</a>
                      </li>
                      <li>
                        <a href="">Pricing Packages</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-col">
                    <h4 className="dropdown-heading">Experience</h4>
                    <p className="dropdown-description">
                      Selected clients and projects
                    </p>
                    <ul className="dropdown-list">
                      <li>
                        <a href="">Our Clients</a>
                      </li>
                      <li>
                        <a href="">Testimonial</a>
                      </li>
                      <li>
                        <a href="">Free Resources</a>
                      </li>
                      <li>
                        <a href="">Case Studies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-col">
                    <h4 className="dropdown-heading">Experience</h4>
                    <p className="dropdown-description">
                      Selected clients and projects
                    </p>
                    <ul className="dropdown-list">
                      <li>
                        <a href="">Our Clients</a>
                      </li>
                      <li>
                        <a href="">Testimonial</a>
                      </li>
                      <li>
                        <a href="">Free Resources</a>
                      </li>
                      <li>
                        <a href="">Case Studies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-highlight">
                    <a href="">Full Service Digital Creative Agency</a>
                    <br />
                    <span className="highlight-description">
                      We have a strategy, experience and a proven track record
                      in increasing leads for our clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <a href="">Case Studies</a>
            </li>
            <div className="dropdown">
              <a>Contact</a>
              <div className="dropdown-container">
                <div className="dropdown-content ">
                  <div className="dropdown-col">
                    <h4 className="dropdown-heading">Contact Us</h4>
                    <p className="dropdown-description">
                      Contact pages with maps, addresses and contact forms.
                    </p>
                    <ul className="dropdown-list">
                      <li>
                        <a href="">Single Address</a>
                      </li>
                      <li>
                        <a href="">Multiple Address</a>
                      </li>
                      <h5>Single Forms</h5>
                      <li>
                        <a href="">Free Seo analysis</a>
                      </li>
                      <li>
                        <a href="">PayPal Service Order</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-col">
                    <h4 className="dropdown-heading">Instant Quote</h4>
                    <p className="dropdown-description">
                      Predefined form templates with instant quote and payment
                      options.{" "}
                    </p>
                    <ul className="dropdown-list">
                      <li>
                        <a href="">Our Clients</a>
                      </li>
                      <li>
                        <a href="">Testimonial</a>
                      </li>
                      <li>
                        <a href="">Free Resources</a>
                      </li>
                      <li>
                        <a href="">Case Studies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <a href="">Blog</a>
            </li>
            <div className="nav-cta">
              <button className="btn">Free Quote</button>
              <i class="mx-5 bar-icon fa fa-bars" aria-hidden="true"></i>

            </div>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg  bg-white">
        <div class="container">
          <a class="navbar-brand img-fluid nav-logo" href="#">
            <img src="image/logo.png" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  mb-2 ms-auto flex-nowrap mb-lg-0">
            <li class="nav-item mx-2  dropdown">
              <a class="nav-link  text-dark dropdown-toggle" href="#" data-bs-toggle="dropdown">About </a>
                <ul class="dropdown-menu ">
                  <div className="d-flex justify-content-between  ">
                    <div className="col-md-12">
                      <h6 className="text">Lorem ipsum dolor sit amet.</h6>
                      <p>Lorem</p>
                      <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                      <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                      <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                    </div>
                    <div className="col-md-12">
                      <h6 className="text">Lorem ipsum dolor sit amet.</h6>
                      <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                      <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                      <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                    </div>
                  </div>
                </ul>
	        	</li> 
            <li class="nav-item mx-2  dropdown">
                <a 
                  class="nav-link text-dark dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item mx-2 " >
                <a class="nav-link text-dark" href="#">
                  Case Studies
                </a>
              </li>
              <li class="nav-item mx-2  dropdown">
                <a 
                  class="nav-link text-dark dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item mx-2  dropdown">
                <a 
                  class="nav-link text-dark dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <button class="btn btn-outline-dark  mx-3" type="submit">Free Quote</button>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
