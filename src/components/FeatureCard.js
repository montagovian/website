import React from 'react';
import './FeatureCard.css';

function FeatureCard({ children }) {
  return (
    <div className="feature-card">
      {children}
    </div>
  );
}

export default FeatureCard; 