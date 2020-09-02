import React from "react";
import $ from "jquery";

const styles = {
    text: {
        color: "black",
        textAlign: "left"
    },
    error: {
        display: "none"
    }
};

function Register() {

    $(document).ready(function () {
        // Getting references to our form and input
        var signUpForm = $("form.signup");
        var emailInput = $("input#email-input");
        var passwordInput = $("input#password-input");

        // When the signup button is clicked, we validate the email and password are not blank
        signUpForm.on("submit", function (event) {
            event.preventDefault();
            var userData = {
                email: emailInput.val().trim(),
                password: passwordInput.val().trim()
            };

            if (!userData.email || !userData.password) {
                return;
            }
            // If we have an email and password, run the signUpUser function
            signUpUser(userData.email, userData.password);
            emailInput.val("");
            passwordInput.val("");
        });

        // Does a post to the signup route. If successful, we are redirected to the members page
        // Otherwise we log any errors
        function signUpUser(email, password) {
            $.post("/api/signup", {
                email: email,
                password: password
            })
                .then(function (data) {
                    window.location.replace("/gallery");
                    // If there's an error, handle it by throwing up a bootstrap alert
                })
                .catch(handleLoginErr);
        }

        function handleLoginErr(err) {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
    });

    return (
        <main class="container-fluid">
            <br />
            <div class="col-md-12">
                <h3 style={styles.text}>Sign up with your email and password</h3>
            </div>

            <form class="signup">
                <br />
                <div class="form-row">
                    <div class="col">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email-input" placeholder="E-mail Address" />
                    </div>

                    <div class="col">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control mb-5" id="password-input" placeholder="password" />
                    </div>

                    <div style={styles.error} id="alert" class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span> <span class="msg"></span>
                    </div>
                </div>

                <div class="sign-up row-md-4">
                    <div class="col-md-12">
                        <button type="submit" href class="sign-up btn btn-outline-dark btn-lg mt-3">Sign Up</button>
                    </div>
                    {/* <div class="col-md-12">
                    <p style={styles.text}>Or log in <a href="/login">here</a></p>
                    </div> */}
                </div>

            </form>
        </main>
    );
}
export default Register;
