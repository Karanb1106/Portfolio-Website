import React from 'react';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../data/portfolioData';
import './Achievements.css';

const colorMap = {
  gold: { bg: 'rgba(245, 158, 11, 0.08)', border: 'rgba(245, 158, 11, 0.25)', text: '#f59e0b' },
  blue: { bg: 'rgba(79, 142, 247, 0.08)', border: 'rgba(79, 142, 247, 0.25)', text: '#4f8ef7' },
  green: { bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.25)', text: '#10b981' },
  orange: { bg: 'rgba(249, 115, 22, 0.08)', border: 'rgba(249, 115, 22, 0.25)', text: '#f97316' },
  violet: { bg: 'rgba(139, 92, 246, 0.08)', border: 'rgba(139, 92, 246, 0.25)', text: '#8b5cf6' },
  cyan: { bg: 'rgba(34, 211, 238, 0.08)', border: 'rgba(34, 211, 238, 0.25)', text: '#22d3ee' },
};

const Achievements = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" className="achievements-section" ref={ref}>
      <div className="section-container">
        <div className={`ach-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Accomplishments</div>
          <h2 className="section-title">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Milestones and recognitions that reflect my commitment to excellence.
          </p>
        </div>

        <div className={`ach-grid ${inView ? 'visible' : ''}`}>
          {achievements.map((ach, i) => {
            const colors = colorMap[ach.color] || colorMap.blue;
            return (
              <div
                key={ach.id}
                className="ach-card"
                style={{
                  background: `${colors.bg}`,
                  border: `1px solid ${colors.border}`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div className="ach-icon">{ach.icon}</div>
                <div className="ach-year" style={{ color: colors.text }}>{ach.year}</div>
                <h3 className="ach-title" style={{ color: colors.text }}>{ach.title}</h3>
                <p className="ach-desc">{ach.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

