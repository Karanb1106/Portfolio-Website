import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

const navLinks = [
  { id: 'hero',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Projects' },
  { id: 'experience',   label: 'Experience' },
  { id: 'education',    label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'coding-stats', label: 'Stats' },
  { id: 'contact',      label: 'Contact' },
];

const Navbar = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      let currentSection = 'hero';
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 140) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get initials for logo from name
  const initials = personalInfo.name !== 'Your Name'
    ? personalInfo.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
    : 'Dev';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-container">

        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name gradient-text">{initials}</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          style={menuOpen ? { transform: 'translateX(0)' } : undefined}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              aria-current={activeSection === link.id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resume}
            className="nav-contact-btn btn-primary"
            download="Karan_Bhavsar.pdf"
          >
            <span>Resume PDF</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
