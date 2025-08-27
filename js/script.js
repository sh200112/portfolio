// Contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! (Backend integration needed)");
      form.reset();
    });
  }
});
