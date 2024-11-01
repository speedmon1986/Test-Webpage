// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    // Add event listener to the menu toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the nav
        nav.classList.toggle('active');
    });
});

