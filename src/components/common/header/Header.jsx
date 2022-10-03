import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div>
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
              <img
                className="hero-img"
                src="https://abscod.com/wp-content/uploads/illustrations-climbthechart.png"
                alt=""
              />
            </div>
          </section>
    </div>
  )
}

export default Header
