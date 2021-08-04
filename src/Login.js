import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login(){
 return(
     <div className="login">
         <Link>
         <img className="login_logo" src="/images/user.png"/>
         </Link>
         <div className="login_container">
             <h1>Sign In</h1>
             <form id="signinform">
                 <h5>E-mail</h5>
                 <input type="email"  />
                 <h5>Password</h5>
                 <input type="password"/>
             </form>
              <button  type="submit" className="login_button">Sign In</button>
             <button className="login_button">Create Account</button>

         </div>
      </div>
 )
}
export default Login;