import React, { useEffect, useState } from 'react';
import LeftComponent from './LeftComponent';
import './MenuList.css';
import MenuComponent from './subComponents/MenuComponent';
import CreateComponent from './subComponents/CreateComponent';
import { motion } from 'framer-motion';
import DashBoard from './DashBoard';
import axios from 'axios';

const MenuList = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDashBoard, setShowDashBoard] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage

        const response = await axios.get('https://restaurant.patadesign.com/api/v1/menu/menus', {
          headers: {
            'Authorization': `Bearer ${token}` // Pass the token in the headers
          }
        });

        setMenuData(response.data.content);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const handleChange = (index) => {
    setSelectedItem(menuData[index]);
    setShowDashBoard(true);
  };

  return (
    <div className='Hero'>
      <div className='Hero-left'>
        <LeftComponent menuData={menuData} error={error} />
      </div>

      <div className='Hero-right'>
        <MenuComponent />
        <div className='container'>
          {showDashBoard ? (
            <div className='Active-orders overflow-y-auto scrollbar-hide'>
              <DashBoard
              key={selectedItem.id}
                id={selectedItem.id}
                name={selectedItem.name}
                description={selectedItem.description}
                imageUrl={selectedItem.imageUrl}
                price={selectedItem.price}
                menuData={menuData}
              />
            </div>
          ) : (
            <div className='Active-orders overflow-y-auto scrollbar-hide '>
              {Array.isArray(menuData) &&
                menuData.map((menu, index) => (
                  <div key={index}>
                    <div onClick={() => { handleChange(index) }}>
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        key={menu.id}
                        className='Dish-section hover:cursor-pointer'
                      >
                        <motion.img
                          whileHover={{ scale: 1.2 }}
                          src={menu.imageUrl} alt=''
                        />
                        <div className='Span-section'>
                          <div>{menu.name}</div>
                          <div>{menu.description}</div>
                          <div>${menu.price}</div>
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
  );
};

export default MenuList;
