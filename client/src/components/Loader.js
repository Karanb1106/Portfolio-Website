import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="logo-ring ring-1"></div>
          <div className="logo-ring ring-2"></div>
          <div className="logo-ring ring-3"></div>
          <span className="logo-text">&lt;/&gt;</span>
        </div>
        <div className="loader-name gradient-text">Portfolio</div>
        <div className="loader-bar-container">
          <div className="loader-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loader-percent">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;

