import React from 'react';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="section-container">
        <div className={`about-grid ${inView ? 'visible' : ''}`}>
          <div className="about-image-side">
            <div className="about-image-wrapper">
              <div className="about-img-bg"></div>
              <div className="about-image-frame">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="about-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="about-photo-fallback" style={{display: 'none'}}>
                  <span className="photo-emoji">👨‍💻</span>
                </div>
              </div>
              <div className="experience-card">
                <div className="exp-number gradient-text">2+</div>
                <div className="exp-text">Years of Coding</div>
              </div>
              <div className="about-code-block">
                <pre><code>{`const dev = {
  passion: "∞",
  coffee: "daily ☕",
  sleep: "optional"
}`}</code></pre>
              </div>
            </div>
          </div>

          <div className="about-text-side">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
            <p className="about-bio">{personalInfo.bio}</p>
            <p className="about-bio">{personalInfo.bio2}</p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div>
                  <div className="highlight-title">Problem Solver</div>
                  <div className="highlight-desc">Love tackling complex challenges</div>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🚀</div>
                <div>
                  <div className="highlight-title">Fast Learner</div>
                  <div className="highlight-desc">Adapt quickly to new technologies</div>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <div>
                  <div className="highlight-title">Team Player</div>
                  <div className="highlight-desc">Collaborate effectively in teams</div>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🌟</div>
                <div>
                  <div className="highlight-title">Detail Oriented</div>
                  <div className="highlight-desc">Pixel-perfect, clean code always</div>
                </div>
              </div>
            </div>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="info-value link">
                  {personalInfo.email}
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">{personalInfo.phone}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value available">Open to Work ✅</span>
              </div>
            </div>

            <div className="about-actions">
              <a
                href={personalInfo.resume}
                className="btn-primary"
                download="Karan_Bhavsar.pdf"
              >
                <span>Download Resume</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary"
              >
                <span>Email Me</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
