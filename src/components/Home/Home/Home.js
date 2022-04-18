import React from 'react'
import Banner from '../Carousel/Banner'
import ContactUs from '../ContactUs/ContactUs'
import Services from '../Services/Services'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services />
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home