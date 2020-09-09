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

<<<<<<< HEAD
/// has to make an API call (getAll) from items table in db. Then we have to map each item and display the images in the gallery page. Kaelyn has already started the map function in the gallery page. 

function Galleryimgs(props) {
=======
>>>>>>> 1f406c4bf9cb6f8c65d7fc8afe17e3f62041b94a
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