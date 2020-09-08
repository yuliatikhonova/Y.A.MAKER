import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//needs to get the Item that was clicked on by id and then display the info for that item

// add to cart button needs to send a post request to the cart API

function Item(props) {
    return (
        <div className="item-deets">
            <div className="icon-area">
                <Link to="/cart"> <img src="/images/bag-icon.png" alt="shopping bag" className="icon" /></Link>
            </div>

            <div className="d-flex product-area">

                <div className="col-5 product">
                    <img src={props.imageUpload} alt="table" />
                </div>
                <div className=" col-5 discription">
                    <div className="d-flex">
                        <div className="col-3 d-flex title-cost">
                            <h1 className="item-deets">{props.itemName}</h1>
                        </div>
                        <div className="col-2 d-flex">
                            <h1 className="d-flex item-deets" >{props.itemPrice}</h1>
                        </div>
                    </div>
                    <p className="product-description item-deets">{props.itemDescription}</p>
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
        </div>
    );
}

export default Item;