import React from 'react'
import './CustomerComponets.css'
import image7 from '../../assets/Image (2).png'
import Login from '../Login'



const CustomerComponents = ({ user}) => {

 

  return (
    <div className='hero-right'>
    <div className='my-menu'> 
    <div><span>My Customers.</span></div>
    <div className='box'>
    <div className='profile'>
    <div>{user ? user.displayName : "Admin"}</div>
    <div>{user ? user.email : "admin@gmail.com"}</div>
        </div>
      
        <img src={user ? user.photoURL : image7} alt='userProfile' onClick={Login}/>
  
      
   </div>
</div>
</div>
  )
}

export default CustomerComponents