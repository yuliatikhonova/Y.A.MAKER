import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function MobileNav() {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <img alt="logo for HandCrafted Heirloom LLC " src="./images/logo-black.svg" className="nav-logo mt-4" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mobile-nav">
            <ul className="nav flex-column mt-5 " >
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/gallery">GALLERY</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/services">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navLinks mb-5" to="/contact">CONTACT</Link>
                    </li>
                </ul>
                </div>

        </nav>
    );
}

export default MobileNav;