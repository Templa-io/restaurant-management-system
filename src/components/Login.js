import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import {auth} from "../firebase.config"

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    const auth = getAuth

    // Check if the entered email and password match the default cred
    if (email === 'test@gmail.com' && password === 'testpassword')
    {
      //if true navigate to dashboard
      console.log()
      navigate('home')
    }else{
      //otherwise display error
      console.error("Invalid email or password:");
    }
  }

  return (
    <div className='Login'>
        <div className='Left'>
            
            <div className='Header'>
                <div>Restaurant </div>
                    <div>Management</div>
                    <div> System</div>
            </div>

            <div className='description'>
                <div>This pumpkin cream soup</div>
            <div>will warm up the feintest of hearts</div> 
             </div>
  
        </div><div className='blur hero-blur'></div>
        <div className='Right'>
            
            
        <form onSubmit={Login} className="signin">
            <span className='text'>Login</span>
            <div>
                <label htmlFor='email'>Username or Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
           <div><label htmlFor='password'>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div><input type={"submit"} value="LOGIN" className="btn" /></div>
              </form>
        </div>
    </div>
  )
}

export default Login