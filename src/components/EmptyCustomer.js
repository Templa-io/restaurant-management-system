import React from 'react'
import './EmptyCustomer.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import CreateComponent from './subComponents/CreateComponent'
import image4 from '../assets/shape3.png'
import image3 from '../assets/shape4.png'

const EmptyCustomer = () => {
  return (
    <div className='Hero'>
    
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    <div className='active-orders'>
    <div>No Customers displayed</div>
    <div>All active customers will appear here</div>
    <img src={image4} alt=''/>
    </div>
    <div className='order-details'>
    <div>No Customers displayed</div>
    <div>All active customers will appear here</div>
    <img src={image3} alt=''/>
</div>
    </div>
    </div>
    
    </div>
  )
}

export default EmptyCustomer