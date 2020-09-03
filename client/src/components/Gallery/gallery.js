import React from "react";
import "./style.css";

function Gallery(props) {
    return (
        <section className="container gallery">
            <button type="button" className="gallery-btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                Upload New Product
          </button>
            <form className="modal-dialog" id="newPostForm" action="/api/update" method="POST" enctype="multipart/form-data">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{{ this.city }}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="hidden" name="id" value="{{this.id}}"></input>
                        <div className="form-group">
                            <label for="imageUpload">Add Image</label>
                            <input type="file" className="form-control-file" name="imageUpload"></input>
                        </div>
                        <div className="form-group">
                            <label for="countryName">Country Name</label>
                            <input type="text" className="form-control" id="countryName" name="countryName" placeholder="Country"></input>
                        </div>
                        <textarea type="text" className="blogPost" id="blogPost" name="blogPost"></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" id="close-btn">Cancel</button>
                        <button type="submit" className="btn btn-primary" id="submit-btn">Add</button>
                    </div>
                </div>
            </form>
            <div className="col-12 mt-5">

                <img src="/images/playThing.png" alt="climbing structure for children" className="img-fluid gallery-images" />
                <img src="/images/shelf.png" alt="custom shelf" className="img-fluid gallery-images" />
                <img src="/images/bunkBed.png" alt="bunk bed" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                <img src="/images/playThing2.png" alt="climbing structure for childrenable" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                <img src="/images/playThing3.png" alt="climbing structure for children" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />

            </div>

        </section>

    );
}

export default Gallery;