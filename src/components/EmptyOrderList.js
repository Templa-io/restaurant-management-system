import React from 'react'
import './EmptyOrderList.css'
import image1 from '../assets/shape2.png'
import image2 from '../assets/shape.png'
import image3 from '../assets/shape1.png'
import image4 from '../assets/Ellipse 67.png'
import image5 from '../assets/Ellipse 68.png'
import image6 from '../assets/Ellipse 69.png'
import image7 from '../assets/Image (2).png'

const EmptyOrderList = () => {
  return (
    <div className='Hero'>
       <div className='Hero-left'>
        <div>
            <span>Restaurant system</span>
        </div>
        <div className='orders'>
            <div>
                 <img src={image1} alt='' />
            <div> Orders</div>
            <div className='num'>0</div>

            </div>
        <div>
            <img src={image2} alt=''/>
            <div>Menus</div>
        </div>
        <div>
            <img src={image3} alt='' />
            <div>Customers</div>
        </div>
        </div>
        <div className='menu'>
            <div className='img'>
<img src={image4} alt='' />
<img src={image5} alt=''/>
<img src={image6} alt=''/>
            </div>
            <div>
               Organize your menu through the button below 
                 <div className='menu-button'>+Add menu</div>
            </div>
        </div>
       
       </div> 
       <div className='Hero-right'>
        <div className='admin'>
            <div><span>My orders.</span></div>
            <div className='profile'>
                <div>admin</div>
<div>admin@gmail.com</div>
            </div>
             <img src={image7} alt=''/>
           
        </div>
       </div>
    </div>
  )
}

export default EmptyOrderList