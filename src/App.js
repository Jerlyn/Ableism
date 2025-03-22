import React, { useState } from 'react';
import './styles/main.css';

// Import belief data
const beliefs = [
  {
    id: 1,
    title: "Disabled People Can't Enjoy Life",
    shortDescription: "The harmful belief that disability prevents joy and fulfillment",
    longDescription: "This belief assumes that having a disability inherently prevents someone from experiencing joy, satisfaction, or a fulfilling life. It fails to recognize that people with disabilities live rich, complex lives with the same range of emotions, experiences, and potential for happiness as anyone else.",
    reality: "People with disabilities experience the full range of human emotions and can lead happy, fulfilling lives. Joy and quality of life are not determined by disability status but by many factors including community, purpose, and access to needed accommodations.",
    icon: "joy",
    color: "purple",
    action: "Recognize that quality of life is subjective and defined by the individual, not by outside perceptions."
  },
  {
    id: 2,
    title: "Disabled Needs Are 'Special'",
    shortDescription: "The misconception that accessibility is an extra accommodation rather than a basic right",
    longDescription: "Labeling accessibility needs as 'special' suggests they are extra, unusual or burdensome accommodations rather than basic requirements for equal participation. This framing creates a hierarchical system where non-disabled needs are seen as standard while disabled needs are viewed as additional or exceptional.",
    reality: "Accessibility is a fundamental right, not a special privilege. Accommodations simply provide equitable access to the same experiences, services, and opportunities that are available to everyone else.",
    icon: "accommodation",
    color: "blue",
    action: "Replace terms like 'special needs' with 'accessibility requirements' or simply 'needs'."
  },
  {
    id: 3,
    title: "Disability Is Only Physical",
    shortDescription: "The narrow view that only visible, physical conditions qualify as disabilities",
    longDescription: "This belief ignores the vast spectrum of disabilities including cognitive, developmental, intellectual, mental, physical, sensory, and acquired conditions. It creates barriers for people with non-physical disabilities who may face disbelief or resistance when seeking accommodations.",
    reality: "Disability encompasses a wide spectrum of conditions including neurological, cognitive, developmental, intellectual, sensory, and chronic illness. Each type of disability comes with unique experiences and accessibility requirements.",
    icon: "diversity",
    color: "purple",
    action: "Educate yourself about the diverse spectrum of disabilities beyond physical conditions."
  },
  {
    id: 4,
    title: "Disability Can Always Be Seen",
    shortDescription: "The false assumption that all disabilities are visible or apparent",
    longDescription: "Many disabilities are not immediately observable to others, including chronic pain, fatigue conditions, autoimmune disorders, hearing impairments, vision impairments, cognitive differences, mental health conditions, and many others. This belief leads to questioning the legitimacy of 'invisible' disabilities.",
    reality: "Many disabilities are not visibly apparent. People with non-visible disabilities often face additional challenges such as having their needs questioned or dismissed because they 'don't look disabled.'",
    icon: "visibility",
    color: "blue",
    action: "Never question someone's disability status based on appearance."
  }
];

// Testimonial data
const testimonials = [
  {
    id: 1,
    belief: 1,
    name: "Maya",
    text: "People assume my life must be tragic because I use a wheelchair. They're shocked when they learn I'm a software engineer, married with two kids, and go rock climbing on weekends. My disability is part of who I am, but it's not the most interesting thing about me, and it certainly doesn't prevent me from enjoying life."
  },
  {
    id: 2,
    belief: 2,
    name: "Jamal",
    text: "When I request captioning for meetings, it's not a 'special' need—it's the equivalent of turning on the lights for people who can see. Without captions, I simply can't access the information. Equal access isn't special treatment; it's a basic right."
  }
];

// BeliefCard Component
const BeliefCard = ({ belief, onClick }) => {
  return (
    <button 
      className={`belief-card ${belief.color}`}
      onClick={onClick}
      aria-label={`Learn more about the ableist belief: ${belief.title}`}
    >
      <div className="belief-icon">
        {/* Placeholder for icon */}
        <span className="visually-hidden">{belief.icon} icon</span>
      </div>
      <h3 className="belief-title">{belief.title}</h3>
      <p className="belief-description">{belief.shortDescription}</p>
    </button>
  );
};

// BeliefDetail Component
const BeliefDetail = ({ belief, navigateTo }) => {
  const relatedTestimonial = testimonials.find(t => t.belief === belief.id);
  
  return (
    <div className="belief-detail">
      <div className={`belief-header ${belief.color}`}>
        <div className="belief-icon large">
          {/* Placeholder for icon */}
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
            const nextId = belief.id < beliefs.length ? belief.id + 1 : 1;
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

// Home Component
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
            onClick={() => navigateTo('resources')}
            aria-label="View resources"
          >
            Learn More
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

// Navigation Component
const Navigation = ({ currentView, navigateTo }) => {
  return (
    <nav className="main-navigation" aria-label="Main navigation">
      <ul className="nav-list">
        <li className={currentView === 'home' ? 'active' : ''}>
          <button 
            onClick={() => navigateTo('home')}
            aria-label="Home page"
            aria-current={currentView === 'home' ? 'page' : null}
          >
            Home
          </button>
        </li>
        <li className={currentView === 'resources' ? 'active' : ''}>
          <button 
            onClick={() => navigateTo('resources')}
            aria-label="Resources page"
            aria-current={currentView === 'resources' ? 'page' : null}
          >
            Resources
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Resources Component
const Resources = ({ navigateTo }) => {
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

// Main App Component
const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentBeliefId, setCurrentBeliefId] = useState(null);
  
  const navigateTo = (view, beliefId = null) => {
    setCurrentView(view);
    if (beliefId !== null) {
      setCurrentBeliefId(beliefId);
    }
    window.scrollTo(0, 0);
  };

  // Render the appropriate view based on current state
  const renderView = () => {
    switch(currentView) {
      case 'home':
        return <Home beliefs={beliefs} navigateTo={navigateTo} />;
      case 'belief':
        return <BeliefDetail 
                 belief={beliefs.find(b => b.id === currentBeliefId)} 
                 navigateTo={navigateTo} 
               />;
      case 'resources':
        return <Resources navigateTo={navigateTo} />;
      default:
        return <Home beliefs={beliefs} navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 id="page-title" tabIndex="-1">Unlearning Ableism</h1>
        <p className="subtitle">Challenging harmful beliefs about disability</p>
      </header>
      
      <main id="main-content" className="main-content" tabIndex="-1">
        {renderView()}
      </main>
      
      <Navigation currentView={currentView} navigateTo={navigateTo} />
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Unlearning Ableism</p>
      </footer>
    </div>
  );
};

export default App;