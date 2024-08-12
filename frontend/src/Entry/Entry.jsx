import React from "react";
import "./Entry.css";
import { useNavigate } from "react-router-dom";
const Entry = () => {
  const navigate = useNavigate();

  const handleBtn = (nav) => {
    if(nav == 0) {
      navigate("/customer/login")
      console.log("service Seeker");
    } else {
      navigate("/provider/login")
      console.log("Service Provider");
    }

  }

  return (
    <div className="entry">
      
      <div className="entry-cont">
      <h1 className="title">Zfoe</h1>
        <div>
          <h2>Serice Seeker</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />Quia aliquam nisi veniam velit temporibus praesentium repellendus consequuntur facilis omnis voluptatum.</p>
            <button onClick={() => handleBtn(0)}>Service Seeker</button>
        </div>
        <hr />
        <div>
        <h2>Serice Provider</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />Quia aliquam nisi veniam velit temporibus praesentium repellendus consequuntur facilis omnis voluptatum.</p>
            <button onClick={() => handleBtn(1)}>Service Provider</button>
        </div>
        
      </div>
    </div>
  );
};

export default Entry;
