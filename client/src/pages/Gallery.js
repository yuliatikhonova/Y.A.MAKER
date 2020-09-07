import React from "react";
import Gallery from "../components/Gallery";

function GalleryPage(props) {
    return (
      < Gallery {...props.children} />
                  {/* Map through data from database to display on the gallery page */}
            {/* {data.map(gallery =>(
                <Gallery
                id = {gallery.id}
                key = {gallery.key}
                itemName= {.itemName}
                itemPrice= {.itemPrice}
                itemDescription= {.itemDescription}
                imageUpload= {.imageUpload}

                />
            ))} */}

      );
  }
  
  export default GalleryPage;

