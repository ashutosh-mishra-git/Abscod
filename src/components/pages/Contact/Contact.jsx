import React from 'react'
import Header from '../Home/header/Header'
import Location from './location/Location'
import '../../common/utility.css'
import Testimonial from '../Home/testimonial/Testimonial'

export default function Contact() {
    let props =  {
        head:"Get in touch",
        heading:"Start a conversation",
        text:"We build effective strategies to help you reach customers and prospects across the entire web.",
        type:"contact"
    }
  return (
    <div>
     <Header {...props}  />
     <Location />
     <Testimonial/>
    </div>
  )
}
