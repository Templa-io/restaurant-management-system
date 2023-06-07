import React from 'react'
import LeftComponent from './LeftComponent'
import NiceModal from '@ebay/nice-modal-react'
import './MenuList.css'
import MenuComponent from './subComponents/MenuComponent'
import CreateComponent from './subComponents/CreateComponent'
import image1 from '../assets/Rectangle 121.png'
import { menuData } from './data/MenuData'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
 
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

    <NiceModal.Provider>
    </NiceModal.Provider>
    <div className='Active-orders overflow-y-scroll scrollbar-hide scroll-sm '>
    {menuData && 
      menuData.map((item) =>(

            <div>
            <Link to='/dashboard'>
            <motion.div
            whileTap={{scale: 0.75}}
             key={item.id} 
             className='Dish-section'>
    <motion.img 
    whileHover={{scale: 1.2}}
    src={image1} alt=''/>
    <div className='Span-section'>
    <div>{item.title}</div>
    <div>{item.description}</div>
    <div>{item.price}</div> 
    
    </div>
    </motion.div>
            </Link>
      
<Link to='/dashboard'>
<motion.div 
whileTap={{scale: 0.75}}
className='Dish-section1'>
      <motion.img 
      whileHover={{scale: 1.2}}
      src={image1} alt=''/>
      <div className='Span-section'>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.price}</div> 
    
    </div>
    </motion.div>
</Link>
      
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