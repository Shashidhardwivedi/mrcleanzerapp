import React, { useEffect, useState } from 'react';
import './HeroSlider.css';

// ✅ Local image import
import cleaningImage from '../src/assets/cleaning.jpg';

const slides = [
  {
    image: cleaningImage,
    title: 'Professional Cleaning',
    description: 'Experience top-quality cleaning services.',
  },
  {
    image: cleaningImage,
    title: 'Custom Packages',
    description: 'We tailor services to your needs.',
  },
  {
    image: cleaningImage,
    title: 'Trusted Professionals',
    description: 'Our team is trained, insured, and reliable.',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto slide every 4 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [length]);

  // Manual navigation
  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div className="hero-slider" id='home'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === current && (
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button className="nav-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="nav-button next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default HeroSlider;
