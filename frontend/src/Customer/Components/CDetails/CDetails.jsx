import React from "react";
import "./CDetails.css";
const CDetails = () => {
  const districts = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivagangai",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  return (
    <div className="cdetails">
      <div className="cdetails-cont">
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" placeholder="Type your name ..."/>
        </div>
        <div>
          <label htmlFor="">Address:</label>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <label htmlFor="">District:</label>
          <select name="" id="">
            {districts.map((el, index) => {
                return (
                    <option key={index} value={el}>{el}</option>
                )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="">Proof:</label>
          <input type="file" />
        </div>
        <div>
          <label htmlFor="">Phone number:</label>
          <input type="text" placeholder="Don't need to add +91"/>
        </div>
        <div>
          <label htmlFor="">Age:</label>
          <input type="number" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default CDetails;
