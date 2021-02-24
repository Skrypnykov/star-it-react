import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from "./img/slide_1.jpg";
import slide2 from "./img/slide_2.jpg";
import slide3 from "./img/slide_3.jpg";

const MySlider = () => {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className=""
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className=""
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className=""
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default MySlider;