import React from 'react'
import './EmptyOrderList.css'
import image1 from '../assets/shape2.png'
import image2 from '../assets/shape.png'
import image3 from '../assets/shape1.png'
import image4 from '../assets/Ellipse 67.png'
import image5 from '../assets/Ellipse 68.png'
import image6 from '../assets/Ellipse 69.png'
import image7 from '../assets/Image (2).png'
import { Link } from 'react-router-dom'
import LeftComponent from './LeftComponent'


const EmptyOrderList = () => {
  return (
    <div className='Hero'>
    <div className='Hero-left'>
    <LeftComponent/></div>
       <div className='Hero-right'>
        <div className='admin'>
            <div><span>My orders.</span></div>
            <div className='profile'>
                <div>admin</div>
<div>admin@gmail.com</div>
            </div>
             <img src={image7} alt=''/>
           
        </div>
        <div className='container'>
              <div className='active-orders'>
            <div>No Active Orders</div>
            <div>All active oders will appear here</div>
            <img src={image1} alt=''/>
        </div>
        <div className='order-details'>
            <div>Order Details</div>
            <div>order details will display here</div>
            <img src={image1} alt=''/>
        </div>
        </div>
      
       </div>
    </div>
  )
}

export default EmptyOrderList