// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Services.css'
import Card from './Card'
import ImageOne from '../assets/Developer.jpg'

const Services = () => {
    // const obj = {img:ImageOne, info:"ABC", Price:69}
  return (
    <>
    <h1 className='Heading'>Our Services</h1>
    <div className="row">
        <div className="col-lg-3">
            <Card/>
        </div>
        <div className="col-lg-3">
            <Card/>
        </div>
        <div className="col-lg-3">
            <Card/>
        </div>
        <div className="col-lg-3">
            <Card/>
        </div>
        
        
    </div>
    </>
  )
}

export default Services