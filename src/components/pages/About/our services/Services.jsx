import React from 'react'
import Banner from '../our agency/banner/Banner'
import Card from '../our agency/card/Card'
import ThreeCard from '../../Home/three cards/ThreeCard'
import IconBox from '../../Home/iconBox/IconBox' 
import Testimonial from '../../Home/testimonial/Testimonial'
import CaseStudies from '../../Home/case studies/CaseStudies'
import Strategy from './strategy/Strategy'

export default function services() {
  return (
    <div className='main-service'>
        <Banner />
        <Card/>
        <ThreeCard
          firstImage="image/icon-data-analytic-accept.png"
          firstHeading="SOCIAL MEDIA MARKETING"
          firstDesc="Customers are interacting with brands through social media. SMM can bring remarkable success to your business."
          secondImage="image/icon-target-calculator-calcucations.png"
          secondHeading="SEO OPTIMIZATION"
          secondDesc="Search Engine Optimization is fundamental. Our SEO strategies can grant you a high-ranking placement in search results."
          thirdImage="image/icon-chart-analytic-graph.png"
          thirdHeading="ADVANCED ANALYTICS"
          thirdDesc="Our services cover all aspects of web analytics, from initial setup to advanced tracking solutions and custom features."
        />
        <ThreeCard
          firstImage="image/icon-data-analytic-accept.png"
          firstHeading="EMAIL MARKETING"
          firstDesc="Our custom Email Marketing services can help you save time and money."
          secondImage="image/icon-target-calculator-calcucations.png"
          secondHeading="PAY PER CLICK"
          secondDesc="Pay-Per-Click marketing is easy and cost-effective. We know everything about PPC!"
          thirdImage="image/icon-chart-analytic-graph.png"
          thirdHeading="CONTENT STRATEGY"
          thirdDesc="Engage with your audience through great, original content."
        />
     <IconBox />
     <Testimonial/>
     <Strategy />
     <CaseStudies />

    </div>
  )
}
