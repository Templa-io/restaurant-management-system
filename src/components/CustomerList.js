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
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const response = await fetch('https://restaurant.patadesign.com/api/v1/user/users',{
        headers: {
          'Authorization': `Bearer ${token}` // Pass the token in the headers
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
whileTap={{scale:0.9}}
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