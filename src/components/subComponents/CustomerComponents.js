import React from 'react'
import './CustomerComponets.css'
import image7 from '../../assets/Image (2).png'
import Login from '../Login'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../context/StateProvider'
import { app } from '../../firebase.config'
import { actionType } from '../../context/reducer'

const CustomerComponents = ({ user}) => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user: authUser }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const isMenu = true;

  const login = async () => {
    if (!authUser) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      // Handle menu toggle logic if needed
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate('login');
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <div className='hero-right'>
    <div className='my-menu'> 
    <div><span>My Customers.</span></div>
    <div className='box'>
    <div className='profile'>
    <div>{user ? user.displayName : "Admin"}</div>
    <div>{user ? user.email : "admin@gmail.com"}</div>
        </div>
      
        <img src={user ? user.photoURL : image7} alt='userProfile' onClick={Login}/>
        {
          isMenu && (
            <div className='popup'>
        
         <div onClick={logout}>Logout</div>
        
          </div>
          )
         }
      
   </div>
</div>
</div>
  )
}

export default CustomerComponents