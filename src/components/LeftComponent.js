import { useState } from 'react'
import image1 from '../assets/shape2.png'
import image2 from '../assets/shape.png'
import image3 from '../assets/shape1.png'
import image4 from '../assets/Ellipse 67.png'
import image5 from '../assets/Ellipse 68.png'
import image6 from '../assets/Ellipse 69.png'
import './LeftComponent.css'
import { Link, useNavigate } from 'react-router-dom'



const LeftComponent = ({menuData, error}) => {
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState(true);
    

    


    const handleLogout = () => {
       navigate('/')
      };
      
      const handleMenuButtonClick = () => {

        
        if (error && error.includes('Authentication failed')) {
     
          navigate('/emptyMenu');
        }else if (menuData && menuData.length > 0) {
          navigate('/menuList');
           window.location.reload(true); // Refresh the page
        } else {
          navigate('/emptyMenu');
        }
        setActiveButton('menus');
      };

      const handleCustomersButtonClick = () => {
        navigate('/customerList');
        window.location.reload(true); // Refresh the page
        setActiveButton('customers');
      };
      const handleOrdersButtonClick = () => {
        navigate('/orderList');
        window.location.reload(true); // Refresh the page
        setActiveButton('orders');
      };


  return (
  
   <div className='Hero-left'>
        <div>
            <span>Restaurant system</span>
        </div>
        <div className='orders'>
            <div>
                 <img src={image1} alt='' />
                 <Link to = "/orderList">
                 <div
                 onClick={handleOrdersButtonClick}
                 className={` ${
                   activeButton === 'orders' ? 'text-black' : 'text-blue-gray'
                 }`}
               >
                 Orders
               </div>
                 </Link>
            
            <div className='num'>0</div>

            </div>
        <div>
            <img src={image2} alt=''/>
            <Link to = "/menuList">
            <div
              onClick={handleMenuButtonClick}
              className={` ${
                activeButton === 'menus' ? 'text-black' : 'text-blue-gray '
              }`}
            >
              Menus
            </div>
            </Link>
            
        </div>
        <div>
            <img src={image3} alt='' />
            <Link to = "/customerList">
            <div
              onClick={handleCustomersButtonClick}
              className={` ${
                activeButton === 'customers' ? 'text-black' : 'text-blue-gray'
              }`}
            >
              Customers
            </div>
            </Link>
            
        </div>
        <button className='logout' type='button' onClick={handleLogout}>Logout</button>
        </div>   
        <div className='box1'>
        <div className='menu'>
            <div className='img'>
<img src={image4} alt='' />
<img src={image5} alt=''/>
<img src={image6} alt=''/>
            </div>
            <div>
              <div>Organize your menu through the button below </div> 
                
              <Link to="/createmenu">
              <div className='menu-button'>+Add menu</div>
              </Link>
            </div>
        </div> 
        </div>
       
       </div> 
  
  )
}

export default LeftComponent