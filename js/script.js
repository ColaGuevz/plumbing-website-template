document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navUl = document.querySelector('header nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
            // Optional: Change hamburger icon to 'X'
            menuToggle.textContent = navUl.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when a link is clicked (optional)
        navUl.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navUl.classList.contains('active')) {
                     navUl.classList.remove('active');
                     menuToggle.textContent = '☰';
                }
            });
        });
    }

    // --- Smooth Scrolling for internal links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is just '#' (often used for placeholders)
             if (this.getAttribute('href') === '#') {
                return; // Do nothing for plain '#' links
             }
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                // Calculate offset if header is fixed
                const headerOffset = document.getElementById('header')?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Stop observing after animation triggers once
                    // observer.unobserve(entry.target);
                }
                // Optional: Remove 'visible' class if element scrolls out of view
                // else {
                //     entry.target.classList.remove('visible');
                // }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
            // rootMargin: "-50px 0px -50px 0px" // Adjust viewport bounds
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers (simply show elements)
        animatedElements.forEach(el => {
            el.classList.add('visible');
        });
    }

    // --- Add Scrolled Class to Header ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Add class after scrolling 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Form Handling Example (Client-Side Only) ---
    // Note: For a real website, you need server-side code (PHP, Node.js, etc.)
    // or a form service (like Netlify Forms, Formspree) to actually receive emails.
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            // Simulate sending data (replace with actual AJAX call later)
            formStatus.textContent = 'Sending...';
            formStatus.className = ''; // Clear previous status classes

            setTimeout(() => {
                // Simulate success
                formStatus.textContent = 'Message sent successfully! We\'ll be in touch soon.';
                formStatus.className = 'success';
                contactForm.reset(); // Clear the form

                // Simulate error (uncomment to test error state)
                // formStatus.textContent = 'An error occurred. Please try again later.';
                // formStatus.className = 'error';

            }, 1500); // Simulate network delay
        });
    }

}); // End DOMContentLoaded