import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, stats } from '../data/portfolioData';
import './Hero.css';

const socialLinks = [
  {
    name: 'GitHub',
    url: personalInfo.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: personalInfo.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  }
];

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#4f8ef7', '#8b5cf6', '#22d3ee', '#ec4899'][Math.floor(Math.random() * 4)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(79, 142, 247, ${(1 - dist / 150) * 0.08})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Background blobs */}
      <div className="hero-blob" style={{
        width: '500px', height: '500px',
        background: 'rgba(79, 142, 247, 0.08)',
        top: '-100px', left: '-150px'
      }} />
      <div className="hero-blob" style={{
        width: '400px', height: '400px',
        background: 'rgba(139, 92, 246, 0.08)',
        bottom: '100px', right: '-100px',
        animationDelay: '-3s'
      }} />
      <div className="hero-blob" style={{
        width: '300px', height: '300px',
        background: 'rgba(34, 211, 238, 0.06)',
        top: '40%', left: '40%',
        animationDelay: '-6s'
      }} />

      <div className="hero-content section-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for opportunities</span>
          </div>

          <div className="hero-greeting">Hello, I'm</div>

          <h1 className="hero-name">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">Software Engineer · I build </span>
            <TypeAnimation
              sequence={personalInfo.builds.flatMap(build => [build, 2000])}
              wrapper="span"
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
              className="role-text gradient-text"
            />
          </div>

          <p className="hero-bio">{personalInfo.bio}</p>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary hero-btn" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>Let's Connect</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href={personalInfo.resume}
              className="btn-secondary hero-btn"
              download="Karan_Bhavsar.pdf"
            >
              <span>Download Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
            <a
              href={personalInfo.github}
              className="btn-secondary hero-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.url}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-wrapper">
            <div className="profile-ring ring-outer"></div>
            <div className="profile-ring ring-inner"></div>
            <div className="profile-image-container">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-fallback" style={{display: 'none'}}>
                <span>Photo</span>
              </div>
            </div>
            <div className="profile-badge badge-code">
              <span className="badge-icon">⚡</span>
              <span>MERN Stack</span>
            </div>
            <div className="profile-badge badge-ai">
              <span className="badge-icon">🤖</span>
              <span>AI/ML</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="section-container stats-container">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number gradient-text">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
