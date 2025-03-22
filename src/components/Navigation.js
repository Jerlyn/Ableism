import React from 'react';

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
        <li className={currentView === 'quiz' ? 'active' : ''}>
          <button 
            onClick={() => navigateTo('quiz')}
            aria-label="Quiz page"
            aria-current={currentView === 'quiz' ? 'page' : null}
          >
            Quiz
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

export default Navigation;