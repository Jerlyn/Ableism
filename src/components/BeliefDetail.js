import React, { useEffect, useState } from 'react';
import { testimonials } from '../data/testimonials';
import { announceToScreenReader } from '../utils/accessibility';

const BeliefDetail = ({ belief, navigateTo }) => {
  const [relatedTestimonial, setRelatedTestimonial] = useState(null);
  
  useEffect(() => {
    // Find the testimonial related to this belief
    if (belief) {
      const testimony = testimonials.find(t => t.belief === belief.id);
      setRelatedTestimonial(testimony);
      
      // Announce page change to screen readers
      announceToScreenReader(`Now viewing: ${belief.title}`);
    }
    
    // Scroll to top when viewing a new belief
    window.scrollTo(0, 0);
  }, [belief]);
  
  if (!belief) return <div>Loading...</div>;

  return (
    <div className="belief-detail">
      <div className={`belief-header ${belief.color}`}>
        <div className="belief-icon large">
          {/* Icon would be imported from assets */}
          <span className="visually-hidden">{belief.icon} icon</span>
        </div>
        <h2>{belief.title}</h2>
      </div>
      
      <div className="belief-content">
        <section className="belief-explanation">
          <h3>The Harmful Belief</h3>
          <p>{belief.longDescription}</p>
        </section>
        
        <section className="belief-reality">
          <h3>The Reality</h3>
          <p>{belief.reality}</p>
        </section>
        
        {relatedTestimonial && (
          <section className="belief-testimonial">
            <h3>Personal Perspective</h3>
            <blockquote>
              <p>"{relatedTestimonial.text}"</p>
              <footer>— {relatedTestimonial.name}</footer>
            </blockquote>
          </section>
        )}
        
        <section className="belief-action">
          <h3>Taking Action</h3>
          <p>{belief.action}</p>
        </section>
      </div>
      
      <div className="belief-navigation">
        <button 
          className="secondary-button"
          onClick={() => navigateTo('home')}
          aria-label="Return to all beliefs"
        >
          Back to All Beliefs
        </button>
        
        <button 
          className="primary-button"
          onClick={() => {
            // Navigate to next belief or back to first if at the end
            const nextId = belief.id < 12 ? belief.id + 1 : 1;
            navigateTo('belief', nextId);
          }}
          aria-label="View next belief"
        >
          Next Belief
        </button>
      </div>
    </div>
  );
};

export default BeliefDetail;