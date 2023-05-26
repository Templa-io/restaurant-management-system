import React from 'react'
import './CustomerList.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import { custData } from './data/CustomerData'
import { Link } from 'react-router-dom'

const CustomerList = () => {
  return (
    <div className='Hero'>
    
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    <div className='Active-orders'>
    {custData && custData.map(n =>(
<div className='email-order'>
  <div>
  <div className='ppic'></div>
  <div className='names'>
  <div>{n.name}</div>
  <div>{n.email}</div>
  </div>
  </div>
  

  <div className='Detail-btn'>{n.button}</div>
  </div>
    ))}
  
    </div>
    <div className='Order-details'>
    <div>Customer Profile</div>
  <div className='customer-profile'> 
  <div></div>
  <div className='profile-details'>
<div>John Doe</div>
  <div>johndoe@gmail.com</div>
  <div>120 Orders</div> 
   <Link to = "/customerOrder">
  <div className='order-btn'> View all orders</div>
  </Link>
  </div>
  </div>
</div>
    </div>
    </div>
    
    </div>
  )
}

export default CustomerList