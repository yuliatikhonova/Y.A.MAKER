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
import Cart from "./pages/Cart";
import Loggin from "./pages/Loggin";
import Register from "./pages/Register";
import Item from "./pages/Item";
import MobileNav from "./components/MobileNav"

function App() {
  return (
    <Router>
      <MobileNav></MobileNav>
      <div className="row">
        <div className="col-lg-2 side-area">
          <Navbar />
        </div>
        <div className="col-lg-10 col-md-12 main-area">
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/item" component={Item} />
              <Route exact path="/cart" component={Cart} />


              {/* client routes to update website */}
              <Route exact path="/loggin" component={Loggin} />
              <Route exact path="/register" component={Register} />

              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </Wrapper>
       
        </div>
      </div>

    </Router>
  );
}

export default App;
