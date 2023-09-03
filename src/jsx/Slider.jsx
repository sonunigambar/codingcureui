import React, { useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import '../css/slider.css'; // Create this CSS file for styling


import postSlide1 from '../img/post-slide-1.jpg';
import postSlide2 from '../img/post-slide-2.jpg';
import postSlide3 from '../img/post-slide-3.jpg';
import postSlide4 from '../img/post-slide-4.jpg';
import postSlide5 from '../img/post-slide-5.jpg';
import postSlide6 from '../img/post-slide-6.jpg';


const images = [
  postSlide1,
  postSlide2,
  postSlide3,
  postSlide4,
  postSlide5,
  postSlide6
  // Add more image URLs here
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index to move to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <SliderItem key={index} image={image} isActive={index === currentIndex} />
      ))}
    </div>
  );
};

export default Slider;
