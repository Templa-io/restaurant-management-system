import './App.css';
import EmptyOrderList from './components/EmptyOrderList';
import Login from './components/Login';
import OrderList from './components/OrderList';
import EmptyMenu from './components/EmptyMenu';
import MenuList from './components/MenuList';
import DashBoard from './components/DashBoard';
import EmptyCustomer from './components/EmptyCustomer';
import CustomerList from './components/CustomerList';
import CustomerOrder from './components/CustomerOrder';
import { Route, Routes } from 'react-router-dom';
import MenuDetails from './components/MenuDetails';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/fireBAseFunctions';
import { actionType } from './context/reducer';
import { useEffect } from 'react';

function App() {
const [{foodItems}, dispatch] = useStateValue();

const fetchData = async () => {
  await getAllFoodItems().then((data) =>{
    dispatch({
      type : actionType.SET_FOOD_ITEMS,
      foodItems : data
    });
  });
};

useEffect(() => {
  fetchData ();
}, []);


  return (
    <div className="App">
<Routes>
<Route path='/' element={<Login/>}/>
<Route path="home" element={<EmptyOrderList/>}/>
<Route path="orderList" element={<OrderList/>}/>
<Route path="emptyMenu" element={<EmptyMenu/>}/>
<Route path="menuList" element={<MenuList/>}/>
<Route path="dashboard" element={<DashBoard/>}/>
<Route path="menuDetails" element={<MenuDetails/>}/>
<Route path="emptyCustomer" element={<EmptyCustomer/>}/>
<Route path="customerList" element={<CustomerList/>}/>
<Route path="customerOrder" element={<CustomerOrder/>}/>
</Routes>
    </div>
  );
}

export default App;
