import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Footer from "../Footer";

function Navbar() {
    return (
        
        <nav className="nav-area" >
            <Link to = "/">
                <img alt="logo for HandCrafted Heirloom LLC " src="./images/logo-black.svg" className="nav-logo mt-4"/>
            </Link>
                <ul className="nav flex-column mt-5 ">
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
                <Footer />
        </nav>

      
    );
}

export default Navbar;