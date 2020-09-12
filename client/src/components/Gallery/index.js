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
    this.searchName = this.searchName.bind(this);

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

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
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
  }


  searchName() {
    ItemDataService.findByName(this.state.searchName)
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

  render() {
    const { searchName, items, currentItem, currentIndex } = this.state;

    return (
      <div className="container">
        <GalleryModal refreshList={this.refreshList} open={this.props.modalOpen} setModalOpen={this.props.setModalOpen} />
        <div className="row">
          <div className="col-md-10 mx-auto">
            {/* <h4>Items List</h4> */}

            <div className=" ">
              {items &&
                items.map((item, index) => (


                  <Link
                    to={"/items/" + item.id}
                  >
                    <img className="goonie" src={item.imageUpload} alt={item.itemName}>
                    </img>
                  </Link>


                ))}
            </div>
          </div>
        </div>
      </div >
    );
  }
}