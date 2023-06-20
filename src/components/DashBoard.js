import React from 'react'
import './DashBoard.css'
import image1 from '../assets/Rectangle 121.png'
import { Link, useNavigate } from 'react-router-dom'

const DashBoard = (props) => {


  return (
  
    <div className='Dish-section2'>
    <img src={image1} alt=''/>
    <div className='Span-section1'>
    <div>{props.name}</div>
    <div>{props.description}</div>
    <div>USD 30.00</div> 
    <div className='Dish-btn'>
    <Link to = "/emptyMenu" >
    <div className='edit-btn'>Edit</div>
    </Link>
    <Link to = "/menuList">
    <div className='delete-btn'>Delete</div>
    </Link>
    
    </div>
    </div>
    
    </div>

  
 
  
  )
}

export default DashBoard