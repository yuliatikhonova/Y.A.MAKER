import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
        <Wrapper>
          <Route exact path="" component={}/>
          <Route exact path="" component={}/>
          <Route exact path= ""component={}/>
          <Route exact path= "" component={}/>
          <Route exact path= "" component={}/>
          <Route exact path= "" component={}/>
          <Route exact path= "" component={}/>

        </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
