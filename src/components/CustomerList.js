import React, { useEffect, useState } from 'react'
import './CustomerList.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import { custData } from './data/CustomerData'
import { Link } from 'react-router-dom'
import CustomerComponents from './subComponents/CustomerComponents'
import {motion} from 'framer-motion'


const CustomerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await fetch('https://restaurant.patadesign.com/api/v1/user/users',{
         headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTY4NzI1NDI1OSwiZXhwIjoxNjg3MjU2MDU5fQ.eDW8D2wojODK2riaHUCqyX4sXg9GlzYlcr7eBd5m9HM'
      }
      });
     const jsonData = await response.json();
     console.log(jsonData)
      setData(jsonData.content);
    }catch(error){
      //Handle error
    }
      
    }
    fetchData();
  }, []);

  return (
    <div className='Hero'>
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
    <CustomerComponents/>
    <div className='container'>
    <div className='Active-orders overflow-y-auto scrollbar-hide'>
    {Array.isArray(data) && data.map(user =>(
<div className='email-order '>
<motion.div key={user.id} 
className='hover:cursor-pointer hover:bg-gray-100'
whileTap={{scale:0.7}}
>
<div className='ppic'></div>
<div className='names'>
<div>{user.firstName} {user.lastName}</div>
<div>{user.email}</div>

</div>
</motion.div>
  <motion.div key={user.id} 
  className='hover:cursor-pointer hover:bg-gray-100'
  whileTap={{scale:0.7}}
  >
  <div className='ppic' ></div>
  <div className='names'>
  <div>{user.firstName} {user.lastName}</div>
  <div>{user.email}</div>
  
  </div>
  </motion.div>
  <motion.div key={user.id} 
  className='hover:cursor-pointer hover:bg-gray-100'
  whileTap={{scale:0.7}}
  >
  <div className='ppic'></div>
  <div className='names'>
  <div>{user.firstName} {user.lastName}</div>
  <div>{user.email}</div>
  
  </div>
  </motion.div>
 

  </div>
    ))}
  
    </div>

    </div>
    </div>
    
    </div>
  )
}

export default CustomerList