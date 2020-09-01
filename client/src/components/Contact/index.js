import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";
import "./style.css";

export default class Contact extends Component {

    state = {
        name: "",
        phone: "",
        email: "",
        message: "",
        sent: false
    }

    //handle input
    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    //end of handle input
    formSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/form', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log("message not sent");
            })
    }

    //Resetting the initial data

    resetForm = () => {
        this.setState({
            name: "",
            phone: "",
            email: "",
            message: ""
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }

    render() {
        return (
            <section className="container">
                <form className="row hero-image" onSubmit={this.formSubmit}>
                    <div className="col form-area">
                        
                        <div className="form-group">
                            <input type="text"
                                name="name"
                                className="form-control"
                                id="nameInput"
                                placeholder="Name here"
                                title="Please enter your Name"
                                value={this.state.name}
                                onChange={this.handleName}
                            />
                        </div>
                        <div className="form-group">
                            <input type="phone"
                                name="phone"
                                className="form-control"
                                id="phoneInput"
                                placeholder="Phone Number here"
                                title="Please enter your phone number"
                                value={this.state.phone}
                                onChange={this.handlePhone}
                            />
                        </div>
                        <div className="form-group">
                            <input type="email"
                                name="email"
                                className="form-control"
                                id="emailAddressInput"
                                placeholder="Email here"
                                title="Please enter your email address"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control"
                                name='message'
                                id="messageTextAreaInput"
                                placeholder="Message"
                                rows="5"
                                value={this.state.message}
                                onChange={this.handleMessage}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn">Submit</button>
                        {/* </form> */}
                    </div>
                </form>


            </section>

        );
    }
}