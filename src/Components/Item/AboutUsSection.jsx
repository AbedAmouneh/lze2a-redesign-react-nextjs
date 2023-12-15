
import React from 'react';
import './AboutUsSection.scss';

const AboutUsSection = ({ image, title, description, reverse }) => {
  return (
    <div className={`about-us-section ${reverse ? 'reverse' : ''}`}>
      <div className="image-container">
        <img src={image} alt="About Us" />
      </div>
      <div className="text-container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    
    </div>
  );
};

export default AboutUsSection;
