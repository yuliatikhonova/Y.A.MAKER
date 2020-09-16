import React from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";
import "./style.css";

function Itempage({ match }) {
    return (
        <div>
            <div className="icon-area">
                <Link to="/cart"> <img src="/images/bag-icon.png" alt="shopping bag" className="icon" /></Link>
            </div>
            <Link to="/cart"><button type="button" class="btn btn-dark btn-lg btn-block mobile-cart-button">CART</button></Link>
            <Item itemId={match.params.id} />
        </div>
    );
}

export default Itempage;
