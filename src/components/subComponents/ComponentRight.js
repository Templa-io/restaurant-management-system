import React, { useState } from 'react'
import './ComponentRight.css'
import image7 from '../../assets/Image (2).png'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app} from "../../firebase.config"
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { useNavigate } from 'react-router-dom';

const ComponentRight = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false)
  const navigate = useNavigate()

  const login = async () =>  {
    if(!user){
    const {user : {refreshToken, providerData} } = await signInWithPopup(firebaseAuth, provider);

  

    dispatch({
      type:actionType.SET_USER,
      user: providerData[0],

    })
    localStorage.setItem('user', JSON.stringify(providerData[0]))
  }else{
    setIsMenu(!isMenu)
  }
};  
const logout = () => {
      setIsMenu(false)
      localStorage.clear();
      navigate('/')

      dispatch({
        type: actionType.SET_USER,
        user: null,
      })
    }

  return (
    <div className='hero-right'>
    <div className='admin'>
    <div><span>My orders.</span></div>
    <div className='box'>
    <div className='profile'>
        <div>{user ? user.displayName : "Admin"}</div>
<div>{user ? user.email : "admin@gmail.com"}</div>
    </div>
  
    <img src={user ? user.photoURL : image7} alt='userProfile' onClick={login}/>
   

    
    
    </div>
  
</div>
    </div>
  )
}

export default ComponentRight