import React from "react";
import HeroSlider from "../src/HeroSlider";
import TestimonialSlider from "../src/TestimonialSlider";
import AboutUs from "../src/AboutUs";
import Footer from "../src/Footer";

function HomePage() {
  return (
    <>
      <HeroSlider />
      <TestimonialSlider />
      <AboutUs />
      <Footer />
    </>
  );
}

export default HomePage;
