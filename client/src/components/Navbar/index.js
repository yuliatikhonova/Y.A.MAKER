import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav> 
            {/* input Link as placeholders ok to add more to format and change className */}
            <Link className="navbar-brand" to="/gallery" >
               Gallery
            </Link>
            <Link className="navbar-brand" to="/services" >
                Services
            </Link>
            <Link className="navbar-brand" to="/about" >
                About
            </Link>
            <Link className="navbar-brand" to="/contact" >
                Contact
            </Link>
            <nav class="nav-area">
        <div>
            <img src="./images/logo-black.svg" class="nav-logo mt-4" alt="logo for HandCrafted Heirloom LLC ">
        </div>
        <ul class="nav flex-column mt-5
        ">
            <li class="nav-item">
                <a class="nav-link navLinks mb-5" href="#">GALLERY</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navLinks mb-5" href="#">SERVICES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navLinks mb-5" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link navLinks mb-5" href="#">CONTACT</a>
            </li>
        </ul>



    </nav>
        </nav>
    );
}

export default Navbar;