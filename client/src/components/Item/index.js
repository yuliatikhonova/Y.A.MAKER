import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Item() {
    return (
        <div className="item-deets">
        <div className="icon-area">
            <img src="/images/bag-icon.png" alt="shopping bag" className="icon" />
        </div>
        <div className="row">
            <div className="col-lg-2">

            </div>

            <div className="col-lg-10 d-flex product-area">

                <div className="col-5 product">
                    <img src="./images/table.jpg" alt="table" />
                </div>
                <div className=" col-5 discription">
                    <div className="d-flex">
                        <div className="col-3 d-flex title-cost">
                            <h1>Table</h1>
                        </div>
                        <div className="col-2 d-flex">
                            <h1 className="d-flex">250.00</h1>
                        </div>
                    </div>
                    <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis,
                    eos est nisi nostrum excepturi, atque doloremque ullam sapiente asperiores neque. Modi odit ipsam
                    aliquam, voluptatibus saepe ullam quisquam possimus!</p>
                    <div className="button-spot mt-5">
                        <button type="submit" className="btn cart-button">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Item;