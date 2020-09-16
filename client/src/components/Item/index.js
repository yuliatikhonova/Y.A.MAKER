import React, { Component } from "react";
import ItemDataService from "../../utils/API.js";
import "./style.css";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      currentItem: {
        id: null,
        itemName: "",
        itemDescription: "",
        itemPrice: "",
        imageUpload: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getItem(this.props.itemId);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    var bodyItem = { item: this.state.currentItem.id }
    fetch("/api/cart", { method: "post", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(bodyItem) })

  }

  getItem(id) {
    ItemDataService.get(id)
      .then(response => {
        this.setState({
          currentItem: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteItem() {
    ItemDataService.delete(this.state.currentItem.id)
      .then(response => {
        console.log(response.data);
        this.currentItem.history.push('/items')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentItem } = this.state;
    return (
      <div className="container item-deets">
        <div className="row product-area d-flex align-items-center">
          <div className="col-md-6 product d-flex">
            <img className="item-pic img-fluid" src={currentItem.imageUpload} alt="table" />
          </div>
          <div className="col-md-6 discription d-flex flex-column">
            <h1 className="item-deets">{currentItem.itemName} <span className="item-deets" >${currentItem.itemPrice}</span> </h1>
            <p className="product-description item-deets">{currentItem.itemDescription}</p>
            <div className="button-spot mt-5"
              onChange={currentItem.handleFormSubmit}
              value={currentItem.add}
              name="add to cart"
              id="add"
            >
              <button onClick={(e) => this.handleFormSubmit(e)} className="btn cart-button ">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}