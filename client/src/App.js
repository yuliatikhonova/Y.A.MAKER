import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Gallery from "./components/Gallery/gallery";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch";
import Footer from "./pages/Footer";
import Loggin from "./pages/Loggin";
import Register from "./pages/Register";
import Item from "./pages/Item";

function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-sm-2">
          <Navbar />
        </div>
        <div className="col-sm-10">
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/item" component={Item} />

              {/* client routes to update website */}
              <Route exact path="/loggin" component={Loggin} />
              <Route exact path="/register" component={Register} />

              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </Wrapper>
          <Footer />
        </div>
      </div>

    </Router>
  );
}

export default App;
