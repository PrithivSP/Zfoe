import React, { useState } from "react";
import "./CSignUp.css";
import AuthImg from "../../../assets/AuthImg.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const CSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();

  const handleCSignup = async () => {
    if (
      password !== cpassword ||
      email === "" ||
      password === "" ||
      cpassword === ""
    ) {
      setEmail("");
      setPassword("");
      setCPassword("");
      toast.error("Invalid credentials");
    } else {
      try {
        await axios.post("http://localhost:8080/signup", {
            email: email,
            password: password,
            type: "customer"
        })
        setEmail("");
        setPassword("");
        setCPassword("");
        toast.success("Signup successful!");
        navigate("/customer/login");
      } catch (e) {
        if (e.response && e.response.status === 400) {
            toast.error("Invalid input or user already exists");
          } else {
            console.log(e);
            toast.error("Server error, please try again later");
          }
          console.log(e);
      }
    }
  };
  return (
    <div className="csignup">
      <div className="csignup-cont">
        <div className="left">
          <h3>Please enter your CONSUMER account details</h3>
          <div>
            <label htmlFor="">Email</label> <br />
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="">Passowrd</label> <br />
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <label htmlFor="">Conofirm Passowrd</label> <br />
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setCPassword(e.target.value)}
              value={cpassword}
            />
          </div>
          <button onClick={handleCSignup}>Sign Up</button>
          <p>
            Have an account?{" "}
            <Link
              to="/customer/login"
            >
              click here
            </Link>
          </p>
        </div>

        <div className="right">
          <img src={AuthImg} alt="auth-svg" />
        </div>
      </div>
    </div>
  );
};

export default CSignUp;
