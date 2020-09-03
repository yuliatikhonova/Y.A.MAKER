import React from "react";
// import { Link } from "react-router-dom";
import GalleryModal from "../GalleryModal/";
// import database info 

function Galleryimgs() {
    return (
        <div>
            <button type="button" className="gallery-btn btn-dark" data-toggle="modal" data-target="#newPostModal_">
                <FontAwesomeIcon icon="edit" />
            </button>
            <GalleryModal />
            {/* Map through data from database to display on the gallery page */}
            {/* {data.map(gallery =>(
                <Gallery
                id = {gallery.id}
                key = {gallery.key}
                img = {gallery.img}
                />
            ))} */}
        </div>
    );
}

export default Galleryimgs;