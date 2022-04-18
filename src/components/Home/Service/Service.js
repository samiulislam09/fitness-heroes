import React from 'react'

function Service({service}) {
    const {name, img, description, price} = service;
  return (
    <div className='text-primary'>{name}</div>
  )
}

export default Service