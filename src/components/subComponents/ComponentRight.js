import React from 'react'
import './ComponentRight.css'
import image7 from '../../assets/Image (2).png'


const ComponentRight = () => {
  return (
    <div className='hero-right'>
    <div className='admin'>
    <div><span>My orders.</span></div>
    <div className='box'>
    <div className='profile'>
        <div>admin</div>
<div>admin@gmail.com</div>
    </div>
     <img src={image7} alt=''/>
   </div>
</div>
    </div>
  )
}

export default ComponentRight