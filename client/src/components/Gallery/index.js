import React from "react";
import "./style.css";
// import database info 

function Galleryimgs(props) {
    return (
        <div>
            <section>
            <div className="row mt-5">
                    <img src={props.imageUpload} alt={props.itemName} className="img-fluid gallery-images col-md-6 col-12" />
            </div>

        </section>

        </div>
    );
}

export default Galleryimgs;