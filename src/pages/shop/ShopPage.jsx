import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/previewCollection/CollectionPreview";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    console.log(this.state.collection);
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
