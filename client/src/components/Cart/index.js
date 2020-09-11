import React, { useReducer, Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Paypal from "../Paypal/Paypal";
import axios from "axios";





// function Cart(props) {
//     return (
//         <div className="cart-body">
//             <div className="icon-area">
//                 <img src="/images/bag-icon.png" alt="shopping bag" className="icon" />
//             </div>
//             <div className="row">

//                 <div className="col-lg-10 product-area">
//                     <div className="col">

//                         <table class="table">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">ITEM NAME</th>
//                                     <th scope="col">PRICE</th>
//                                     <th scope="col">QTY</th>
//                                     <th scope="col">TOTAL</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <th scope="row"><img src="./images/table.jpg" alt="table" className="cart-item" />
//                                         <span onClick={() => props.removeItem(props.id)} className="remove">
//                                             𝘅
//                                         </span>

//                                     </th>

//                                     <td className="cart-data">250</td>
//                                     <td className="cart-data">1</td>
//                                     <td className="cart-data">250</td>
//                                 </tr>
//                                 <tr>  </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                 </div>
//             </div>

//             <div className="cart-button-area">
//             <Paypal />
//             </div>
//         </div>
//     );
// }
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
            .then(res =>  
            res.json())
             .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                })
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )


    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (<>
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.imageUpload} {item.itemName} {item.itemPrice}
                        </li>
                    ))}
                </ul>
                <Paypal toPay={items.reduce((previous, current) => { return previous + current.itemPrice }, 0)} />
            </>
            );
        }
    }
}

export default Cart;
