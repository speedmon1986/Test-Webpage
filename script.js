// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    // Initialize the menu toggle button's aria-expanded attribute
    menuToggle.setAttribute('aria-expanded', 'false');

    // Add event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the nav
        nav.classList.toggle('active');

        // Update aria-expanded attribute based on the menu's visibility
        const isExpanded = nav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
});


