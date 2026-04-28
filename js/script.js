// Scroll animation for steps
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

// Observe all scroll steps
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.scroll-step');
    steps.forEach(step => {
        observer.observe(step);
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Log scroll position for debugging
window.addEventListener('scroll', function() {
    // You can add custom scroll events here
    // console.log('Scroll position:', window.scrollY);
});
