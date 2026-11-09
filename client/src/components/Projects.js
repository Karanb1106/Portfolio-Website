import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import './Projects.css';

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

const gradientColors = {
  'from-blue-500 to-violet-600':  'linear-gradient(135deg, #3b82f6, #7c3aed)',
  'from-violet-500 to-pink-600':  'linear-gradient(135deg, #7c3aed, #db2777)',
  'from-cyan-500 to-blue-600':    'linear-gradient(135deg, #06b6d4, #2563eb)',
  'from-green-500 to-cyan-600':   'linear-gradient(135deg, #10b981, #0891b2)',
  'from-orange-500 to-red-600':   'linear-gradient(135deg, #f97316, #dc2626)',
  'from-pink-500 to-violet-600':  'linear-gradient(135deg, #ec4899, #7c3aed)',
};

const categoryIcon = { 'AI/ML': '🤖', 'Frontend': '🎨', 'Full Stack': '⚙️' };

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className={`project-card glass-card ${project.featured ? 'featured' : ''}`}>
    {project.featured && (
      <div className="project-featured-badge"><span>⭐ Featured</span></div>
    )}

    <div
      className="project-visual"
      style={{ background: gradientColors[project.gradient] || 'var(--gradient-primary)' }}
    >
      <div className="project-visual-pattern">
        <span className="project-category-icon">{categoryIcon[project.category] || '⚙️'}</span>
      </div>

      {/* Hover overlay — GitHub only */}
      <div className="project-links-overlay">
        <a href={project.github} className="proj-link" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          View on GitHub
        </a>
      </div>
    </div>

    <div className="project-info">
      <div className="project-category">{project.category}</div>
      <h3 className="project-title">{project.title}</h3>
      {project.subtitle && (
        <div className="project-subtitle">{project.subtitle}</div>
      )}
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      {/* GitHub link at bottom card too */}
      <a
        href={project.github}
        className="project-github-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        <span>Source Code</span>
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="section-container">
        <div className={`projects-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications I've built — combining AI APIs, MERN stack,
            and clean code practices to solve practical problems.
          </p>
        </div>

        <div className={`project-filters ${inView ? 'visible' : ''}`}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${inView ? 'visible' : ''}`}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className={`projects-cta ${inView ? 'visible' : ''}`}>
          <a
            href="https://github.com/Karanb1106"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            <span>View All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
