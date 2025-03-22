// Focus trap for modals
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  // Set focus on first element
  firstElement.focus();
  
  const handleTabKey = (e) => {
    // If shift + tab on first element, move to last element
    if (e.key === 'Tab' && e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
    
    // If tab on last element, move to first element
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };
  
  element.addEventListener('keydown', handleTabKey);
  
  return {
    remove: () => {
      element.removeEventListener('keydown', handleTabKey);
    }
  };
};

// Skip to content functionality
export const initSkipToContent = () => {
  const skipLink = document.getElementById('skip-to-content');
  const mainContent = document.getElementById('main-content');
  
  if (skipLink && mainContent) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.tabIndex = -1;
      mainContent.focus();
    });
  }
};

// Enhance keyboard navigation visibility
export const enhanceKeyboardFocus = () => {
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-user');
    }
  });
  
  document.body.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-user');
  });
};

// Announce message to screen readers
export const announceToScreenReader = (message) => {
  const announcer = document.getElementById('sr-announcer');
  
  if (!announcer) {
    const newAnnouncer = document.createElement('div');
    newAnnouncer.id = 'sr-announcer';
    newAnnouncer.setAttribute('aria-live', 'polite');
    newAnnouncer.setAttribute('aria-atomic', 'true');
    newAnnouncer.classList.add('sr-only');
    document.body.appendChild(newAnnouncer);
    
    // Set message after a small delay to ensure screen readers catch the change
    setTimeout(() => {
      newAnnouncer.textContent = message;
    }, 100);
  } else {
    // Clear and set to ensure announcement even if text doesn't change
    announcer.textContent = '';
    setTimeout(() => {
      announcer.textContent = message;
    }, 100);
  }
};