import React from "react";
import "./App.css";
import HomePageComponent from "./pages/homePage/HomePgaeComponent";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="test">
      <Switch>
        <Route exact path="/" component={HomePageComponent} />
      </Switch>
    </div>
  );
}

export default App;
