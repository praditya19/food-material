import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Restaurant from "./components/restaurant";
import Kartu from "./components/cards";
import Menu from "./components/menu";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kartu" component={Kartu} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
