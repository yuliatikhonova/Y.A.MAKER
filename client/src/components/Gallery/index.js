import React, { Component } from "react";
import ItemDataService from "../../utils/API.js";
import { Link } from "react-router-dom";
import "./style.css";
import GalleryModal from "../GalleryModal"

export default class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveItems = this.retrieveItems.bind(this);
    this.refreshList = this.refreshList.bind(this);

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
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveItems();
  }

  render() {
    const { items } = this.state;

    return (
      <div className="container">
        <GalleryModal refreshList={this.refreshList} open={this.props.modalOpen} setModalOpen={this.props.setModalOpen} />
        <div className="row">
          <div className="col-md-10 mx-auto">
            {items &&
              items.map((item) => (
                <Link to={"/items/" + item.id}>
                  <img className="goonie" src={item.imageUpload} alt={item.itemName}>
                  </img>
                </Link>
              ))}
          </div>
        </div>
      </div >
    );
  }
}