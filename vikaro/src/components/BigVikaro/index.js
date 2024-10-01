import React, { useState } from 'react';

const BigVikaro = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - container.left) / container.width - 0.5;
    const yPos = (e.clientY - container.top) / container.height - 0.5;

    const movementX = xPos * 80; 
    const movementY = yPos * 80;

    setPosition({ x: movementX, y: movementY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-full" src="/img/BigVikaro.svg" alt="Vikaro Name" />
      <img
        className="absolute top-1/2 left-1/2 transform transition-transform duration-500 ease-out" // Transição mais suave e lenta
        style={{
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        }}
        src="/img/BigVikaroImage.png"
        alt="Centered Image"
      />
    </div>
  );
};

export default BigVikaro;
