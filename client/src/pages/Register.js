import React, { useState } from 'react'
import axios from 'axios'

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUpUser(email, password) {
        axios.post("/api/signup", { email, password })
            .then(res => {
                console.log(res);
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let userData = { email, password };
        if (!userData.email || !userData.password) {
            return;
        }
        // If we have an email and password we run the loginUser function and clear the form
        signUpUser(userData.email, userData.password);
        setEmail("");
        setPassword("");
    }

    return (
        <main className="container-fluid">
            <br />
            <div className="col-md-12">
                <h3 >Sign up with your email and password</h3>
            </div>
            <form className="signup" onSubmit={handleSubmit}>
                <br />
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email-input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password-input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="sign-up row-md-4">
                    <div className="col-md-12">
                        <button type="submit" className="sign-up btn btn-outline-dark btn-lg mt-3">Sign Up</button>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Register;