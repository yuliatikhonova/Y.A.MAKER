import React from "react";
import { Link, ReactDOM } from "react-router-dom";
import "./style.css";
import Paypal from "../Paypal/Paypal";


function Checkout() {
  return (
    <div>
              <div className="cart-body">
            <div className="icon-area">
                <img src="/images/bag-icon.png" alt="shopping bag" className="icon" />
            </div>
            <div className="row">
                
                <div className="col-lg-10 product-area">
                    <div className="col">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ITEM NAME</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">QTY</th>
                                    <th scope="col">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><img src="./images/table.jpg" alt="table" className="cart-item" /></th>

                                    <td className="table-data-checkout">250</td>
                                    <td className="table-data-checkout">1</td>
                                    <td className="table-data-checkout">250</td>
                                </tr>
                                <tr>  </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="cart-button-area">
            <Paypal />
            </div>
        </div>

    </div>
  );
}

export default Checkout;