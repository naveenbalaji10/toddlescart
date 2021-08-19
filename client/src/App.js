import "./App.css";
import React from "react";
import { Switch, Route } from "react-router";
import Cart from "./pages/cart";
import CardPreview from "./components/CardItem preview/CardPreview";
import Checkout from "./pages/checkout";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/preview" component={CardPreview} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

export default App;
