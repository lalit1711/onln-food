import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter
} from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import FoodCard from "./component/FoodCard";
import CheckOut from "./component/CheckOut";

const App: React.FC = props => {
  return (
    <div>
      <NavBar />
      <div className="section">
        <div className="container">
          <BrowserRouter forceRefresh={true}>
            <Route exact path="/" render={props => <FoodCard {...props} />} />
            <Route path="/card" render={props => <FoodCard {...props} />} />
            <Route path="/checkout" render={props => <CheckOut {...props} />} />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
