import React, { useEffect, useState } from 'react'
import LeftComponent from './LeftComponent'
import NiceModal from '@ebay/nice-modal-react'
import './MenuList.css'
import MenuComponent from './subComponents/MenuComponent'
import CreateComponent from './subComponents/CreateComponent'
import image1 from '../assets/Rectangle 121.png'
import { menuData } from './data/MenuData'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import DashBoard from './DashBoard'
 
const MenuList = () => {

  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDashBoard, setShowDashBoard] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await fetch('https://restaurant.patadesign.com/api/v1/menu/menus',{
         headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTY4NzI3NTIxOCwiZXhwIjoxNjg3Mjc3MDE4fQ.sbxYMBhM_sw6jv0sZlas36P7gQiLXH4Sog4Y4P0Rltw'
      }
      });
     const jsonData = await response.json();
     console.log(jsonData)
      setMenuData(jsonData.content);
    }catch(error){
      //Handle error
    }
      
    }
    fetchData();
  }, []);
  console.log(menuData)

  const handleChange = (index) =>{
    
    setSelectedItem(menuData[index]);
    setShowDashBoard(true);
  };
 
  return (
   
    <div className='Hero'>
    <div className='Hero-left'>
     <LeftComponent/>
     </div>
  
    
   
    <div className='Hero-right'>
    <MenuComponent/>
    <div className='container'>
    {showDashBoard ? (
      <div className='Active-orders overflow-y-auto scrollbar-hide'>
      <DashBoard
        name={selectedItem.name}
        description={selectedItem.description}
  
      />
      </div>

    ) : (
       <div className='Active-orders overflow-y-auto scrollbar-hide '>
    {Array.isArray (menuData) && 
      menuData.map((menu,index) =>(

            <div>
            <div 
            onClick={() => {handleChange(index)
            }}
            key={index}>

            <motion.div
            whileTap={{scale: 0.75}}
             key={menu.id} 
             className='Dish-section hover:cursor-pointer'>
    <motion.img 
    whileHover={{scale: 1.2}}
    src={image1} alt=''/>
    <div className='Span-section'>
    <div>{menu.name}</div>
    <div>{menu.description}</div>
    <div>{menu.price}</div> 
    
    </div>
    </motion.div>
            </div>
      
    </div> 
    ))}

  
    </div>
    )}
   
    {!selectedItem && <CreateComponent />}
 
    </div>
    </div>
    
    </div>
   
  )
}

export default MenuList