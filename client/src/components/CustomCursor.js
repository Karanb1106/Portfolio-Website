import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const posRef = useRef({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const animRef = useRef();

  useEffect(() => {
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    const moveCursor = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const { x, y } = posRef.current;
      // Dot follows fast
      dotX += (x - dotX) * 0.25;
      dotY += (y - dotY) * 0.25;
      // Ring follows slower
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;
      setDot({ x: dotX, y: dotY });
      setRing({ x: ringX, y: ringY });
      animRef.current = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [data-cursor], input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ left: ring.x, top: ring.y }}
      />
      <div
        className="cursor-dot"
        style={{ left: dot.x, top: dot.y }}
      />
    </>
  );
};

export default CustomCursor;
