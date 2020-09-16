import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/Gallery";
import Services from "./pages/Services";
import NoMatch from "./pages/NoMatch";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Itempage from "./pages/Item";
import MobileNav from "./components/MobileNav";
import PayConfirmed from "./pages/PayConfirmed";
import PayFailed from "./pages/PayFailed";

function App(props) {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <Router>
      <MobileNav></MobileNav>
      <div className="row">
        <div className="col-lg-2 side-area">
          <Navbar />
        </div>
        <div className="col-lg-10 col-12">
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/gallery" render={(props) => <GalleryPage isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} {...props} />} />
              <Route exact path="/services" component={Services} />
              <Route path="/items/:id" component={Itempage} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/payconfirmed" component={PayConfirmed} />
              <Route exact path="/payfailed" component={PayFailed} />

              {/* client routes to update website */}
              <Route exact path="/login" render={(props) => <Login isLoggedIn={isLoggedin} setIsLoggedin={setIsLoggedin}  {...props} />} />
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