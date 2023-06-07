import React from 'react'
import './CustomerList.css'
import LeftComponent from './LeftComponent'
import MenuComponent from './subComponents/MenuComponent'
import { custData } from './data/CustomerData'
import { Link } from 'react-router-dom'
import CustomerComponents from './subComponents/CustomerComponents'

const CustomerList = () => {
  return (
    <div className='Hero'>
    <div className='Hero-left'>
     <LeftComponent/>
    </div>
    <div className='Hero-right'>
    <CustomerComponents/>
    <div className='container'>
    <div className='Active-orders'>
    {custData && custData.map(n =>(
<div className='email-order'>
  <div>
  <div className='ppic'></div>
  <div className='names'>
  <div>{n.name}</div>
  <div>{n.email}</div>
  
  </div>
  </div>
  <div>
  <div className='ppic'></div>
  <div className='names'>
  <div>{n.name}</div>
  <div>{n.email}</div>
  </div>
  </div>
  <div>
  <div className='ppic'></div>
  <div className='names'>
  <div>{n.name}</div>
  <div>{n.email}</div>
  </div>
  </div>

  </div>
    ))}
  
    </div>

    </div>
    </div>
    
    </div>
  )
}

export default CustomerList