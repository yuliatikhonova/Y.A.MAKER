import React from "react";
import $ from "jquery";

const styles = {
  button: {
    margin: "350px"
  }
};

function Loggin() {

  $(document).ready(function () {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function (event) {
      event.preventDefault();//stops from refreshing the page
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };

      if (!userData.email || !userData.password) {
        return;
      }

      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function () {
          window.location.replace("/gallery");
        })
        // If there's an error, log the error
        .catch(function (err) {
          console.log(err);
        });
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 centered-area">
          <h3>Login Form</h3>

          <form className="login">
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email-input" placeholder="Email" />
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password-input" placeholder="Password" />
            </div>

            <button style={styles.button} type="submit" href className="sign-up btn btn-outline-dark btn-lg mt-3">Login</button>
          </form>

        </div>
      </div>
    </div>

  );
}

export default Loggin;
