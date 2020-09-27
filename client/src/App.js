import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Recipe from "./components/recipe/Recipe";
import SearchRecipes from "./components/recipe/SearchRecipes";
import Subscribe from "./components/subscribe/Subscribe";
import Signup from "./components/signup/Signup";
import Signin from "./components/forms/Signin";
import Admin from "./components/admin/Admin";
import UserContext from "./context/UserContext";
import "./App.css";
import Axios from "axios";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        `${process.env.REACT_APP_BACKEND}/user/tokenisvalid`,
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      if (tokenRes.data) {
        const userRes = await Axios.get(
          `${process.env.REACT_APP_BACKEND}/user/`,
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <React.Fragment>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navigation />
          <Route path="/" exact component={Home} />
          {userData.user && userData.user.name === "admin" ? (
            <Route path="/admin" exact component={Admin} />
          ) : null}
          <Route path="/recipe/:id" exact component={Recipe} />
          <Route path="/searchrecepies" exact component={SearchRecipes} />
          <Route path="/subscribe" exact component={Subscribe} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Footer />
        </UserContext.Provider>
      </Router>
    </React.Fragment>
  );
}

export default App;
