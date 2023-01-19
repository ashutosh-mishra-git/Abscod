import React from 'react'
import './banner.css'

export default function Banner() {
  return (
    <div className="banner">
    <div className="main-container flex">
      <div className="flex-basis">
        <h1 className="heading">Customers List</h1>
        <p className="description">
        Our team services a diverse global portfolio to increase sales and conversion rates. Here is a small selection of the clients that we represent on a daily basis.
        </p>
      </div>
      <div className="flex-basis">
          <img src="image/about/clients/illustration-unicorn-startup.png" alt="" />
      </div>
    </div>
  </div>
  )
}
