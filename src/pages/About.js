import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import '../styles/About.css';

const About = () => {
  const slides = [
    `Hi, I'm Tony Kang.

    👨‍💻 Professional Expertise
    I specialize in frontend development (React), backend development (Node.js, Flask), web scraping, and data analysis. I am proficient in Python, version control (Git), cloud services (AWS, GCP), and MySQL. Additionally, I am actively learning other programming languages and technologies, including Java, C#, Docker, Kubernetes, and AI (ML & DL), continuously expanding my technical skills.

    🚀 Technical Journey
    From data processing to system architecture, from developing stock prediction models to creating diet management systems, I am passionate about turning ideas into reality. I am currently optimizing several DIY projects, such as stock prediction models, small games, and application systems, honing my skills and enhancing user experiences through these initiatives.

    📬 How to Reach Me
    Feel free to reach out via email at wen114teng@gmail.com or connect with me on LinkedIn. I look forward to sharing ideas, exchanging thoughts, and creating more value together!
    `,

    `嗨，我是 Tony Kang。

    👨‍💻 專業技能
    我擅長前端開發（React）、後端開發（Node.js、Flask）、網路爬蟲及數據分析，並精通 Python、版本控制（Git）、雲端服務（AWS、GCP）、MySQL 等技術。同時，我正在積極學習其他語言與技術，包括 Java、C#、Docker、Kubernetes、AI（ML & DL） 等，持續拓展技術能力。

    🚀 技術旅程
    從數據處理到系統架構，從開發股票預測模型到飲食管理系統，我熱衷於將想法變為現實。我正在優化多個 DIY 專案，如股票預測模型、小型遊戲與應用系統，並通過這些專案磨練技術和提升用戶體驗。

    📈 代表專案 (部分專案開發中)
    ·股票預測系統：利用 LSTM 模型構建了一個股票預測網頁應用，並部署在 AWS 上，幫助用戶預測市場趨勢。
    ·飲食管理系統：設計了一個多功能應用，用於記錄與分析飲食習慣，並提供個性化建議。

    📬 如何聯繫我
    歡迎隨時通過 Email（wen114teng@gmail.com）或 LinkedIn 與我聯繫，期待與您交流，分享想法，並一起創造更多價值！`,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttonText, setButtonText] = useState('切換中文');

  const handleLan = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setButtonText((prev) => (prev === '切換中文' ? 'English' : '切換中文'));
  };

  const navigate = useNavigate();

  // Function to handle arrow click
  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      navigate('/personal-website/Projects');
    }
    if (direction === 'left') {
      navigate('/personal-website');
    }
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
    onSwipedRight: () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="hero" {...handlers}>

      {/* 左箭頭 */}
      <div className="arrow arrow-left" onClick={() => handleArrowClick('left')}>
        <img src={`${process.env.PUBLIC_URL}/assets/icons/left-arrow.png`} alt="Left Arrow" />
      </div>

      {/* 右箭頭 */}
      <div className="arrow arrow-right" onClick={() => handleArrowClick('right')}>
        <img src={`${process.env.PUBLIC_URL}/assets/icons/right-arrow.png`} alt="Right Arrow" />
      </div>

      {/* Container */}
      <div className="about-container">
        <div className="button-container">
          <button className="button" onClick={handleLan}>{buttonText}</button>
        </div>
        <p className="about-text">{slides[currentSlide]}</p>
      </div>

    </div>
  );
};

export default About;
