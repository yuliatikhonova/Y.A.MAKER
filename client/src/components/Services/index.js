import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Services() {
    return (
        <section className="container hero-img-services mt-5">
                <div className="row">
                    <div className="col-8 mt-5 text-area mb-4">
                        <h1>Special Commisions</h1>
                        <p>
                            At HandCrafted Heirloom servicing our customers is our top priority. If you don’t find what
                            your looking for from our selection of ready made goods we do take special commissions.
                            <br/>
                            We specialize in
                        </p>
                        <ul>
                            <li>Furniture</li>
                            <li>Toys</li>
                            <li>Plaques</li>
                            <li>Repairs</li>
                        </ul>
                        <p>
                            Cost and Turn time can vary base on the scope of the project. Hit the contact button below
                            to schedule a consultation.
                            <br/>
                        
                        </p>
                        <h5>We look forward to hearing from you</h5>
                        <button type="submit" className="btn mt-4">Contact Us</button>
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