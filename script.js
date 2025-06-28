// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Dropdown functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('button');
  button.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    const icon = button.querySelector('svg:last-child');
    if (icon) icon.classList.toggle('rotate-180');
  });
});

// Page navigation
const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);

    pages.forEach(page => {
      page.classList.add('hidden');
      if (page.id === target) {
        page.classList.remove('hidden');
      }
    });

    switch (target) {
      case 'dashboard':
        pageTitle.textContent = 'Dashboard';
        break;
      case 'library':
        pageTitle.textContent = 'Course Library';
        break;
      case 'progress':
        pageTitle.textContent = 'Progress Tracking';
        break;
      default:
        pageTitle.textContent = 'LearnHub';
    }

    if (window.innerWidth < 768) {
      sidebar.classList.remove('active');
    }
  });
});

// Animate progress rings
const progressRings = document.querySelectorAll('.progress-ring__circle');
progressRings.forEach(ring => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (65 / 100) * circumference;
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = offset;
});