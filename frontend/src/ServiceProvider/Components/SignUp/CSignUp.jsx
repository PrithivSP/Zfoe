import React from 'react'
import "./CSignUp.css"
import AuthImg from "../../../assets/AuthImg.svg";
import { Link, useNavigate } from 'react-router-dom';
const CSignUp = () => {
  const navigate = useNavigate();
  return (
    <div className='csignup'>
        <div className="csignup-cont">
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
                <div>
                    <label htmlFor="">Conofirm Passowrd</label> <br />
                    <input type="text" name="" id="" />
                </div>
                <button>Sign Up</button>   
                <p>Have an account? <Link to="/customer/login" onClick={() => navigate("/cutomer/login")}>click here</Link></p>
            </div>

            <div className="right">
                <img src={AuthImg} alt="auth-svg" />
            </div>
        </div>
    </div>
  )
}

export default CSignUp