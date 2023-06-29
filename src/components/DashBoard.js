import React, { useState } from 'react';
import './DashBoard.css';
import image1 from '../assets/Rectangle 121.png';
import { Link, useNavigate } from 'react-router-dom';
import Axios  from 'axios';

const DashBoard = (props) => {
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const response = await Axios.delete(`https://restaurant.patadesign.com/api/v1/menu/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        // Handle the successful deletion
        console.log('Menu deleted successfully');
        const updatedMenuData = props.menuData.filter((menu) => menu.id !== id);
        setMenuData(updatedMenuData);
      } else {
        // Handle the error response
        setError('Error deleting menu');
        // Handle the error response
        console.log('Error deleting menu:', response.statusText);
      }
    } catch (error) {
       // Handle the network or parsing error
       setError('Error deleting menu');
      // Handle the network or parsing error
      console.log('Error deleting menu:', error);
    }
  };
  
  return (
    <div className='Dish-section2'>
      <img src={props.imageUrl} alt='' />
      <div className='Span-section1'>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>${props.price}</div>
        <div className='Dish-btn'>
          <Link to='/emptyMenu'>
            <div className='edit-btn'>Edit</div>
          </Link>
          <div className='delete-btn cursor-pointer' onClick= {() => handleDelete(props.id)}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
