import React, { useState, useEffect } from 'react';
import './Slider.css'

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-advance every 3 seconds
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="slider">
      {/* <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button> */}
      <div className="slide">
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      </div>
    </div>
  );
};

export default Slider;
