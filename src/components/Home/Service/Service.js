import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Service.css'

function Service({service}) {
    const {name, img, description, price, id} = service;
    const navigate = useNavigate()
    const navigateDetail = id =>{
      navigate(`/services/${id}`)
    }
  return (
    <div className='service'>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <h2>Price ${price}</h2>
        <button onClick={()=>navigateDetail(id)} className="btn btn-primary">Book</button>
      </div>
    </div>
  )
}

export default Service