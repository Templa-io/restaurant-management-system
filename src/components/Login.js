import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
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
            
            
        <form className="signin">
            <span className='text'>Login</span>
            <div>
                <label htmlFor='email'>Username or Email</label>
                <input
                  type="text"
                  name="email"
                /> 
            </div>
           <div><label htmlFor='password'>Password</label>
                <input
                  type="password"
                  required
                />
                </div>
                <Link to="/dashboard">
                <div><input type={"submit"} value="LOGIN" className="btn" /></div>
    
                </Link>
                
              </form>
        </div>
    </div>
  )
}

export default Login