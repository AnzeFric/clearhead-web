// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// Scroll-reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeUp 0.55s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
);

document.querySelectorAll(".feature-card, .stat-item").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.animationDelay = `${(i % 3) * 0.09}s`;
  observer.observe(el);
});
