import React from "react";
import ItemsList from "../components/Gallery";
import GalleryModal from "../components/GalleryModal/";
import axios from 'axios'

const styles = {
    btn: {
        visibility: "visible"
    }
}

function GalleryPage(props) {

    // logoutForm.on("submit", function (event) {
    //     event.preventDefault();//stops from refreshing the page
    //     logoutUser();
    // });

    // function logoutUser() {
    //     axios.post("/api/logout")
    //         .then(function () {
    //             window.location.replace("/");
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // }


    return (
        <div>
            {props.isLoggedin ? (<React.Fragment>
                <button style={styles.btn} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                <button style={styles.btn} type="submit" href className="sign-up btn btn-outline-dark btn-sm">Log out</button>
                </React.Fragment>
            ) : ""}

            <GalleryModal />
            <ItemsList />
        </div>
    )
}

export default GalleryPage;

