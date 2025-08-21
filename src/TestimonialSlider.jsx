import React, { useState } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This product changed my life! Highly recommend to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Excellent customer service and quality. Five stars!",
  },
  {
    id: 3,
    name: "Bob Johnson",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "A fantastic experience from start to finish.",
  },
  {
    id: 4,
    name: "Alice Brown",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Loved the experience, will buy again!",
  },
  {
    id: 5,
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Quality and service both exceeded expectations.",
  },
  {
    id: 6,
    name: "Emily Clark",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "Friendly staff and great results!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;
  const totalTestimonials = testimonials.length;

  const next = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerView >= totalTestimonials ? 0 : prev + cardsPerView
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - cardsPerView < 0 ? totalTestimonials - cardsPerView : prev - cardsPerView
    );
  };

  // Calculate which 3 testimonials to show
  const visibleTestimonials = [];
  for (let i = 0; i < cardsPerView; i++) {
    visibleTestimonials.push(testimonials[(currentIndex + i) % totalTestimonials]);
  }

  return (
    <div className="slider-container">
      <button
        onClick={prev}
        className="slider-button left"
        aria-label="Previous testimonials"
      >
        ‹
      </button>

      <div className="testimonial-wrapper">
        {visibleTestimonials.map(({ id, image, name, text }) => (
          <div key={id} className="testimonial-card">
            <img src={image} alt={name} className="testimonial-image" />
            <p className="testimonial-text">"{text}"</p>
            <strong className="testimonial-name">- {name}</strong>
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="slider-button right"
        aria-label="Next testimonials"
      >
        ›
      </button>
    </div>
  );
};

export default TestimonialSlider;
