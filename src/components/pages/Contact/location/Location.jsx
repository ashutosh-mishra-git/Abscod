import React from 'react'

export default function Location() {
  return (
    <div >
       <section className="contact style-13 sec-sty" >
    <div className="container" >
        <div className="row">
            <div className="col-lg-6 gx-0 justify-content-between flex-basis ">
                
               
       
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
     <div className="col-lg-6 add__div " >
          <div className="p-10 p-md-11 p-lg-14 pd50" >
              <div className="pdb10" >
                  <h2> Contact Details </h2>
              </div>
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-location-pin-alt"></i> </div>
              </div>
              <div className="align-self-start justify-content-start mtb20">
                <h5 className="mb-1 h5" ><i className="fa fa-map-marker address-icon" aria-hidden="true"></i>Address</h5>
                <address>A-64, Noida sec-63, Noida, 201301</address>
              </div>
            </div>
          
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-phone-volume"></i> </div>
              </div>
              <div>
                <h5 className="mb-1 h5" ><i className="fa fa-phone address-icon" aria-hidden="true"></i>Phone</h5>
                <p><a href="tel:+91 7011 ******" className="link-body"><span>+91 7011******</span></a></p>
              </div>
            </div>
            
            <div className="d-flex flex-row">
              <div>
                <div className="icon text-primary fs-28 me-4 mt-n1"> <i className="uil uil-envelope"></i> </div>
              </div>
              <div>
                <h5 className="mb-1 h5" ><i className="fa fa-envelope address-icon" aria-hidden="true"></i>E-mail</h5>
                <p className="mb-0"><a href="" className="link-body"><span className="__cf_email__">info@abscod.in</span></a></p>
                
              </div>
            </div>
          
          </div>
          
        </div>

       
            </div>
       
    </div>
</section>


    </div>
  )
}
