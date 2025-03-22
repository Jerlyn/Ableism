import React from 'react';
import BeliefCard from './BeliefCard';

const Home = ({ beliefs, navigateTo }) => {
  return (
    <div className="home">
      <section className="intro">
        <h2>Challenge Your Understanding</h2>
        <p>
          Ableism is discrimination and prejudice against people with disabilities based on the belief that
          typical abilities are superior. Like other forms of discrimination, ableism can be subtle and is often unintentional.
        </p>
        <p>
          Explore common ableist beliefs below, learn how they harm disabled people, and discover more inclusive perspectives.
        </p>
        <div className="cta-container">
          <button 
            className="cta-button" 
            onClick={() => navigateTo('quiz')}
            aria-label="Take the ableism awareness quiz"
          >
            Test Your Knowledge
          </button>
        </div>
      </section>

      <section className="beliefs-grid" aria-label="Grid of ableist beliefs to explore">
        {beliefs.map(belief => (
          <BeliefCard
            key={belief.id}
            belief={belief}
            onClick={() => navigateTo('belief', belief.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;