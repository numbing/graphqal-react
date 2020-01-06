import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview"></div>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
    </div>
  );
};

export default CollectionPreview;
