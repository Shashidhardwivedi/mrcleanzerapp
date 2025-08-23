import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HeroSlider from './HeroSlider.jsx'
import TestimonialSlider from './TestimonialSlider.jsx'
import AboutUs from './AboutUs.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <HeroSlider/>
    <TestimonialSlider/>
    <AboutUs/>
    <Footer/> */}
  </StrictMode>,
)
