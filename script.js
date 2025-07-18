// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursor-trail');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
    }, 100);
});

// Hide cursor on mobile
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorTrail.style.display = 'none';
}

// Typewriter Effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter when page loads
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const text = "— a full-stack developer and open-source enthusiast.";
    typeWriter(typewriterElement, text, 80);
});

// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Smooth Scrolling for Navigation Links
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

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Skill Bar Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize skill bar animations
animateSkillBars();

// Scroll Spy for Navigation
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-cyan-400');
            link.classList.add('text-gray-300');
            
            if (link.getAttribute('href') === '#' + current) {
                link.classList.remove('text-gray-300');
                link.classList.add('text-cyan-400');
            }
        });
    });
}

// Initialize scroll spy
initScrollSpy();

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Parallax Effect for Hero Section
function initParallax() {
    const heroSection = document.getElementById('home');
    const particles = document.getElementById('particles');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (particles) {
            particles.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize parallax
initParallax();

// Loading Animation
function initLoadingAnimations() {
    const elements = document.querySelectorAll('.glass-card, .project-card, .social-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Initialize loading animations
initLoadingAnimations();

// Hover Effects for Project Cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Social Link Tooltips
document.querySelectorAll('.social-link').forEach(link => {
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-sm rounded-lg opacity-0 transition-opacity duration-300 pointer-events-none';
    
    if (link.classList.contains('github')) {
        tooltip.textContent = 'View my GitHub Projects';
    } else if (link.classList.contains('linkedin')) {
        tooltip.textContent = 'Connect on LinkedIn';
    } else if (link.classList.contains('whatsapp')) {
        tooltip.textContent = 'Chat on WhatsApp';
    }
    
    link.style.position = 'relative';
    link.appendChild(tooltip);
    
    link.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
    });
    
    link.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});

// Resume Download Tracking
document.querySelectorAll('a[href*="resume.pdf"]').forEach(link => {
    link.addEventListener('click', () => {
        // Track download (you can integrate with analytics here)
        console.log('Resume downloaded');
    });
});

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        mobileMenu.classList.add('hidden');
    }
});

// Accessibility Improvements
document.querySelectorAll('button, a').forEach(element => {
    if (!element.getAttribute('aria-label')) {
        const text = element.textContent.trim();
        if (text) {
            element.setAttribute('aria-label', text);
        }
    }
});

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Console Welcome Message
console.log(`
%c🚀 Welcome to Rishaub Kumar's Portfolio!
%c
%cBuilt with modern web technologies:
%c• HTML5 • TailwindCSS • JavaScript
%c• AOS Animations • Glassmorphism Effects
%c
%cGitHub: @RishaubKumar
%cLinkedIn: rishaub-kumar-339330219
%c
%cFeel free to explore the code! 👨‍💻
`,
'color: #00ffff; font-size: 20px; font-weight: bold;',
'color: #8b5cf6; font-size: 14px;',
'color: #ffffff; font-size: 12px;',
'color: #00ffff; font-size: 12px;',
'color: #8b5cf6; font-size: 12px;',
'color: #ffffff; font-size: 12px;',
'color: #00ffff; font-size: 12px;',
'color: #8b5cf6; font-size: 12px;',
'color: #00ffff; font-size: 12px;'
); 