import React, { useState } from 'react'
import "./CLogin.css"
import AuthImg from "../../../assets/AuthImg.svg";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const CLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleCLogin = async() => {
        try {
            await axios.post("http://localhost:8080/signin", {
                email: email,
                password: password,
                type: "customer"
            })
            setEmail("");
            setPassword("");
            navigate("/customer/home");

        } catch(e) {
            console.log(e);
        }

    }
  return (
    <div className='cLogin'>
        <div className="cLogin-cont">
            <div className="left">
                <h3>Please enter your CONSUMER account details</h3>

                <div>
                    <label htmlFor="">Email</label> <br />
                    <input type="text" name="" id="" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label htmlFor="" >Passowrd</label> <br />
                    <input type="text" name="" id="" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <span>Forgot password?</span>
                <button onClick={handleCLogin}>Login In</button>  
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