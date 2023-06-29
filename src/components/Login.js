import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import axios from 'axios';
import swal from "sweetalert";
import { setUserSession } from "../utils/Common";


const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const [error, setError] =useState(null)
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()
  


   useEffect(() => {
    //b Check if the user is already logged in
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {

         // Store the token in localStorage
         localStorage.setItem('token', token);
         console.log('Token:', token);

      // Redirect the user to the home page
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
  
    axios
      .post("https://restaurant.patadesign.com/api/v1/auth/login", {
        email: email,
        password: password
      })
      .then(response => {
        setLoading(false);
        const { token } = response.data; // Extract the token from the response data
        setUserSession(token, response.data.user);
  
        // Store the token in localStorage
        localStorage.setItem('token', token);
        console.log('Token:', token);
  
        // Redirect the user to the desired page (e.g., '/home')
        navigate('/home');
      })
      .catch(error => {
        setLoading(false);
        if (error.response && (error.response.status === 401 || error.response.status === 400)) {
          setError(error.response.data.message);
        } else {
          setError("Email or Password is wrong.");
        }
        console.error('error >>>', error);
      });
  };
  

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
        <div className='Right '>
            
            <span className='text'>Login</span>
            <div className="signin">
              <label htmlFor='email'>Username or Email</label>
                <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="off" // Disable autofill for the username input field
                />
           <label htmlFor="password">Password</label>
           <input
           type="password"
           required
           value={password}
           onChange={e => setPassword(e.target.value)}
           autoComplete="new-password" 
           /> 
           {error && <div className='error'>{error}</div>}
           <input 
           type='button'
           className="btn"
           value={loading ? " Loading..." : "Login"}
           disabled={loading}
           onClick={handleLogin}
           />
        </div>
    </div>
    </div>
  )
}

export default Login