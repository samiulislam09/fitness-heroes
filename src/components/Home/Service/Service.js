import React from 'react'
import './Service.css'

function Service({service}) {
    const {name, img, description, price} = service;
  return (
    <div className='service'>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Service