import React from 'react'
import './topbar.css'

export default function Topbar() {
    
   

  return (
    <div>
        <div class="top-navbar style-9" id='topbar'>
        <div class="container">
            <div class="row justify-content-between align-items-center gx-0">
                <div class="col-7">
                    <div class="top_info">
                        <a href="mailto: info@abscod.in" class="me-4">
                            <i class="fas fa-envelope-open me-1" style={{color:"grey"}}></i>
                            <span style={{color:"grey"}}>info@abscod.in</span>
                        </a>
                        <a href="tel: +91 **********">
                            <i class="fas fa-phone me-1" style={{color:"grey"}}></i>
                            <span style={{color:"grey"}}>+91 22222222</span>
                        </a>
                    </div>
                </div>
                <div class="col-5">
                    <div class="side_links d-flex justify-content-lg-end">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
