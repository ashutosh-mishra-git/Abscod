import React from "react";
import "./navbar.css";
import Topbar from "./topbar/Topbar";
import {Link} from 'react-router-dom'

const Navbar = () => {  
 
   window.addEventListener('load',()=>{
    document.getElementById("navbar").style.top = "30px";
   })

  window.addEventListener('wheel',(event)=>{
       if(window.pageYOffset<150){
      document.getElementById("navbar").style.top = "30px";
     }
     else{
      document.getElementById("navbar").style.top = "0px";
     }
    
  })




  return (
    <div>
      <Topbar />
      <nav id="navbar">
        <div className="wrapper">
          <div className="logo">
            <Link to='/'>
              {" "}
              <img src="image/logo.png" alt="" />
             </Link>
          </div>
          <div className="navigation">
            <input type="radio" name="slide" id="menuBtn" />
            <input type="radio" name="slide" id="cancelBtn" />
            <ul className="nav-links">
              <label className="cancel-btn" htmlFor="cancelBtn">
                <i className="fa-sharp fa-solid fa-xmark"></i>
              </label>
              <li>
                <Link className="desktop-item" to="/">
                  Home
                </Link>
                <input type="checkbox" name="" id="About-showMega" />
                <label className="mobile-item" htmlFor="About-showMega">
                  Home
                </label>
                {/* <div className="mega-box about-mega-box">
                  <div className="content">
                    <div className="row">
                      <header>Agency</header>
                      <p className="mega-menu-desc">Highly Experienced Team</p>
                      <ul className="mega-links">
                        <li>
                         <Link to="/agency">Our Agency</Link>
                        </li>
                        <li>
                        <Link to="/services">Our Services</Link>
                        </li>
                        <li>
                        <Link to="/pricing">Pricing Packages</Link>
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
                          <Link to="/">Our Clients</Link>
                        </li>
                        <li>
                        <Link to="/">Testimonials</Link>
                        </li>
                        <li>
                        <Link to="/">Free Resources</Link>
                        </li>
                        <li>
                        <Link to="/">Case Studies</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </li>
              <li>
                <Link className="desktop-item" to="/agency">
                  About
                </Link>
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
                          <Link to="/agency">Our Agency</Link>
                        </li>
                        <li>
                          <Link to="/services">Our Services</Link>
                        </li>
                        <li>
                        <Link to="/pricing">Pricing Packages</Link>
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
                          <Link to="/clients">Our Clients</Link>
                        </li>
                        <li>
                          <Link to="/">Testimonials</Link>
                        </li>
                        <li>
                          <Link to="/">Free Resources</Link>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link className="desktop-item" to="/services">
                  Services
                </Link>
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
                          <Link to="/">Content Marketing Strategy</Link>
                        </li>
                        <li>
                        <Link to="/">Web Design</Link>
                        </li>
                        <li>
                        <Link to="/">Web Development</Link>
                        </li>
                        <li>
                        <Link to="/">Mobile Marketing</Link>
                        </li>
                        <li>
                        <Link to="/">Digital Consultancy</Link>
                        </li>
                        <li>
                        <Link to="/">Reputation Management</Link>
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
                          <a to="/">Search Engine Optimization</a>
                        </li>
                        <li>
                          <a to="/">Local SEO</a>
                        </li>
                        <li>
                          <a to="/">Social Media Marketing</a>
                        </li>
                        <li>
                          <a to="/">Email Marketing</a>
                        </li>
                        <li>
                          <a to="/">Pay Per Click (PPC) Management</a>
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
                          <a to="/">Conversion Rate Optimization</a>
                        </li>
                        <li>
                          <a to="/">Online presence analysis</a>
                        </li>
                        <li>
                          <a to="/">Affiliate Management</a>
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
                <a to="/">Case Studies</a>
              </li> */}
              <li>
                <Link className="desktop-item" to="/contact_us">
                  Contact
                </Link>
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
                          <a to="/">Single Address</a>
                        </li>
                        <li>
                          <a to="/">Multiply Addresses</a>
                        </li>
                        <h6 className="fw-bold mt-3">Simple Forms:</h6>
                        <li>
                          <a to="/">Free SEO analysis</a>
                        </li>
                        <li>
                          <a to="/">PayPal Service Order</a>
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
                          <a to="/">Instant SEO Services Quote</a>
                        </li>
                        <li>
                          <a to="/">Web Design & Development Quote</a>
                        </li>
                        <li>
                          <a to="/">Digital Ad Services Quote</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className="desktop-item " to="/">
                  Blog
                </a>
                <input type="checkbox" name="" id="showDrop" />
                <label className="mobile-item" htmlFor="showDrop">
                  Blog
                </label>
                <ul className="dropdown">
                  <li>
                    <a to="/">Blog 1</a>
                  </li>
                  <li>
                    <a to="/">Blog 2</a>
                  </li>
                  <li>
                    <a to="/">Blog 3</a>
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
