import React from "react";
import "./style.css";

function Home() {
    return (
        <div className="main-img-home">
            <div className="hero-text-home">
                <span className="bespoke">BESPOKE</span>
                <span className="hand-crafted">Hand Crafted</span>
                <span className="goods">GOODS</span>
                <span className="by">By</span>
                <img src="/images/Logo-white.svg" alt="logo for HandCrafted Heirloom LLC" className="logo-white mx-auto" />
            </div>

        </div>
    );
}

export default Home;