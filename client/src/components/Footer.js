import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const initials = personalInfo.name.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase();

  const footerLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="gradient-text">{initials}</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Building the future, one commit at a time.
            </p>
          </div>

          <div className="footer-nav">
            {footerLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} {personalInfo.name}. Crafted with
            <span className="heart">♥</span>
            and lots of ☕
          </p>
          <p className="footer-tech">
            Built with <span className="tech-stack-label">MERN Stack</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
