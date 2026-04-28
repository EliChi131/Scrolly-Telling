// Scroll animation using Intersection Observer
const observerOptions = {
    threshold: 0.3,
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

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.scroll-step');
    steps.forEach(step => {
        observer.observe(step);
    });

    // Smooth scroll for anchor links
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

    // Add parallax effect on hero header
    const heroHeader = document.querySelector('.hero-header');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroHeader && scrolled < window.innerHeight) {
            heroHeader.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Fade out hero header on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const headerHeight = window.innerHeight;
        if (scrolled < headerHeight) {
            const opacity = 1 - (scrolled / headerHeight);
            document.querySelector('.header-content').style.opacity = opacity;
        }
    });
});
