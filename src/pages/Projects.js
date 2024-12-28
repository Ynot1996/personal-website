import React from 'react';
import '../styles/Projects.css'; // 將樣式單獨放在 CSS 文件中

const Projects = () => {
  const projects = [
    {
      title: 'Focused group',
      description: '這是一個基於 React 和 Node.js 的個人網站，展示了我的技能與項目。',
      image: '/images/focused_group.png',
      tags: ['HTML', 'CSS', 'javaScript'],
    },
    {
      title: 'Daliy Food Planning App',
      description: '使用 Python 和 Pandas 開發的數據分析工具，可視化複雜數據。',
      image: 'https://via.placeholder.com/300x180',
      tags: ['Python', 'Pandas', 'Data Visualization'],
    },
    {
      title: 'Game',
      description: '一個基於 React 的小型應用，展示了 Redux 的使用方法。',
      image: 'https://via.placeholder.com/300x180',
      tags: ['React', 'Redux', 'JavaScript'],
    },
    {
      title: 'Game',
      description: '一個基於 React 的小型應用，展示了 Redux 的使用方法。',
      image: 'https://via.placeholder.com/300x180',
      tags: ['React', 'Redux', 'JavaScript'],
    },
    {
      title: 'Game',
      description: '一個基於 React 的小型應用，展示了 Redux 的使用方法。',
      image: 'https://via.placeholder.com/300x180',
      tags: ['React', 'Redux', 'JavaScript'],
    },
    {
      title: 'Game',
      description: '一個基於 React 的小型應用，展示了 Redux 的使用方法。',
      image: 'https://via.placeholder.com/300x180',
      tags: ['React', 'Redux', 'JavaScript'],
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-slider">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
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
