import React, { useEffect, useState } from 'react';
import './BubbleEffect.css';

const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; left: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 30,
      left: Math.random() * 100,
      duration: 10,
      delay: Math.random() * 2,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleEffect;
