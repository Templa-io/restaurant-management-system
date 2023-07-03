import React from 'react'

const Pages = () => {
    const {menuData} = props
    const [selectedItem, setSelectedItem] = useState(null);
    const [showDashBoard, setShowDashBoard] = useState(false);
    
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

const handleChange = (index) => {
  setSelectedItem(menuData[index]);
  setShowDashBoard(true);
};

return (
  <div>
 <div className= "Active-orders">
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
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  </div>
);
}

export default Pages