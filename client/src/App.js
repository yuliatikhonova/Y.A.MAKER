import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <Navbar/>
        <Wrapper>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path= "/checkout"component={Checkout}/>
          <Route exact path= "/contact" component={Contact}/>
          <Route exact path= "/gallery" component={Gallery}/>
          <Route exact path= "/services" component={Services}/>
          {/* <Route exact path= "" component={}/> */}

        </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
