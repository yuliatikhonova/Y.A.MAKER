import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
    return (
        <main className="main-img col">
        <div className="hero-text">
            <h1 className="bespoke">BESPOKE</h1>
            <h2 className="hand-crafted">Hand Crafted</h2>
            <h1 className="goods">GOODS</h1>
            <h4 className="by">By</h4>
            <img src="./images/Logo-white.svg" alt="logo for HandCrafted Heirloom LLC" className="logo-white"/>
        </div>
    </main>


    );
}

export default Home;