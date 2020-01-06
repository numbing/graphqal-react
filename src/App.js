import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePageComponent from "./pages/homePage/HomePgaeComponent";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div className="test">
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
