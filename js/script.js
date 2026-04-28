// Section activation using Intersection Observer
const observerOptions = {
    threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75],
    rootMargin: '-20% 0px -20% 0px'
};

let activeSection = null;
const sectionVisibility = new Map();

function setActiveSection(nextSection) {
    if (activeSection === nextSection) {
        return;
    }
    if (activeSection) {
        activeSection.classList.remove('active');
    }
    if (nextSection) {
        nextSection.classList.add('active');
    }
    activeSection = nextSection;
}

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sectionVisibility.set(entry.target, entry.intersectionRatio);
        } else {
            sectionVisibility.delete(entry.target);
        }
    });

    let nextSection = activeSection;
    let highestRatio = -1;

    sectionVisibility.forEach((ratio, section) => {
        if (ratio > highestRatio) {
            highestRatio = ratio;
            nextSection = section;
        }
    });

    if (nextSection) {
        setActiveSection(nextSection);
    }
}, observerOptions);

// Initialize section transitions
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section, index) => {
        observer.observe(section);
        if (index === 0) {
            setActiveSection(section);
        }
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
