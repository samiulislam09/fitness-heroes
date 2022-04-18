import React, { useEffect, useState } from 'react'
import Service from '../Service/Service';
import './services.css'

function Services() {
  const [services, setServices] = useState([]);
  useEffect(()=>{
    fetch('services.json')
    .then(res=> res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div>
      <h2 className='text-center mt-3'>Our Services</h2>
      <div id='services' className='services-container'>
      {
        services.map(service => <Service key={service.id} service={service}></Service>)
      }
    </div>
    </div>
  )
}

export default Services