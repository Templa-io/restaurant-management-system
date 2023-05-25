import React from 'react'
import LeftComponent from './LeftComponent'
import './MenuList.css'
import MenuComponent from './subComponents/MenuComponent'
import CreateComponent from './subComponents/CreateComponent'

const MenuList = () => {
  return (
   
    <div className='Hero'>
    
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    <div className='active-orders'>
   
    </div>
    <CreateComponent/>
 
    </div>
    </div>
    
    </div>
   
  )
}

export default MenuList