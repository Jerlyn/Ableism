import React from 'react';

const BeliefCard = ({ belief, onClick }) => {
  return (
    <button 
      className={`belief-card ${belief.color}`}
      onClick={onClick}
      aria-label={`Learn more about the ableist belief: ${belief.title}`}
    >
      <div className="belief-icon">
        {/* Icon would be imported from assets */}
        <span className="visually-hidden">{belief.icon} icon</span>
      </div>
      <h3 className="belief-title">{belief.title}</h3>
      <p className="belief-description">{belief.shortDescription}</p>
    </button>
  );
};

export default BeliefCard;