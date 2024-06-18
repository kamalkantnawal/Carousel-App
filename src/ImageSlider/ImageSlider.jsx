import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "./Constant";
import ImageCart from "./ImageCart";
import { ImageSliderDiv } from "./Style";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const ImageSlider = ({ noOFImages }) => {
  const [imageData, setImageData] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loding, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const url = IMAGE_URL + noOFImages;

  useEffect(() => {
    getImageData();
  }, [url]);
  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentSlider(
        currentSlider === imageData.length - 1 ? 0 : currentSlider + 1
      );
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);
  if (loding) return <h2>Loading Data!! Please Wait...</h2>;
  if (errorMessage !== null)
    return <h2>Something wrong happened..., Error: {errorMessage}</h2>;
  const getImageData = async () => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const jsonData = await data.json();
      if (jsonData) {
        setImageData(jsonData);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.massge);
      setLoading(false);
    }
  };
  const handleClickedLeft = () => {
    setCurrentSlider(
      currentSlider === 0 ? imageData.length - 1 : currentSlider - 1
    );
  };
  const handleClickedRight = () => {
    setCurrentSlider(
      currentSlider === imageData.length - 1 ? 0 : currentSlider + 1
    );
  };
  return (
    <ImageSliderDiv>
      <FaArrowCircleLeft
        onClick={handleClickedLeft}
        className="arrow arrow-left"
      />
      {imageData && imageData.length
        ? imageData.map((image, index) => {
            return (
              <ImageCart
                key={image?.id}
                imageData={image}
                currentSlider={currentSlider}
                index={index}
              />
            );
          })
        : null}
      <FaArrowCircleRight
        onClick={handleClickedRight}
        className="arrow arrow-right"
      />
      <span className="current-indicators">
        {imageData && imageData.length
          ? imageData.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setCurrentSlider(index)}
                  className={
                    currentSlider === index
                      ? "current-indicator"
                      : " current-indicator inactive-indicator"
                  }
                >
                  {}
                </button>
              );
            })
          : null}
      </span>
    </ImageSliderDiv>
  );
};

export default ImageSlider;
