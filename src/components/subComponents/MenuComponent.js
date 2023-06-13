import React from 'react'
import './MenuComponent.css'
import image7 from '../../assets/Image (2).png'
import Login from '../Login'

const MenuComponent = () => {


  const isMenu = true;

  return (
    
    <div className='hero-right'>
    <div className='my-menu'>
    <div><span>My Menu.</span></div>
    <div className='box'>
    <div className='profile'>
    <div>"Admin"</div>
    <div> "admin@gmail.com"</div>
        </div>
      
        <img src={image7} alt='userProfile' onClick={Login}/>
     

   </div>
</div>
    </div>
  )
}

export default MenuComponent