import React from "react";

function Gallery(props) {
  return (
    <div className="gallery__item">
      <h4>{props.fName}</h4>
      <div className="gallery__item--image">
        <img src={props.imghrf} alt={props.fName} />
      </div>
    </div>
  );
}

export default Gallery;
