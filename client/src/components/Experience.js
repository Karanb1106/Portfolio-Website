import React from 'react';
import { useInView } from 'react-intersection-observer';
import { experience } from '../data/portfolioData';
import './Experience.css';

const colorMap = {
  blue: { accent: '#4f8ef7', bg: 'rgba(79, 142, 247, 0.08)', border: 'rgba(79, 142, 247, 0.2)' },
  violet: { accent: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.08)', border: 'rgba(139, 92, 246, 0.2)' },
  cyan: { accent: '#22d3ee', bg: 'rgba(34, 211, 238, 0.08)', border: 'rgba(34, 211, 238, 0.2)' },
};

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="section-container">
        <div className={`exp-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Career</div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey — the roles, responsibilities, and impact I've made.
          </p>
        </div>

        <div className="timeline">
          {experience.map((exp, i) => {
            const colors = colorMap[exp.color] || colorMap.blue;
            return (
              <div
                key={exp.id}
                className={`timeline-item ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                <div className="timeline-connector">
                  <div className="timeline-dot" style={{ background: colors.accent, boxShadow: `0 0 20px ${colors.accent}60` }}></div>
                  {i < experience.length - 1 && <div className="timeline-line"></div>}
                </div>

                <div className="timeline-card glass-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company" style={{ color: colors.accent }}>
                        🏢 {exp.company} · {exp.location}
                      </div>
                    </div>
                    <div
                      className="exp-duration"
                      style={{ background: colors.bg, border: `1px solid ${colors.border}`, color: colors.accent }}
                    >
                      📅 {exp.duration}
                    </div>
                  </div>

                  <ul className="exp-points">
                    {exp.description.map((point, j) => (
                      <li key={j} className="exp-point">
                        <span className="point-dot" style={{ background: colors.accent }}></span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="exp-tech-stack">
                    {exp.tech.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

