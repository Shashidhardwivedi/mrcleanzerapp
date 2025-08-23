import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./Footer.css";

const Footer = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nps34ks",
        "template_awa3yxh",
        form.current,
        "lmaLyx2rNSK0lRwBp"
      )
      .then(
        () => {
          setStatusMessage("Thanks for subscribing!");
          e.target.reset();
        },
        () => {
          setStatusMessage("Oops! Something went wrong.");
        }
      );
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <h4>SHINE LOUD CLEAN PROUD!!</h4>
        {/* <button className="order-btn">Order Now</button> */}
      </div>

      <div className="footer-main">
        <div className="footer-column newsletter">
          <h2 className="heading">Stay Informed on Every Event</h2>
          <form ref={form} onSubmit={sendEmail} className="newsletter-form">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              aria-label="Enter your email"
            />
            <button type="submit" className="submit-btn" aria-label="Subscribe">
              <i className="fa-solid fa-circle-right"></i>
            </button>
          </form>
          {statusMessage && (
            <p
              className={`status-message ${
                statusMessage.includes("Oops") ? "error" : "success"
              }`}
            >
              {statusMessage}
            </p>
          )}
          <div className="social-icons">
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-column contact-info">
          <h2 className="heading">Contact Address</h2>
          <address>
            MR.CLEANZER
            <br />
            Veena Nagar, Datta Wadi
            <br />
            Nagpur, MH
          </address>
        </div>

        <div className="footer-column contact-details">
          <h2 className="heading">Contact Details</h2>
          <p>
            <i className="fa-solid fa-mobile"></i> +91 9834939788
          </p>
          <p>
            <i className="fa-brands fa-whatsapp"></i> +91 9834939788
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> mrcleanzers@gmail.com
          </p>
        </div>

        <div className="footer-column links">
          <h2 className="heading">Useful Links</h2>
          <ul>
            <li>
              <Link to="/about#ourstory">Our Story</Link>
            </li>
            <li>
              <Link to="/about#our-team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Mr.Cleanzer. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
