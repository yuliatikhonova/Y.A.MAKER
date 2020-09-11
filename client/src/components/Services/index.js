import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Services() {
    return (
        <section className="hero-img-services mx-auto">
                <div className="row">
                    <div className="col-md-8 col-sm text-area services mt-5 p-5">
                        <h1 className="header-one-style">Special Commisions</h1>
                        <p className="para-style">
                            At HandCrafted Heirloom servicing our customers is our top priority. If you don’t find what
                            your looking for from our selection of ready made goods we do take special commissions.
                            <br/>
                            We specialize in
                        </p>
                        <ul className="servicesPage-list">
                            <li className= "service-list">Furniture</li>
                            <li className= "service-list">Toys</li>
                            <li className= "service-list">Plaques</li>
                            <li className= "service-list">Repairs</li>
                        </ul>
                        <p className="para-style">
                            Cost and Turn time can vary base on the scope of the project. Hit the contact button below
                            to schedule a consultation.
                            <br/>
                        
                        </p>
                        <h5 className="head-five">We look forward to hearing from you</h5>
                        <Link to="/contact">
                            <button type="submit" className="btn services-button mt-4">Contact Us
                            </button>

                        </Link>
                    </div>
                </div>
            </section>
    );
}

export default Services;
// The services page could be for custom work. Maybe show some of the items made and have basic information about pricing rates for custom work.
// the the services could have like 2 or 3 subsections. 1 for whole sale information for the normal items that are sold, 
// 1 for custom fine furniture work 
// and then 1 for exterior work like picnic tables and such.