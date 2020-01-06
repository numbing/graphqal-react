import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePageComponent from "./pages/homePage/HomePgaeComponent";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInSingUp from "./pages/signInSingUp/SignInSingUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSingUp} />
      </Switch>
    </div>
  );
}

export default App;
