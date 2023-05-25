import React from 'react'
import './EmptyMenu.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import CreateComponent from './subComponents/CreateComponent'
import { Controller } from 'react-hook-form'


const EmptyMenu = () => {
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

export default EmptyMenu