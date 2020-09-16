import React, { useState, useEffect } from "react";
import ItemsList from "../components/Gallery";
import api from '../utils/API';
import GalleryModal from "../components/GalleryModal/";
import axios from 'axios'

function GalleryPage(props) {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        //call api route to check if logged in, if logged in is true 
        api.isLoggedin().then((res) => {
            props.setIsLoggedin(res.data.isAuthenticated);
        });
    }, [])

    function logingOut() {
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
                <button type="button" className="btn btn-primary" onClick={() => setModalOpen(true)}>
                    Launch demo modal
                </button>
                <button onClick={() => logingOut()} type="submit" className="sign-up btn btn-outline-dark btn-sm">Log out</button>
            </React.Fragment>
            ) : ""}

            <ItemsList modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}

export default GalleryPage;

