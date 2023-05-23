import './App.css';
import EmptyOrderList from './components/EmptyOrderList';
import Login from './components/Login';
import OrderList from './components/OrderList';

function App() {
  return (
    <div className="App">
    {/* <Login/> */}
    {/*<EmptyOrderList/>*/}
  <OrderList/>
    </div>
  );
}

export default App;
