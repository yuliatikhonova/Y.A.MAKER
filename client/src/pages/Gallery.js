import React from "react";
import Gallery from "../components/Gallery";

function GalleryPage(props) {
    return (
        <div>
            < Gallery {...props.children} />
            {/* Map through data from database to display on the gallery page */}

            {items.map(item => (
                <Gallery
                    id={item.id}
                    key={item.key}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                    itemDescription={item.itemDescription}
                    imageUpload={item.imageUpload}
                />
            ))}
        </div>
    );
}

export default GalleryPage;

