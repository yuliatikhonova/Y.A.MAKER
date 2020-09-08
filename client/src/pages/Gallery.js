import React from "react";
import ItemsList from "../components/Gallery";
import GalleryModal from "../components/GalleryModal/";
function GalleryPage() {
    
    
    return (
        <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
        <GalleryModal/>
        <ItemsList/>
        </div>
    )
}

export default GalleryPage;

