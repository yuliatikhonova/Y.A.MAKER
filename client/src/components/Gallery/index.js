import React from "react";
import { Link } from "react-router-dom";
import GalleryModal from "../GalleryModal/";
import "./style.css";

// import database info 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/// has to make an API call (getAll) from items table in db. Then we have to map each item and display the images in the gallery page. Kaelyn has already started the map function in the gallery page. 

function Galleryimgs(props) {
    return (
        <div>
            <button type="button" className="gallery-btn btn-dark" data-toggle="modal" data-target="#newPostModal_">
                <FontAwesomeIcon icon="edit" />
            </button>
            <GalleryModal />
            {/* write card to hold galley images retrieved from database */}

            <section>
            <div className="row mt-5">

                <Link to="/item">
                    <img src={props.imageUpload} alt={props.itemName} className="img-fluid gallery-images col-md-6 col-12" />
                </Link>
            </div>

        </section>

        </div>
    );
}

export default Galleryimgs;