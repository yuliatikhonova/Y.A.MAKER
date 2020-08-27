import React from "react";
// import { Link } from "react-router-dom";
import Gallery from "../Gallery/gallery";
// import database info 

function Galleryimgs() {
    return (
        <div>
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