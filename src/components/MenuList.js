import React, { useEffect, useState } from 'react';
import LeftComponent from './LeftComponent';
import './MenuList.css';
import MenuComponent from './subComponents/MenuComponent';
import CreateComponent from './subComponents/CreateComponent';
import { motion } from 'framer-motion';
import DashBoard from './DashBoard';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


const MenuList = (props) => {
  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDashBoard, setShowDashBoard] = useState(false);
  const [error, setError] = useState(null);

  const [currentItems, setCurrentItems] = useState(null);
  const[pageCount, setPageCount] = useState(0);
  const[itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6

  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(menuData.slice(itemOffset, endOffset));
    setPageCount (Math.ceil(menuData.length / itemsPerPage));
    },[itemOffset,itemsPerPage, menuData])
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % menuData.length;
      setItemOffset(newOffset);
    };
    

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

  const handleMenuUpdate = (updatedMenu) => {
    // Find the index of the updated menu in the menuData array
    const updatedIndex = menuData.findIndex((menu) => menu.id === updatedMenu.id);
  
    if (updatedIndex !== -1) {
      // Update the menuData array with the updated menu
      const updatedData = [...menuData];
      updatedData[updatedIndex] = updatedMenu;
      props.setMenuData(updatedData)
  
      // Update the menuData state
      setMenuData(updatedData);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`https://restaurant.patadesign.com/api/v1/menu/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log('Menu deleted successfully');
        props.handleDelete(id); // Call the handleDelete function passed from the parent component
      } else {
        console.log('Error deleting menu:', response.statusText);
      }
    } catch (error) {
      console.log('Error deleting menu:', error);
    }
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
            <div className='Active-orders overflow-y-auto scrollbar-hide '>
              <DashBoard
              key={selectedItem.id}
                id={selectedItem.id}
                name={selectedItem.name}
                description={selectedItem.description}
                imageUrl={selectedItem.imageUrl}
                price={selectedItem.price}
                menuData={menuData}
                onUpdateMenu={handleMenuUpdate} // Pass the callback function as a prop
ZZ
              />
            </div>
          ) : (
            <div className='Active-orders scrollbar-hide '>
            <div className='flex flex-wrap '>
             {Array.isArray(currentItems) && 
                currentItems.map((menu, index) => (
                    <div key={index} onClick={() => handleChange(index)} className='hover:cursor-pointer'>
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
          )}

          {!selectedItem && <CreateComponent />}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
