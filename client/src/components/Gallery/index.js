import React from "react";
import { Link } from "react-router-dom";
import GalleryModal from "../GalleryModal/";
import "./style.css";

// import database info 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Galleryimgs(props) {
    return (
        <div>
            <button type="button" className="gallery-btn btn-dark" data-toggle="modal" data-target="#newPostModal_">
                <FontAwesomeIcon icon="edit" />
            </button>
            <GalleryModal />
            {/* write card to hold galley images retrieved from database */}

            <section>
            <div className="col-12 mt-5">

                <Link to="/item"><img src="/images/playThing.png" alt="climbing structure for children" className="img-fluid gallery-images" />
                    <img src="/images/shelf.png" alt="custom shelf" className="img-fluid gallery-images" />
                    <img src="/images/bunkBed.png" alt="bunk bed" className="img-fluid gallery-images" />
                    <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                    <img src="/images/playThing2.png" alt="climbing structure for childrenable" className="img-fluid gallery-images" />
                    <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                    <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                    <img src="/images/playThing3.png" alt="climbing structure for children" className="img-fluid gallery-images" />
                    <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                </Link>
            </div>

        </section>

        </div>
    );
}

export default Galleryimgs;