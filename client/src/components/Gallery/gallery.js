import React from "react";
import "./style.css";

function Gallery(props) {
    return (
        <section className="container">
            {/* !--Modal-- */}
            {/* !-- Button trigger modal -- */}
            <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                Upload New Product
          </button>

            {/* !-- Modal -- */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Upload New Product Thumbnail</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-light">Load Product</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Gallery--> */}
            <div className="col-12 mt-5">

                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />
                <img src="/images/table.jpg" alt="table" className="img-fluid" />

            </div>

        </section>

    );
}

export default Gallery;