import React, { useEffect, useState } from 'react';
import '../css/HeroSlider.css';

// ✅ Local image import
import cleaningImage from '../assets/cleaning.jpg';
import cleaningImage2 from '../assets/cleaning2.jpeg';
import cleaningImage3 from '../assets/cleaning3.jpeg';
import cleaningImage4 from '../assets/cleaning4.jpeg';
import cleaningImage5 from '../assets/cleaning5.jpeg';
import cleaningImage6 from '../assets/cleaning6.jpeg';

const slides = [
  {
    image: cleaningImage,
    title: 'Professional Cleaning',
    description: 'Experience top-quality cleaning services.',
  },
  {
    image: cleaningImage2,
    title: 'Custom Packages',
    description: 'We tailor services to your needs.',
  },
  {
    image: cleaningImage3,
    title: 'Trusted Professionals',
    description: 'Our team is trained, insured, and reliable.',
  },
  {
    image: cleaningImage4,
    title: 'Trusted Professionals',
    description: 'Our team is trained, insured, and reliable.',
  },
  {
    image: cleaningImage5,
    title: 'Trusted Professionals',
    description: 'Our team is trained, insured, and reliable.',
  },
  {
    image: cleaningImage6,
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
