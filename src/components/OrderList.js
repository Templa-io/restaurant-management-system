import React from 'react'
import './OrderList.css'

import LeftComponent from './LeftComponent'
import ComponentRight from '../components/subComponents/ComponentRight'
import { orderData } from './data/OrderData'
import image1 from '../assets/Rectangle 121.png'
import { Link } from 'react-router-dom'


const OrderList = () => {
  return (
    <div className='Hero'>
    
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
   <ComponentRight/>
   <div className='container'>
   <div className='Active-orders'>
   {orderData && orderData.map(n =>(
    <div key={n.id} className='details'>
    <img src={n.imageSrc} alt="image1"/>
    <div className='span-details'>
    <div className='menu-details'>
     <div>{n.name}</div>
    <div>{n.price}</div>
    <div>{n.number}</div>
    </div>
  
   <div>{n.description}</div>
   </div>
   
 
    </div>
   ))}
   
   </div>

   <div className='Order-details'>
   <div className='dish-section'>
   <img src={image1} alt=''/>
   <div className='span-section'>
   <div>Octopus with citrus salad & herbs</div>
   <div>Order no.340534</div>
   <div>Sem aliquet sit urna aliquam vitae nisl convallis ac, tristique. Nec lectus eget feugiat ornare. </div>
   <div>Location:Texas</div>
   <div>3 servings</div>
   <div>USD 30.00</div> 
    <div className='section-btn'>
    <Link>
    <div className='confirm-btn'>Confirm Order</div>
    </Link>
   
   <Link>
     <div className='decline-btn'>Decline</div>
   </Link>
 
   </div>
   </div>
   </div>
 
   </div>
   </div>

    </div>
    

    </div>

  )
}

export default OrderList