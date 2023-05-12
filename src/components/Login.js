import React from 'react'
import './Login.css'

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
            <div className='boxes'>
                <div></div>
                <div></div>
                <div></div>
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
                  // {...register("password", {
                  //   required: "Password do not match",
                  //   minLength: {
                  //     minLength: {
                  //       value: 8,
                  //       message: "Password must be at least 8 characters long",
                  //     },
                  //     maxLength: {
                  //       value: 20,
                  //       message: "Password must be at most 20 characters long",
                  //     },
                  //   },
                  //   validate: (value) => {
                  //     return (
                  //       value === watch("password") || "Password do not match"
                  //     );
                  //   },
                  // })}
                />
                </div>
                
                {/* {errors.password && (
                  <span className="errorMsg">{errors.password.message}</span>
                )} */}

                <div><input type={"submit"} value="LOGIN" className="btn" /></div>
                {/* <input type={"submit"} value="LOGIN" className="button1" /> */}
              </form>
        </div>
    </div>
  )
}

export default Login