import React, { Component } from "react";
import ItemDataService from "../../utils/API.js";
import { Link } from "react-router-dom";

export default class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveItems = this.retrieveItems.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);

    this.state = {
      items: [],
      currentItem: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveItems();
  }

  retrieveItems() {
    ItemDataService.getAll()
      .then(response => {
        this.setState({
          items: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveItems();
    this.setState({
      currentItem: null,
      currentIndex: -1
    });
  }

  setActiveItem(item, index) {
    this.setState({
      currentItem: item,
      currentIndex: index
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="list row">
        <div className="">
          <h4>Items List</h4>

          <div className="card-deck">
            {items && items.map((item, index) => (
                <Link
                  to={"/items/" + item.id}
                >
                  <div className="card"
                    key={item.key}
                  >
                    <img src={item.imageUpload} className="card-img-top" alt={item.itemName}>
                    </img>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    );
  }
}