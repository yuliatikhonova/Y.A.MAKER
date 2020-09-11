import React from "react";
import "./style.css";

function NoMatch() {
    return (
        <section className="container">
            <div className="row">
                <div className="mx-auto mt-5">
                    <header className="payment-sorry">
                        Error
                    </header>
                    <div className="payIcon">
                        <img className="exclamation" src="/images/nomatch.svg" alt="exclamation" />
                    </div>
                    <div className="transaction">
                        <h1>404 Page Not Found</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NoMatch;
