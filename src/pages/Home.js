import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="hero">
      {/* 頭像移到左邊 */}
      <div className="hero-avatar">
        <img src="/images/tony.jpeg" alt="Your Avatar" />
      </div>
      {/* 介紹移到右邊 */}
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
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="/icons/gmail.png" alt="Gmail" />
          </a>
          {/* 添加更多社交按鈕 */}
        </div>
      </div>
    </div>
  );
};

export default Home;

