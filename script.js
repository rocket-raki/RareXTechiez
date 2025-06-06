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
// ✅ Initialize EmailJS with your public key
(function () {
  emailjs.init("1w3PGj3ovW8erqnSB"); // Replace with your actual public key
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.send("service_jkoh826", "template_j6ynmsc", {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    phone: document.getElementById("number").value,
    message: document.getElementById("message").value
  }).then(function (response) {
    alert(" Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, function (error) {
    alert(" Message failed!");
    console.error("EmailJS Error:", error);
  });
});
