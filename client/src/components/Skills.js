import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { skills, techStack } from '../data/portfolioData';
import './Skills.css';

const techIcons = {
  'C++': 'cpp',
  C: 'c',
  JavaScript: 'js',
  'Python (Basics)': 'python',
  'React.js': 'react',
  'Next.js': 'nextjs',
  'HTML5 & CSS3': 'html',
  HTML5: 'html',
  CSS3: 'css',
  'Tailwind CSS': 'tailwind',
  'Node.js': 'nodejs',
  'Express.js': 'express',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  'Git & GitHub': 'github',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'vscode',
  Postman: 'postman',
  'OpenAI API': 'openai',
  'Google Gemini API': 'gemini',
};

const getTechIconUrl = (name) => {
  const icon = techIcons[name];
  return icon ? `https://skillicons.dev/icons?i=${icon}` : null;
};

const TechIcon = ({ name, fallback, className }) => {
  const [hasError, setHasError] = useState(false);
  const iconUrl = getTechIconUrl(name);

  if (!iconUrl || hasError) {
    return fallback ? <span className={className}>{fallback}</span> : null;
  }

  return (
    <img
      className={className}
      src={iconUrl}
      alt=""
      onError={() => setHasError(true)}
    />
  );
};

TechIcon.propTypes = {
  name: PropTypes.string.isRequired,
  fallback: PropTypes.string,
  className: PropTypes.string.isRequired,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = Object.keys(skills);

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-bg-gradient"></div>
      <div className="section-container">
        <div className={`skills-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies I've mastered and tools I work with every day to build amazing products.
          </p>
        </div>

        <div className={`skills-tabs ${inView ? 'visible' : ''}`}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`skills-grid ${inView ? 'visible' : ''}`}>
          {skills[activeTab].map((skill, i) => (
            <div key={skill.name} className="skill-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="skill-header">
                <div className="skill-info">
                  <TechIcon name={skill.name} fallback={skill.icon} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: inView ? `${skill.level}%` : '0%',
                    transitionDelay: `${i * 0.1 + 0.3}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className={`tech-marquee-wrapper ${inView ? 'visible' : ''}`}>
          <div className="marquee-label">Also familiar with</div>
          <div className="tech-marquee">
            <div className="marquee-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="marquee-tech">
                  <TechIcon name={tech} className="marquee-tech-icon" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
