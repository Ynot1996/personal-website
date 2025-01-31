import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  // 根據螢幕高度決定是否需要限制內容
  const [isCompactView, setIsCompactView] = React.useState(window.innerHeight <= 700);

  React.useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerHeight <= 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 限制描述文字
  const truncateDescription = (description) => {
    if (!description) return '';
    // 在小螢幕高度時限制文字為 150 字
    if (isCompactView && description.length > 150) {
      return description.slice(0, 150) + '...';
    }
    return description;
  };


  // 限制標籤數量
  const limitTags = (tags) => {
    if (!tags) return [];
    // 在小螢幕高度時只顯示前 3 個標籤
    return isCompactView ? tags.slice(0, 3) : tags;
  };

  const projects = [
    {
      title: 'Stock Prediction Model',
      description: truncateDescription(`Stock analysis model using LSTM for time series forecasting to predict stock price movements.
      I was responsible for front-end (HTML, CSS, JavaScript) and back-end (Flask) development, deploying the application on AWS EC2.`),
      image: `${process.env.PUBLIC_URL}/assets/images/focused_group.png`,
      tags: ['HTML & CSS', 'JavaScript', 'Flask', 'AWS', 'ML & DL', 'Web Scraping'],
      link: 'https://github.com/Ynot1996/focusedgroup',
    },
    {
      title: 'Turtle Hydration Reminder',
      description: truncateDescription(`A lightweight desktop widget featuring an adorable baby turtle that reminds you to stay hydrated. Starting as an egg, the turtle grows and interacts with you as you log your water intake. 
      This fun and visually engaging app encourages healthy hydration habits right on your desktop.`),
      image: `${process.env.PUBLIC_URL}/assets/images/turtle.webp`,
      tags: ['HTML & CSS', 'Vue.js', 'Rust', 'SQLite', 'Canvas API'],
    },
    {
      title: 'Daliy Food Planning App',
      description: truncateDescription(`A user-friendly application designed to assist individuals in planning their daily meals effectively.
      This app aims to provide personalized nutrition recommendations, recipe suggestions, and a shopping list generator based on user preferences and dietary needs.`),
      image: `${process.env.PUBLIC_URL}/assets/images/daily-app.webp`,
      tags: ['Swift', 'Node.js/Express', 'MongoDB', 'Docker & Kubernetes'],

    },
    {
      title: 'Coming Soon...',
      description: ``,
      image: `${process.env.PUBLIC_URL}/assets/images/coming-soon.jpg`,
      tags: ['', '', ''],
    },
    {
      title: 'Coming Soon...',
      description: ``,
      image: `${process.env.PUBLIC_URL}/assets/images/coming-soon.jpg`,
      tags: ['', '', ''],
    },
    {
      title: 'Coming Soon...',
      description: ``,
      image: `${process.env.PUBLIC_URL}/assets/images/coming-soon.jpg`,
      tags: ['', '', ''],
    },
    {
      title: 'Coming Soon...',
      description: ``,
      image: `${process.env.PUBLIC_URL}/assets/images/coming-soon.jpg`,
      tags: ['', '', ''],
    },
    {
      title: 'Coming Soon...',
      description: ``,
      image: `${process.env.PUBLIC_URL}/assets/images/coming-soon.jpg`,
      tags: ['', '', ''],
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-slider">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <h3 className="project-title">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {limitTags(project.tags).map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
