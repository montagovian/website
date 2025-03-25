import React from 'react';

const WaveBackground = () => {
  return (
    <div className="wave-container">
      <svg viewBox="0 0 2000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9FEBE8" />
            <stop offset="100%" stopColor="#FF9B9B" />
          </linearGradient>
        </defs>
        {[...Array(100)].map((_, i) => {
          const baseY = 300 + i * 5;
          return (
            <path
              key={i}
              d={`M 0 ${baseY} 
                 C 500 ${baseY + 50} 1000 ${baseY + 50} 2000 ${baseY}`}
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              opacity={0.2}
              className="wave-line"
              style={{
                animationDelay: `${-i * 0.1}s`
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default WaveBackground; 