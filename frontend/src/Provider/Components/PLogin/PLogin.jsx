import React from 'react'
import "./PLogin.css"
import AuthImg from "../../../assets/AuthImg.svg";
import { Link, useNavigate } from 'react-router-dom';
const PLogin = () => {
    const navigate = useNavigate();
  return (
    <div className='plogin'>
        <div className="plogin-cont">
            <div className="left">
                <h3>Please enter your SERVICE PROVIDER account details</h3>

                <div>
                    <label htmlFor="">Email</label> <br />
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Passowrd</label> <br />
                    <input type="text" name="" id="" />
                </div>
                <span>Forgot password?</span>
                <button>Login In</button>  
                <p>Don't have an account? <Link to="/provider/signup">click here</Link></p> 
            </div>

            <div className="right">
                <img src={AuthImg} alt="auth-svg" />
            </div>
        </div>
    </div>
  )
}

export default PLogin