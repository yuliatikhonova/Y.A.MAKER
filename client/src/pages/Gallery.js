import React, { useState, useEffect } from "react";
import Galleryimgs from "../components/Gallery";
import { Input, TextArea, FormBtn } from "../components/GalleryModal/";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
function GalleryPage() {
    const [items, setItems] = useState([])
    const [formObject, setFormObject] = useState({
        title: "",
        author: "",
        synopsis: ""
      })
    // Load all books and store them with setBooks
    useEffect(() => {
        loadItems()
    }, [])
    function loadItems() {
        API.getItems()
            .then(res =>
                setItems(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes an imte from the database with a given id, then reloads books from the db
    function deleteItem(id) {
        API.deleteItem(id)
            .then(res => loadItems())
            .catch(err => console.log(err));
    }
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.itemName && formObject.itemPrice ) {
            API.saveItem({
                itemName: formObject.itemName,
                itemPrice: formObject.itemPrice,
                imageUpload: formObject.imageUpload, 
            })
                .then(() => setFormObject({
                    itemName: "",
                    itemPrice: "",
                    itemDescription: "",
                    imageUpload: ""
                }))
                .then(() => loadItems())
                .catch(err => console.log(err));
        }
    };
    return (
        <div>
            <button type="button" className="gallery-btn btn-dark" data-toggle="modal" data-target="#newPostModal_">
              
            </button>
            <div>
            <div className="modal fade" id="newPostModal_" data-backdrop="static" data-keyboard="false" tabindex="-1"
                role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <form className="modal-dialog" id="newPostForm" action="/api/post" method="POST" enctype="multipart/form-data">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Item</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label for="imageUpload">Add Image</label>
                                <Input
                onChange={handleInputChange}
                name="itemName"
                placeholder="Title (required)"
              />
                            </div>
                            <div className="form-group">
                                <label for="itemName">Item Name</label>
                                <Input
                onChange={handleInputChange}
                name="itemName"
                placeholder="Item Name (required)"
              />
                            </div>
                            <div className="form-group">
                                <label for="itemPrice">Item Price</label>
                                <Input
                onChange={handleInputChange}
                name="itemPrice"
                placeholder="item Price (required)"
              />
                            </div>
                            <div className="form-group">
                                <label for="itemDescription">Item Description</label>
                                <TextArea
                onChange={handleInputChange}
                name="itemDescription"
                placeholder="itemDescription (Optional)"
              />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" id="close-btn">Cancel</button>
                            <FormBtn
                disabled={!(formObject.itemName && formObject.itemPrice)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
                        </div>
                    </div>
                </form>
            </div>
            </div>
            {items.length ? (
              <List>
                {items.map(item => (
                  <ListItem key={item._id}>
                    <Link to={"/items/" + item._id}>
                      <Galleryimgs
                        id={item.id}
                        key={item.key}
                        itemName={item.itemName}
                        itemPrice={item.itemPrice}
                        itemDescription={item.itemDescription}
                        imageUpload={item.imageUpload}
                    />
                    </Link>
                    <DeleteBtn onClick={() => deleteItem(item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
    );
}

export default GalleryPage;

