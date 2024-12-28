import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';


const Home = () => {
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

      {/* 右半部 */}
      <div className="hero-content">
        <p className="hero-intro">Hello! I am</p>
        <h1 className="hero-name">TONY KANG</h1>
        <p className="hero-tagline">Software Engineer</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/tony-kang-a353271bb/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Ynot1996" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.png" alt="GitHub" />
          </a>
          <a href="mailto:wen114teng@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/gmail.png" alt="Gmail" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Home;