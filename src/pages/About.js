import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    const slides = [
        "Hi, I'm Tony Kang :)",
        "🤓 I’m interested in mastering data and technology, especially database management, data analysis, and software engineering.",
        "🖥️ I’m currently learning SQL from scratch, as well as improving my skills in Python and cloud computing (AWS).",
        "🤝 I’m looking to collaborate on data-driven projects, open-source contributions, or anything related to backend development.",
        "📧 How to reach me: Feel free to email me at wen114teng@gmail.com or connect with me on LinkedIn.",
        "⚡ Fun fact: I love exploring new technologies while sipping on bubble tea, and I have experience making the perfect cup during my working holiday in Canada!",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const navigate = useNavigate();

  // Function to handle arrow click
    const handleArrowClick = (direction) => {
    // Implement the logic to navigate between screens
      if (direction === 'right') {
        navigate('./About');
    };
    };

    return (
      <div className="hero">

        {/* 右箭頭 */}
        <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>
          <img src="/icons/right-arrow.png" alt="Right Arrow" />
        </div>

        <div className="about-container">
            <h1 className="about-header">About</h1>
            <p className="about-text">{slides[currentSlide]}</p>
            <div className="button-container">
                <button className="button" onClick={handlePrev}>Previous</button>
                <button className="button" onClick={handleNext}>Next</button>
            </div>
        </div>

      </div>
    );
};

export default About;
