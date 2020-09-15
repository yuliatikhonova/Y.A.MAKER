import React, { useReducer, Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Paypal from "../Paypal/Paypal";
import axios from "axios";
import ItemDataService from "../../utils/API";
import Item from "../Item";






// <div className="cart-body">
//     <div className="icon-area">
//         <img src="/images/bag-icon.png" alt="shopping bag" className="icon" />
//     </div>
//     <div className="row">

//         <div className="col-lg-10 product-area">
//             <div className="col">

//                 <table class="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">ITEM NAME</th>
//                             <th scope="col">PRICE</th>
//                             <th scope="col">QTY</th>
//                             <th scope="col">TOTAL</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th scope="row"><img src="./images/table.jpg" alt="table" className="cart-item" />
//                                 <span onClick={() => props.removeItem(props.id)} className="remove">
//                                     𝘅
//                                 </span>

//                             </th>

//                             <td className="cart-data">250</td>
//                             <td className="cart-data">1</td>
//                             <td className="cart-data">250</td>
//                         </tr>
//                         <tr>  </tr>
//                     </tbody>
//                 </table>
//             </div>

//         </div>
//     </div>

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        console.log("Calling Cart");
        fetch("/api/cart")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
    }

    handleDelete = (itemId) => {
        // Whatever you want to do with that item
        axios.delete("/api/cart", { params: { id: itemId } }).then(response => {
            console.log(response);
        });
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (<>
                <div className="cart-body">
                    <div className="icon-area mb-4">
                        <img src="/images/bag-icon.png" alt="shopping bag" className="icon" />
                    </div>
                    <div className="table-responsive text-center">
                        <table className="table cart-size">
                            <thead>
                                <tr className="">

                                    <th scope="col">ITEM NAME</th>
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">QTY</th>
                                    <th scope="col">PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <>
                                        {/* <button className="deleteButton" onClick={() => this.handleDelete()}>
                                                    Delete</button> */}


                                        <tr key={item.Item.itemName} className="">
                                            <td>{item.Item.itemName}</td>
                                            <td>
                                                <img src={item.Item.imageUpload} alt="table" className="cart-item" />
                                            </td>
                                            <td className="cart-data">1</td>
                                            <td className="cart-data">{item.Item.itemPrice}</td>
                                        </tr>
                                       
                                    
                                        </>
                                    ))}
                                    </tbody>
                               </table>
                    </div>
                    {/* <ul>
                        {items.map(item => (
                            <li key={item.Item.itemName}>
                                {item.Item.imageUpload} {item.Item.itemName} {item.Item.itemPrice}
                            </li>
                        ))}
                    </ul> */}
                    <div className="col pp-button mt-5"> 
                    <Paypal toPay={items.reduce((previous, current) => { return previous + parseInt(current.Item.itemPrice) }, 0)} />
                    </div>
                </div>
            </>
            );
        }
    }
}


export default Cart;
