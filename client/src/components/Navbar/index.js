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

        </nav>
    );
}

export default Navbar;