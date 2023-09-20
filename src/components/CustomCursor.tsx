import { useState, useEffect } from 'react';

export default function CustomCursor({ showCursor }) {
  if (!showCursor) {
    return null; 
  }

  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseEnter = () => setCursorVisible(false);
    const handleMouseLeave = () => setCursorVisible(true);
    const handleMouseMove = (event) => setCursorPosition({ x: event.clientX, y: event.clientY });

    const cursorElement = document.querySelector('.hover-div'); // Change this selector to target the appropriate element

    cursorElement.addEventListener('mouseenter', handleMouseEnter);
    cursorElement.addEventListener('mouseleave', handleMouseLeave);
    cursorElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      cursorElement.removeEventListener('mouseenter', handleMouseEnter);
      cursorElement.removeEventListener('mouseleave', handleMouseLeave);
      cursorElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-8 h-8 bg-gray-700 rounded-full pointer-events-none absolute transform -translate(-50%, -50%)"
      style={{ top: cursorPosition.y, left: cursorPosition.x }}
    ></div>
  );
};

