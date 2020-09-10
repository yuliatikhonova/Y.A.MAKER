import React from "react";
import ItemsList from "../components/Gallery";
import GalleryModal from "../components/GalleryModal/";
import axios from 'axios'


function GalleryPage(props) {

    function logingOut () {
        axios.get("/logout")
            .then((data) => {
                props.setIsLoggedin(false)
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    return (
        <div>
            {props.isLoggedin ? (<React.Fragment>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                <button onClick={() => logingOut()} type="submit" className="sign-up btn btn-outline-dark btn-sm">Log out</button>
            </React.Fragment>
            ) : ""}

            <GalleryModal />
            <ItemsList />
        </div>
    )
}

export default GalleryPage;

