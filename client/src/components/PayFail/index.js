import React from "react";
import "./style.css";

function PayFail() {
  return (
    <div className= "payment">
      <img className= "exclamation" src="/images/exclamation.svg" alt= "exclamation"/>
      <h2>
        Transaction Failed
      </h2>

    </div>
  );
}

export default PayFail;