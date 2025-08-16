// Smooth scroll for navigation links
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetEl = document.getElementById(targetId);
    targetEl.scrollIntoView({ behavior: "smooth" });
  });
});

// Dynamic greeting based on time
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greetingText = "Hello!";
if (hour < 12) greetingText = "Good Morning, Twesige!";
else if (hour < 18) greetingText = "Good Afternoon, Twesige!";
else greetingText = "Good Evening, Twesige!";
greetingEl.textContent = greetingText;

// Dark mode toggle
const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
