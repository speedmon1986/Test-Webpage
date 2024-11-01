// Select the menu toggle button and navigation links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav');

// Add click event listener to the toggle button
menuToggle.addEventListener('click', () => {
    // Toggle the visibility of navigation links
    if (navLinks.classList.contains('nav-hidden')) {
        navLinks.classList.remove('nav-hidden'); // Show nav
        navLinks.classList.add('nav-visible');   // Add visible class
    } else {
        navLinks.classList.remove('nav-visible'); // Hide nav
        navLinks.classList.add('nav-hidden');     // Add hidden class
    }
});
