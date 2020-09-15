import React, { useState } from "react";
import ItemsList from "../components/Gallery";
import axios from 'axios'


function GalleryPage(props) {
    const [modalOpen, setModalOpen] = useState(false)
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

