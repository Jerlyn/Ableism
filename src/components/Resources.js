import React, { useEffect } from 'react';
import { announceToScreenReader } from '../utils/accessibility';

const Resources = ({ navigateTo }) => {
  useEffect(() => {
    // Announce page to screen readers
    announceToScreenReader('Resources page loaded.');
  }, []);

  return (
    <div className="resources">
      <h2>Learn More</h2>
      
      <section className="resource-section">
        <h3>Understanding Ableism</h3>
        <p>
          Ableism is discrimination and social prejudice against people with disabilities and/or people who are perceived to be disabled. Ableism characterizes people defined by their disabilities as inferior to the non-disabled.
        </p>
        <p>
          Like racism, sexism, and other forms of oppression, ableism operates on individual, institutional, and cultural levels.
        </p>
      </section>
      
      <section className="resource-section">
        <h3>Key Concepts</h3>
        
        <div className="concept-card">
          <h4>Medical vs. Social Model</h4>
          <p>
            The medical model views disability as a problem to be "fixed" within the individual, while the social model recognizes that people are disabled by barriers in society, not by their conditions or differences.
          </p>
        </div>
        
        <div className="concept-card">
          <h4>Person-First vs. Identity-First Language</h4>
          <p>
            Person-first language ("person with autism") puts the person before the disability, while identity-first language ("autistic person") embraces disability as an integral part of identity. Both approaches are valid, and preferences vary among individuals and communities.
          </p>
        </div>
        
        <div className="concept-card">
          <h4>Universal Design</h4>
          <p>
            Universal Design is the design of products, environments, programs, and services to be usable by all people, to the greatest extent possible, without the need for adaptation or specialized design.
          </p>
        </div>
      </section>
      
      <section className="resource-section">
        <h3>Recommended Reading</h3>
        <ul className="resource-list">
          <li>"Disability Visibility: First-Person Stories from the Twenty-First Century" edited by Alice Wong</li>
          <li>"Demystifying Disability: What to Know, What to Say, and How to Be an Ally" by Emily Ladau</li>
          <li>"Care Work: Dreaming Disability Justice" by Leah Lakshmi Piepzna-Samarasinha</li>
          <li>"Being Heumann: An Unrepentant Memoir of a Disability Rights Activist" by Judith Heumann</li>
          <li>"Sitting Pretty: The View from My Ordinary Resilient Disabled Body" by Rebekah Taussig</li>
        </ul>
      </section>
      
      <section className="resource-section">
        <h3>Online Resources</h3>
        <ul className="resource-list">
          <li><a href="https://disabilityvisibilityproject.com/" target="_blank" rel="noopener noreferrer">Disability Visibility Project</a></li>
          <li><a href="https://www.accessliving.org/" target="_blank" rel="noopener noreferrer">Access Living</a></li>
          <li><a href="https://autisticadvocacy.org/" target="_blank" rel="noopener noreferrer">Autistic Self Advocacy Network</a></li>
          <li><a href="https://www.aapd.com/" target="_blank" rel="noopener noreferrer">American Association of People with Disabilities</a></li>
          <li><a href="https://www.adata.org/" target="_blank" rel="noopener noreferrer">ADA National Network</a></li>
        </ul>
      </section>
      
      <button 
        className="primary-button center-button"
        onClick={() => navigateTo('home')}
        aria-label="Return to home page"
      >
        Return Home
      </button>
    </div>
  );
};

export default Resources;