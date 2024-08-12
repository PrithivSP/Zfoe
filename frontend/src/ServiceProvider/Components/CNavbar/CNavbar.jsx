import React, { useState } from 'react'
import "./CNavbar.css"
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
const CNavbar = () => {
    const navigate = useNavigate();
  return (
    <div className='nav'>
        <h1 className='title'>
          <Link to="/">Zfoe</Link>
        </h1>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul> 

        <div className="end">
            <div onClick={() => {
              navigate("/");
            }}>
              <a href="#products">
              <FiSearch />
              </a>
              </div>
            <div className='search' onClick={() => {
              navigate("/cart");
            }}>
              {/* {cart.length>0?<span>{cart.length}</span>:""} */}
            <BsHandbag />
            </div>
        </div>

    </div>
  )
}

export default CNavbar