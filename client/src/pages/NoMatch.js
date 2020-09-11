import React from "react";
import "./style.css";

function NoMatch() {
    return (
        <section className="container">
            <div className="row">
                <div className="mx-auto mt-5">
                    <h1 className="error">
                    404
                    </h1>
                    <div className="sadIcon mt-5">
                        <img className="sad" src="/images/nomatch.svg" alt="sad face" />
                    </div>
                    <div className="nopage mt-5">
                        <h2>Page Not Found</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NoMatch;
