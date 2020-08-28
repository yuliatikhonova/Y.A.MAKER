import React from "react";
import Gallery from "../components/Gallery";

function GalleryPage(props) {
    return (
      < Gallery {...props.children} />
      );
  }
  
  export default GalleryPage;

