import React from 'react';
import { useInView } from 'react-intersection-observer';
import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="edu-bg-gradient"></div>
      <div className="section-container">
        <div className={`edu-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Academic Background</div>
          <h2 className="section-title">
            <span className="gradient-text">Education</span> & Learning
          </h2>
          <p className="section-subtitle">
            My academic journey that built the foundation for my technical expertise.
          </p>
        </div>

        {/* Featured — BE degree */}
        <div className={`edu-featured ${inView ? 'visible' : ''}`}>
          <div className="edu-card edu-card-featured glass-card">
            <div className="edu-featured-label">🎓 Current Education</div>
            <div className="edu-featured-body">
              <div className="edu-featured-left">
                <h3 className="edu-degree">{education[0].degree}</h3>
                <div className="edu-field">{education[0].field}</div>
                <div className="edu-institution">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span>{education[0].institution}</span>
                </div>
                <div className="edu-location-dur">
                  <span>📍 {education[0].location}</span>
                  <span>📅 {education[0].duration}</span>
                </div>
                <ul className="edu-highlights">
                  {education[0].highlights.map((h, j) => (
                    <li key={j}><span className="highlight-bullet">→</span>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="edu-featured-right">
                <div className="cgpa-badge">
                  <div className="cgpa-label">CGPA</div>
                  <div className="cgpa-value gradient-text">{education[0].cgpa}</div>
                  <div className="cgpa-sub">out of 10</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Class XII & X side by side */}
        <div className={`edu-secondary-grid ${inView ? 'visible' : ''}`}>
          {education.slice(1).map((edu, i) => (
            <div
              key={edu.id}
              className="edu-card glass-card"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="edu-icon">{i === 0 ? '📗' : '📘'}</div>
              <div className="edu-header-row">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-field">{edu.field}</div>
                </div>
                <div className="edu-cgpa">
                  <div className="cgpa-label">Score</div>
                  <div className="cgpa-value gradient-text" style={{ fontSize: '1.1rem' }}>{edu.cgpa}</div>
                </div>
              </div>
              <div className="edu-institution">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span>{edu.institution}</span>
              </div>
              <div className="edu-duration">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{edu.duration} &nbsp;·&nbsp; 📍 {edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
