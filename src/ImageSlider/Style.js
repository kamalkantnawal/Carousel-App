import styled from "styled-components";

export const ImageSliderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .image-cart {
  }
  .current-image {
    border-radius: 8px;
    margin: 4px;
    box-shadow: 0px 0px 7px #666;
    width: 600px;
  }
  .hide-current-image {
    display: none;
  }
  .arrow {
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: #fff;
    filter: drop-shadow(0px 0px 5px #555);
  }
  .arrow-left {
    left: 24rem;
  }
  .arrow-right {
    right: 24rem;
  }
  .current-indicators {
    position: absolute;
    bottom: 1rem;
  }
  .current-indicator {
    background-color: green;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    margin: 0 0.2rem;
    cursor: pointer;
  }
  .inactive-indicator {
    background-color: #fce7e7;
  }
`;
