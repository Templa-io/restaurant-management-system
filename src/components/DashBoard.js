import React from 'react'
import './DashBoard.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import { menuData } from './data/MenuData'
import CreateComponent from './subComponents/CreateComponent'
import image1 from '../assets/Rectangle 121.png'

const DashBoard = () => {
  return (
    <div className='Hero'>
    <div className='Hero-left'>
     <LeftComponent/>
     </div>
  
    
   
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    <div className='Active-orders'>
    
    <div className='Dish-section2'>
    <img src={image1} alt=''/>
    <div className='Span-section1'>
    <div>Octopus with citrus salad & herbs</div>
    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
    <div>USD 30.00</div> 
    <div className='Dish-btn'>
    <div>Edit</div>
    <div>Delete</div>
    </div>
    </div>
    
    </div>
    
    </div>
    <CreateComponent/>
 
    </div>
    </div>
    
    </div>
  )
}

export default DashBoard