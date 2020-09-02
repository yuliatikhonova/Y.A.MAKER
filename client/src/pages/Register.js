import React from "react";

function Register() {
    return (
        <main class="container-fluid">
            <div class="col-md-12">
                <p>Sign up with your email and password</p>
            </div>
            <form class="signup">
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" id="email-input" placeholder="E-mail Address" />
                    </div>
                    <div class="col">
                        <input type="password" class="form-control mb-5" id="password-input" placeholder="password" />
                    </div>
                </div>
                <div class="sign-up row-md-4">
                    <div class="col-md-12">
                        <button type="submit" href class="sign-up btn btn-outline-dark btn-lg mt-3">Sign Up</button>
                    </div>
                </div>
            </form>
        </main>
    );
}
export default Register;
