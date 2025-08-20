import React, { useEffect, useState } from 'react';

const Background = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors()


    // код следит за изменением размеров окна и при каждом изменении перегенерирует звёзды под новые размеры экрана
    const handleResize = () => {
      generateStars()
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

   // id, size, x, y, opacity, animationDuration
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


  // id, size, x, y, delay, animationDuration
  const generateMeteors = () => {
    const numbersOfMeteors = Math.floor(window.innerWidth * window.innerHeight / 170000); //кол-во
    const newMeteors = [];
    for (let i = 0; i < numbersOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };


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
            animationDuration: `twinkle ${star.animationDuration}s infinite ease-in-out`,
          }}
        />
      ))}


      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className='meteor animate-meteor'
          style={{
            width: meteor.size * 50+ "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default Background;