import React, { Component } from "react";
import SHOP_DATA from "./shopData";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA
    };
  }
  render() {
    console.log(this.state.collection);
    return (
      <div>
        <h1>SHOP PAGE </h1>
      </div>
    );
  }
}

export default ShopPage;
