import React, { useEffect, useState } from 'react'
import './CustomerList.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import { custData } from './data/CustomerData'
import { Link } from 'react-router-dom'
import CustomerComponents from './subComponents/CustomerComponents'
import {motion} from 'framer-motion'
import ReactPaginate from 'react-paginate'


const CustomerList = () => {
  const [data, setData] = useState([]);

  const [currentItems, setCurrentItems] = useState(null);
  const[pageCount, setPageCount] = useState(0);
  const[itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10

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

  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount (Math.ceil(data.length / itemsPerPage));
    },[itemOffset,itemsPerPage, data])
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
    

  return (
    <div className='Hero'>
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
    <CustomerComponents/>
    <div className='container'>
    <div className='Active-orders overflow-y-auto scrollbar-hide'>
    <div className='flex flex-wrap h-full'>
    {Array.isArray(currentItems) && currentItems.map(user =>(
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

   
    
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
    containerClassName="pagination"
    pageLinkClassName="page-num"
    previousClassName="page-num"
    nextLinkClassName="page-num"
    activeClassName="Acyive"
  />
  
    </div>

    </div>
    </div>
    
    </div>
  )
}

export default CustomerList