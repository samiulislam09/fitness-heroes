import React from 'react'
import image from '../../image/myimage.jpg'
import './About.css'

function About() {
  return (
    <div className='about-container'>
      <h1 className='my-3'>About Me</h1>
      <div className='about-details text-center'>
        <div>
          <p className='w-75'>Hello guys my name is Samiul Islam Shawon. I am a frontend react js developer. I worked in HTML Css bootstrap tailwind javascript react and python. I want to be a Mern stact developer. My goal is to own a software company.</p>
        </div>
        <img src={image}></img>
      </div>
    </div>
  )
}

export default About