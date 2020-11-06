import React from 'react';
import loginPNG from '../../../images/login.png'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
   return (
      <div className="container">
         <div className="row mTop">
            <div className="col-md-6 align-items-center">
               <form className=" login align-items-center">
                  <label htmlFor="name">User Name</label>
                  <input className='form-control field' type="text"/>
                  <label htmlFor="name">Password</label>
                  <input className='form-control field' type="text"/>
                  <p className="danger"><b>Forgot Password ?</b></p>
                  <Link to="/doctor/dashboard"><button className='form-control'>Login</button></Link>
               </form>
            </div>
            <div className="col-md-6">
               <img className='img-fluid' src={loginPNG} alt=""/>
            </div>
         </div>
      </div>
   );
};

export default Login;