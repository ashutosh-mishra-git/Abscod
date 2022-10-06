import React from 'react'
import "../../common/utility.css";
import "./iconbox.css";

const IconBox = () => {
  return (
    <div>
      <section className="iconBox-container">
        <div className="main-container">
            <div className="flex">
                <div className="iconBox">
                    <img src="image/icon-img/small-icon-target.png" alt="" className="icon-img" />
                    <a className="icon-heading">Local Search Strategy</a>
                    <p className="icon-description">Maximize your presence on search engine results pages on a local scale.</p>
                </div>
                <div className="iconBox"></div>
                <div className="iconBox"></div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default IconBox
