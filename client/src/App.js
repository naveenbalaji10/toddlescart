import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import React, { Component } from "react";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import CardPreview from "./components/CardItem preview/CardPreview";
import CartState from "./context/cart/CartState";

class App extends Component {
  render() {
    return (
      <CartState>
        <Router>
          <div className="nav">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/preview" component={CardPreview} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </CartState>
    );
  }
}

export default App;
