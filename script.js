document.addEventListener('DOMContentLoaded', () => {
    const experienceCards = document.querySelectorAll('.experience-card');
  
    experienceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  });
  