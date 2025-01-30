// Smooth Scroll to Projects
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Intersection Observer for Animations
const elements = document.querySelectorAll("section h2, .project-card, form");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.5s ease-in-out";
  observer.observe(el);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

// Smooth Scroll to Projects
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Contact Form Submission (Dummy Email Functionality)
function sendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name && email && subject && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
  } else {
    alert("Please fill in all fields.");
  }
}function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
