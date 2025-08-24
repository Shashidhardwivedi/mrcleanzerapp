import React from "react";
import HeroSlider from "./HeroSlider";
import TestimonialSlider from "./TestimonialSlider";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

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
