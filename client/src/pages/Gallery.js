import React, { Component } from "react";
import Galleryimgs from "../components/Gallery";
import GalleryModal from "../GalleryModal/";
import API from "../../utils/API";
class GalleryPage extends Component {
    state = {
        items
    };
    render() {
        return (
            <div>
                <button type="button" className="gallery-btn btn-dark" data-toggle="modal" data-target="#newPostModal_">
                    <FontAwesomeIcon icon="edit" />
                </button>
                <GalleryModal />
                <div className="card-deck">
                    {this.state.items.map(item => (
                        <Galleryimgs
                            id={item.id}
                            key={item.key}
                            itemName={item.itemName}
                            itemPrice={item.itemPrice}
                            itemDescription={item.itemDescription}
                            imageUpload={item.imageUpload}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default GalleryPage;

