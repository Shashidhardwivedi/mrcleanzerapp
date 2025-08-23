import React from 'react';
import '../src/AboutUsDetail.css';
import Footer from "../src/Footer";

// Importing images (replace with your actual images)
// import heroImage from '../assets/hero.jpg';
// import ceoImage from '../assets/ceo.jpg';
// import founderImage from '../assets/founder.jpg';
import cleaningImage from '../src/assets/cleaning.jpg';

const AboutUsDetail = () => {
    return (
        <>

            <div className="about-us" id='ourstory'>

                {/* Hero Section */}
                <div
                    className="about-hero"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')`,
                    }}
                >
                    <div className="hero-content">
                        <h1>"Vision drives innovation, collaboration powers success."</h1>
                        <p>- Our Commitment to Excellence</p>
                    </div>
                </div>

                {/* 🔼 Our Team Section moved above leaders */}
                <section className="our-team" id='our-team'>
                    <h2>Our Team</h2>
                    <p>
                        Behind every success story is a team of passionate, creative, and driven individuals.
                        Our team thrives on collaboration and a shared vision to deliver excellence in everything we do.
                    </p>
                </section>

                {/* Meet Our Leadership Section */}
                <section className="leaders">
                    <h2>Meet Our Leadership</h2>

                    <div className="leader-row-container">
                        {/* CEO */}
                        <div className="leader-card">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Jane Doe"
                                className="leader-img"
                            />
                            <div className="leader-text">
                                <h3>Jane Doe</h3>
                                <p className="role">Chief Executive Officer</p>
                                <blockquote>"Leadership is not about titles, it’s about impact."</blockquote>
                                <p className="bio">
                                    Jane brings 15+ years of experience in organizational leadership and strategic growth. Her vision continues to inspire innovation at every level.
                                </p>
                            </div>
                        </div>

                        {/* Founder */}
                        <div className="leader-card">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="John Smith"
                                className="leader-img"
                            />
                            <div className="leader-text">
                                <h3>John Smith</h3>
                                <p className="role">Founder</p>
                                <blockquote>"Build with purpose, lead with integrity."</blockquote>
                                <p className="bio">
                                    John established the company with a focus on quality and community. His dedication laid the foundation for a culture of collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default AboutUsDetail;
