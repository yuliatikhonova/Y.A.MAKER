import React from "react";
import "./style.css";
import Paypal from "../Paypal/Paypal";

function PayFail() {
  return (
    <section className="container">
      <div className="row fail-img">
        <div className="mx-auto mt-5">
          <h1 className="payment-sorry">
            We're Sorry
          </h1>
          <div className="transaction">
            <h2 className="payment">
              Transaction Failed</h2>
          </div>
          <div className="payIcon">
            <img className="exclamation" src="/images/exclamation.svg" alt="exclamation" />
          </div>
          <div className="transaction retry">
            <h2 className="payment">
              Please try again
          </h2>
          </div>
          <div className="paypal-retry">
            <Paypal />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PayFail;