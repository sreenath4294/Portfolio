//////////////////////////////////////////////////
// Set current year
/////////////////////////////////////////////////

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////
// Mobile navigation
/////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////
// Smooth scroll animation
/////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth"
      });
    }

    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/////////////////////////////////////////////////
// Sticky navigation
/////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero")

const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    const headerEl = document.querySelector('.sticky');
    headerEl.style.backgroundColor = "#fff";
    headerEl.style.boxShadow = "0 1.2rem 3.2rem rgba(0, 0, 0, 0.3)";
  }
  if (ent.isIntersecting) {
    const headerEl = document.querySelector('.sticky');
    headerEl.style.backgroundColor = "#e8e8e8";
    headerEl.style.boxShadow = "none";
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
observer.observe(sectionHeroEl);