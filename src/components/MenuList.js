import React from 'react'
import LeftComponent from './LeftComponent'
import './MenuList.css'
import MenuComponent from './subComponents/MenuComponent'
import CreateComponent from './subComponents/CreateComponent'
import image1 from '../assets/Rectangle 121.png'
import { menuData } from './data/MenuData'

const MenuList = ({ data }) => {
  console.log(data)
  return (
   
    <div className='Hero'>
    <div className='Hero-left'>
     <LeftComponent/>
     </div>
  
    
   
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    <div className='Active-orders'>
    {menuData && 
      menuData.map((item) =>(

            <div>
      <div key={item.id} className='Dish-section'>
    <img src={image1} alt=''/>
    <div className='Span-section'>
    <div>{item.title}</div>
    <div>{item.description}</div>
    <div>{item.price}</div> 
    
    </div>
    </div>
      <div className='Dish-section1'>
      <img src={image1} alt=''/>
      <div className='Span-section'>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.price}</div> 
    
    </div>
    </div>
    </div> 
    ))}

  
    </div>
    <CreateComponent/>
 
    </div>
    </div>
    
    </div>
   
  )
}

export default MenuList