import React from 'react'
import './CustomerComponets.css'
import image1 from '../../assets/Image (2).png'

const CustomerComponents = () => {
  return (
    <div className='hero-right'>
    <div className='my-menu'>
    <div><span>Customer Order.</span></div>
    <div className='box'>
    <div className='profile'>
        <div>admin</div>
<div>admin@gmail.com</div>
    </div>
     <img src={image1} alt=''/>
   </div>
</div>
</div>
  )
}

export default CustomerComponents