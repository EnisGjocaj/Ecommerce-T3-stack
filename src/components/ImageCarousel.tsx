import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function ImageCarousel() {

  const images = [
        "/img/home.png",
        "/img/tech.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderStyles = {
    position: 'relative',
    zIndex: 1,
  };

  const imageContainerStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
  };

  return (
    <div style={sliderStyles}>
        <Slider {...settings}>
          {images.map((imageUrl) => (
            <div key={imageUrl}>
              <div style={imageContainerStyles}>
                   <img
                      src={imageUrl}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      alt="Image Carousel Background"
                   />
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};
