import React, { useState } from 'react'
import Pic from "./Pic.jpg";
import axios from 'axios'

const styles = {
  button: {
    margin: "350px",
    fontFamily: "athelas, serif",
    fontWeight: 400,
    fontStyle: "normal",
    textDecoration: "none",
    color: "white",
    borderColor: "white"
  },
  pageStyle: {
    fontFamily: "athelas, serif",
    fontWeight: 400,
    fontStyle: "normal",
    textDecoration: "none",
    color: "white"
  },
  backdrop: {
    backgroundImage: `url(${Pic})`,
    backgroundSize: "cover"
  }
};

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function loginUser(email, password) {
    axios.post("/api/login", { email, password })
      .then((data) => {
        props.setIsLoggedin(true)
        props.history.push("/gallery")//how to route to the page
      })
      // If there's an error, log the error
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
    loginUser(userData.email, userData.password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container mt-5">
      <div style={styles.backdrop} className="row mt-5">
        <div style={styles.pageStyle} className="col-md-6 col-md-offset-3 centered-area mx-auto mt-5">
          <h3 style={styles.pageStyle}>Login Form</h3>
          <form className="login" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button style={styles.button} type="submit" className="sign-up btn btn-outline-dark btn-lg mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;