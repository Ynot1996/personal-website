import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="hero">
      {/* 頭像移到左邊 */}
      <div className="hero-avatar">
        <img src="/images/your-image.jpg" alt="Your Avatar" />
      </div>
      {/* 介紹移到右邊 */}
      <div className="hero-content">
        <p className="hero-intro">Hello! I am</p>
        <h1 className="hero-name">Your Name</h1>
        <p className="hero-tagline">Product Developer</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.png" alt="GitHub" />
          </a>
          {/* 添加更多社交按鈕 */}
        </div>
      </div>
    </div>
  );
};

export default Home;

