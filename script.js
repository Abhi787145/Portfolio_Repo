document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  });
  