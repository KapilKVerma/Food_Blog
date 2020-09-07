import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Recepie from "./components/recepie/Recepie";
import SearchRecepies from "./components/recepie/SearchRecepies";
import Subscribe from "./components/subscribe/Subscribe";
import Signup from "./components/signup/Signup";
import Signin from "./components/forms/Signin";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recepie" exact>
          <Recepie />
        </Route>
        <Route path="/searchrecepies" exact>
          <SearchRecepies />
        </Route>
        <Route path="/subscribe" exact>
          <Subscribe />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/signin" exact>
          <Signin />
        </Route>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
