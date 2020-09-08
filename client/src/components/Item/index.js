import React, { Component } from "react";
import ItemDataService from "../../utils/API.js";
import "./style.css";

export default class Item extends Component {
  constructor(currentItem) {
    super(currentItem);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getItem = this.getItem.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      currentItem: {
        id: null,
        itemName: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getItem(this.currentItem.match.params.id);
  }

  onChangeName(e) {
    const itemName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentItem: {
          ...prevState.currentItem,
          itemName: itemName
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentItem: {
        ...prevState.currentItem,
        description: description
      }
    }));
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

  updateItem() {
    ItemDataService.update(
      this.state.currentItem.id,
      this.state.currentItem
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The item was updated successfully!"
        });
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
      <div className="item-deets">

        <div className="d-flex product-area">

          <div className="col-5 product">
            <img src={currentItem.imageUpload} alt="table" />
          </div>
          <div className=" col-5 discription">
            <div className="d-flex">
              <div className="col-3 d-flex">
                <h1 className="item-deets">{currentItem.itemName}</h1>
              </div>
              <div className="col-2 d-flex">
                <h1 className="d-flex item-deets" >{currentItem.itemPrice}</h1>
              </div>
            </div>
            <p className="product-description item-deets">{currentItem.itemDescription}</p>
            <div className="button-spot mt-5"
              onChange={currentItem.handleFormSubmit}
              value={currentItem.add}
              name="add to cart"
              id="add"
            >
              <button onClick={currentItem.handleFormSubmit} className="btn cart-button ">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}