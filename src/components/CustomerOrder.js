import React from 'react'
import './CustomerOrder.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import {menuData} from './data/MenuData'
import image1 from '../assets/Rectangle 121.png'

const CustomerOrder = () => {
  return (
    <div className='Hero'>
    <div className='Hero-left'>
     <LeftComponent/>
     </div>
  
    
   
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    <div className='Active-orders1'>
    <div className='header'>John Doe Orders.</div>
    {menuData && menuData.map(n =>(

            <div>
      <div className='Dish-section'>
    <img src={image1} alt=''/>
    <div className='Span-section'>
    <div>{n.name}</div>
    <div>{n.description}</div>
    <div>{n.price}</div> 
    
    </div>
    </div>
      <div className='Dish-section1'>
    <img src={image1} alt=''/>
    <div className='Span-section'>
    <div>{n.name}</div>
    <div>{n.description}</div>
    <div>{n.price}</div> 
    
    </div>
    </div>

    <div className='Dish-section1'>
    <img src={image1} alt=''/>
    <div className='Span-section'>
    <div>{n.name}</div>
    <div>{n.description}</div>
    <div>{n.price}</div> 
    
    </div>
    </div>

    
    <div className='Dish-section1'>
    <img src={image1} alt=''/>
    <div className='Span-section'>
    <div>{n.name}</div>
    <div>{n.description}</div>
    <div>{n.price}</div> 
    
    </div>
    </div>
    </div> 
    ))}

  
    </div>
   
 
    </div>
    </div>
    
    </div>
  )
}

export default CustomerOrder