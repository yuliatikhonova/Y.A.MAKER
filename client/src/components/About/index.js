import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function About() {
    return (
        <section className="container-fluid">
        <div className="row">
            <div className="col mt-5 justify-content-center">
                <img src="/images/about-us.jpg" alt="images of carpenters at work in a wood shop"
                    className="hero-image-about"/>
            </div>
            <div className="col mt-5 about-txt justify-content-center">
                <h1 className="text-about">Since 1986</h1>
                <p className="text-about">
                    Hand Crafted Heirloom continues to pride itself with, on time delivery and exemplary
                    craftsmanship. Please browse through our gallery to see the wide array of ready handmade
                    works available for purchase. Please keep in mind, these unique pieces tend to sell quickly.
                    <br/>
                    Rest assured, if you can’t find what you are looking for, or would like a personalized
                    piece, please see our contact page for further information. Our friendly staff would love to
                    help turn your dreams into a reality.  
                    <br/>
                    We look forward to hearing from you! If you ever find yourself in the area, feel free to
                    stop by our gallery in person. 
                    <br/>
                    <strong>We thank you for your business</strong> 
                </p>
            </div>
        </div>

    </section>
    );
}

export default About;