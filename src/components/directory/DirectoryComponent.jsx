import React, { Component } from "react";
import MenuItemComponent from "../menuItem/MenuItemComponent";
import "./directoryStyle.scss";

class DirectoryComponent extends Component {
  constructor() {
    super();
    this.state = {
      sections: []
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItemComponent key={id} title={title} imageUrl={imageUrl}/>
        ))}
      </div>
    );
  }
}

export default DirectoryComponent;
