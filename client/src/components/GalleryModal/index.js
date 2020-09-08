import React, { Component } from "react";
import ItemDataService from "../../utils/API.js";

export default class GalleryModal extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.saveItem = this.saveItem.bind(this);

    this.state = {
      id: null,
      itemName: "",
      itemDescription: "",
      itemPrice: "",
      imageUpload: "",
      published: false,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      itemName: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      itemDescription: e.target.value
    });
  }
  onChangePrice(e) {
    this.setState({
      itemPrice: e.target.value
    });
  }
  onChangeImage(e) {
    this.setState({
      imageUpload: e.target.value
    });
  }
  saveItem() {
    var data = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      itemPrice: this.state.itemPrice,
      imageUpload: this.state.imageUpload
    };

    ItemDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          itemName: response.data.itemName,
          itemDescription: response.data.itemDescription,
          itemPrice: response.data.itemPrice,
          imageUpload: response.data.imageUpload,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    return(
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form className="modal-dialog" id="newPostForm">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add New Item</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="imageUpload">Add Image</label>
            <input type="file"
              className="form-control-file"
              name="imageUpload"
              value={this.state.imageUpload}
              onChange={this.onChangeImage}></input>
          </div>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <input type="text"
              className="form-control"
              id="itemName"
              name="itemName"
              value={this.state.name}
              onChange={this.onChangeName}
              placeholder="Item Name"></input>
          </div>
          <div className="form-group">
            <label htmlFor="itemPrice">Item Price</label>
            <input type="text"
              className="form-control"
              id="itemPrice"
              name="itemPrice"
              value={this.state.price}
              onChange={this.onChangePrice}
              placeholder="Item Price"></input>
          </div>
          <div className="form-group">
            <label htmlFor="itemDescription">Item Description</label>
            <textarea type="text"
              className="form-control"
              id="itemDescription"
              name="itemDescription"
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            id="close-btn">Cancel</button>
          <button type="submit"
            className="btn btn-primary"
            id="submit-btn"
            onClick={this.saveItem}>Add</button>
        </div>
      </div>
    </form>
    </div>
    )
  }
}