import React, { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const numbersOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars = [];
    for (let i = 0; i < numbersOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  useEffect(() => {
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;