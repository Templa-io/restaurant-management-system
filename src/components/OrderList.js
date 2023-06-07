import React from 'react'
import './OrderList.css'

import LeftComponent from './LeftComponent'
import ComponentRight from '../components/subComponents/ComponentRight'
import { orderData } from './data/OrderData'
import image1 from '../assets/Rectangle 121.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'


const OrderList = () => {
  return (
    <div className='Hero'>
    
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
   <ComponentRight/>
   <div className='container12'>
   <div className='Active-orders overflow-y-scroll scrollbar-hide scroll-smooth'>
   {orderData && orderData.map(n =>(
    <motion.div 
    whileHover={{scale : 1.1}}
    key={n.id} className='details'>
    
    <img src={n.imageSrc} alt="image1"/>
    <div className='span-details'>
    <div className='menu-details'>
     <div>{n.name}</div>
    <div>{n.price}</div>
    <div>{n.number}</div>

    </div>
  
   <div>{n.description}</div>
   </div>
       <div className='section-btn'>
    <Link>
    <div className='confirm-btn'>Confirm</div>
    </Link>
   <Link>
     <div className='decline-btn'>Decline</div>
   </Link>
   </div>
 
    </motion.div>
   ))}
   
   </div>

  
   </div>

    </div>
    

    </div>

  )
}

export default OrderList