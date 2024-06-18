import React from "react";

const ImageCart = ({ imageData, currentSlider, index }) => {
  const url = imageData?.download_url;
  return (
    <div className="image-cart">
      <img
        className={
          currentSlider === index
            ? "current-image"
            : "current-image hide-current-image"
        }
        src={url}
        alt="pic-1"
      ></img>
    </div>
  );
};

export default ImageCart;
