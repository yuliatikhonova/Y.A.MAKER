import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Contact() {
    return (
        <section className="container">
                <div className="row hero-image">
                    <div className="col form-area">
                        <div className="form-group">
                            <input type="text" className="form-control" id="nameInput" placeholder="Name"
                                title="Please enter your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="phone" className="form-control" id="phoneInput" placeholder="Phone Number"
                                title="Please enter your phone number"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="emailAddressInput" placeholder="E mail"
                                title="Please enter your email address"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="messageTextAreaInput" placeholder="Message"
                                rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn" placeholder="Enter you message here"
                            title="Please enter your message">Submit</button>
                        {/* </form> */}
                    </div>
                </div>
       

        </section>

    );
}

export default Contact;