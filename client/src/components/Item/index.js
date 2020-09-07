import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Item(props) {
    return (
        <div className="item-deets">
        <div className="icon-area">
        <Link to= "/cart"> <img src="/images/bag-icon.png" alt="shopping bag" className="icon" /></Link>
        </div>
        {/* <div className="row"> */}
            {/* <div className="col-lg-2">

            </div> */}

            <div className="d-flex product-area">

                <div className="col-5 product">
                    <img src="./images/table.jpg" alt="table" />
                </div>
                <div className=" col-5 discription">
                    <div className="d-flex">
                        <div className="col-3 d-flex title-cost">
                            <h1 className="item-deets">Table</h1>
                        </div>
                        <div className="col-2 d-flex">
                            <h1 className="d-flex item-deets" >250.00</h1>
                        </div>
                    </div>
                    <p className="product-description item-deets">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis,
                    eos est nisi nostrum excepturi, atque doloremque ullam sapiente asperiores neque. Modi odit ipsam
                    aliquam, voluptatibus saepe ullam quisquam possimus!</p>
                    <div className="button-spot mt-5"
                        onChange={props.handleFormSubmit}
                        value={props.add}
                        name="add to cart"
                        id="add"
                        >
                      <button onClick={props.handleFormSubmit} className="btn cart-button item-deets">ADD TO CART</button>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </div>
    );
}

export default Item;