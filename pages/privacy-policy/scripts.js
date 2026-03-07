// Mobile nav
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

// Active TOC link on scroll
const sections = document.querySelectorAll(".prose section[id]");
const tocLinks = document.querySelectorAll(".toc a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tocLinks.forEach((a) => a.classList.remove("active"));
        const active = document.querySelector(
          `.toc a[href="#${entry.target.id}"]`,
        );
        if (active) active.classList.add("active");
      }
    });
  },
  { rootMargin: "-10% 0px -80% 0px" },
);

sections.forEach((s) => observer.observe(s));
