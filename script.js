/**
 * Rayaan GIF Portfolio — Minimal Vanilla JavaScript
 * Lightweight, zero dependencies, fast loading.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Subtle Header elevation on scroll
  const header = document.querySelector('.site-header');
  
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 8px 24px -4px rgba(0, 0, 0, 0.4)';
      } else {
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Smooth internal anchor scroll support with focus management for accessibility
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL hash without jumping
          history.pushState(null, '', targetId);
        }
      }
    });
  });
});
