import React from 'react';
//import classes from'./Carousel.module.css';
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className=""
            src="https://www.storaenso.com/-/media/images/newsroom/news-items/hero/remote-work-1-2200x400.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className=""
            src="https://test.webnew.storaenso.com/-/media/Images/Sustainability/Hero/Customers-family-store-2200x400.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src="https://www.storaenso.com/-/media/images/products/paperboard-materials/hero/book-store-2200x400.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default Slider;