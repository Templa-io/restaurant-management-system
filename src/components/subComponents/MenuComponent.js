import React from 'react'
import './MenuComponent.css'
import image1 from '../../assets/Image (2).png'

const MenuComponent = () => {
  return (
    <div className='hero-right'>
    <div className='my-menu'>
    <div><span>My Menu.</span></div>
    <div className='profile'>
        <div>admin</div>
<div>admin@gmail.com</div>
    </div>
     <img src={image1} alt=''/>
   
</div>
    </div>
  )
}

export default MenuComponent