import React from 'react'
import "./CLogin.css"
import AuthImg from "../../../assets/AuthImg.svg";
import { Link, useNavigate } from 'react-router-dom';
const CLogin = () => {
    const navigate = useNavigate();
  return (
    <div className='cLogin'>
        <div className="cLogin-cont">
            <div className="left">
                <h3>Please enter your CONSUMER account details</h3>

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
                <p>Don't have an account? <Link to="/customer/signup" onClick={() => navigate("/cutomer/login")}>click here</Link></p> 
            </div>

            <div className="right">
                <img src={AuthImg} alt="auth-svg" />
            </div>
        </div>
    </div>
  )
}

export default CLogin