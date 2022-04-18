import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function ServiceDetail() {
    const {serviceID} = useParams()
    const navigate = useNavigate()
    const checkouthandler = () =>{
        navigate('/checkout')
    }
  return (
    <div>
        <h2 className='text-primary'>Checkout item {serviceID}</h2>
        <button onClick={checkouthandler} className="btn btn-primary">Ckeckout</button>
    </div>
  )
}

export default ServiceDetail