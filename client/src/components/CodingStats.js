import React from 'react';
import { useInView } from 'react-intersection-observer';
import './CodingStats.css';

const certifications = [
  { name: 'EY AI Skills Passport',                     year: '2026', color: '#4f8ef7', icon: '🤖' },
  { name: 'McKinsey Forward Program',                   year: '2025', color: '#8b5cf6', icon: '📈' },
  { name: 'IBM Ethical Considerations for Gen AI',      year: '2025', color: '#22d3ee', icon: '🎓' },
  { name: 'Full Stack Development – GFG SkillUp Nation', year: '2024', color: '#10b981', icon: '🌐' },
];

const highlights = [
  {
    icon: '⚡',
    color: '#f59e0b',
    border: 'rgba(245,158,11,0.3)',
    bg:    'rgba(245,158,11,0.07)',
    title: 'LeetCode 50 Days Badge',
    desc:  'Earned for consistent daily coding practice and problem-solving on LeetCode.',
    link:  'https://leetcode.com/',
  },
  {
    icon: '🏆',
    color: '#8b5cf6',
    border: 'rgba(139,92,246,0.3)',
    bg:    'rgba(139,92,246,0.07)',
    title: 'CodeSprint – 22nd Rank',
    desc:  'Secured 22nd position in the CodeSprint final round of The CodeClash on Unstop.',
    link:  'https://unstop.com/',
  },
  {
    icon: '🐙',
    color: '#4f8ef7',
    border: 'rgba(79,142,247,0.3)',
    bg:    'rgba(79,142,247,0.07)',
    title: 'GitHub – Karanb1106',
    desc:  'Active open-source contributions, project repositories, and version-controlled code.',
    link:  'https://github.com/Karanb1106',
  },
];

const CodingStats = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="coding-stats" className="coding-stats-section" ref={ref}>
      <div className="section-container">
        <div className={`cs-header ${inView ? 'visible' : ''}`}>
          <div className="section-label">Certifications & Coding</div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Highlights</span>
          </h2>
          <p className="section-subtitle">
            Industry certifications and competitive programming milestones that demonstrate my commitment to continuous learning.
          </p>
        </div>

        {/* Competitive / coding highlights */}
        <div className={`platforms-grid ${inView ? 'visible' : ''}`}>
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="platform-card"
              style={{ background: h.bg, border: `1px solid ${h.border}`, transitionDelay: `${i * 0.1}s` }}
            >
              <div className="platform-top">
                <div className="platform-icon">{h.icon}</div>
                <div className="platform-name" style={{ color: h.color }}>{h.title}</div>
              </div>
              <p className="platform-desc">{h.desc}</p>
              <a
                href={h.link}
                className="platform-link"
                style={{ color: h.color, borderColor: h.border }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile →
              </a>
            </div>
          ))}
        </div>

        {/* Certifications list */}
        <div className={`certs-wrapper ${inView ? 'visible' : ''}`}>
          <div className="certs-title">
            <span className="section-label" style={{ display: 'inline-block', marginBottom: 0 }}>
              Completed Certifications
            </span>
          </div>
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="cert-card glass-card"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-info">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-year" style={{ color: cert.color }}>{cert.year}</div>
                </div>
                <div className="cert-badge" style={{ background: `${cert.color}18`, color: cert.color }}>
                  Certified
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
