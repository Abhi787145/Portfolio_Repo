document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      // Get the target URL and slide direction
      const targetUrl = event.target.href;
      const slideDirection = event.target.dataset.slide || "left";

      // Add sliding transition effect
      const body = document.body;
      body.classList.add(`slide-${slideDirection}`);

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Match with the CSS transition duration
    });
  });
});
