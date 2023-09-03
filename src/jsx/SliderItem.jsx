import React from 'react';
import '../css/sliderItem.css'; // Create this CSS file for styling

const SliderItem = ({ image, isActive }) => {
  return (
    <div className={`slider-item ${isActive ? 'active' : ''}`}>
      <img src={image} alt={`Slide ${image}`} />
    </div>
  );
};

export default SliderItem;
