import React from "react";
import "./CMiniCanvas.css";
import { FaArrowDownUpLock } from "react-icons/fa6";
import { FaCableCar } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { TbTransactionRupee } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
const CMiniCanvas = () => {
  return (
    <ul className="cminicanvas">
      <li>
      <FaArrowDownUpLock />
        Best Quality</li>
      <li>
      <FaCableCar />Fast delivery</li>
      <li>
      <CiCreditCard1 />Secure payment</li>
      <li><TbTransactionRupee />Money back</li>
      <li><BiSupport />Support 23/8</li>
    </ul>
  );
};

export default CMiniCanvas;
