import React from "react";
import "../src/AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="about-us-overlay">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-text">
          We are a passionate team dedicated to delivering the best digital
          solutions for your business. With years of experience and a commitment
          to quality, we help our clients succeed through innovative technology
          and excellent service.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
