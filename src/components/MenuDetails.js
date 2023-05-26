import React from 'react'
import './MenuDetails.css'
import CreateComponent from './subComponents/CreateComponent'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'

const MenuDetails = () => {
  return (
    <div className='Hero'>
    
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    <div className='active-orders'>
    <div>No menu displayed</div>
    <div>All active menus will appear here</div>
    <div></div>
    <div></div>
    </div>
    <CreateComponent/>
 
    </div>
    </div>
    
    </div>
  )
}

export default MenuDetails