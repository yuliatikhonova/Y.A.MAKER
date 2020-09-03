import React from "react";
import { Link, ReactDOM } from "react-router-dom";
import "./style.css";
import Paypal from "../Paypal/Paypal";


function Checkout() {
  return (
    // <button role="link">
    //   Checkout
    // </button>
    <Paypal />
  );
}

export default Checkout;