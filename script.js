// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

// Toggle mobile sidebar
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navbar.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile sidebar when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 968) {
            navbar.classList.remove('active');
            if (navToggle) {
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 968 && navToggle && navbar) {
        if (!navbar.contains(e.target) && !navToggle.contains(e.target) && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// Tab-based navigation (no scrolling) - works for both desktop and mobile nav
const allNavLinks = [...navLinks, ...mobileNavItems];
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target section
        const targetSection = link.getAttribute('data-section');
        
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show target section
        const sectionToShow = document.getElementById(targetSection);
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
        
        // Update active nav link for both desktop and mobile
        allNavLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });
        link.classList.add('active');
        
        // Also update the corresponding nav in the other menu
        const section = link.getAttribute('data-section');
        allNavLinks.forEach(navLink => {
            if (navLink.getAttribute('data-section') === section) {
                navLink.classList.add('active');
            }
        });
        
        // Scroll to top of content area
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Initialize: Show only home section on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .stat');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link with form data
        const mailtoLink = `mailto:sdrindahl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form after a brief delay
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

// Typing effect for hero subtitle (optional enhancement)
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Dynamic year in footer
const updateFooterYear = () => {
    const footer = document.querySelector('.footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace(/\d{4}/, currentYear);
    }
};
updateFooterYear();

// Smooth scroll to top button (optional - can be added to HTML)
const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-top-btn';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 999;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
    
    document.body.appendChild(button);
};

// Initialize scroll-to-top button
createScrollTopButton();

// Prevent default behavior for project links (since they're placeholders)
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            alert('This is a placeholder link. Replace with your actual project URLs!');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Video Reel Animation Controls
let isPlaying = false;
let reelAnimation = null;
let testRunning = false;

// Run Test Function
function runTest() {
    if (testRunning) return;
    
    const runTestBtn = document.querySelector('.run-test-btn');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const recordingIndicator = document.querySelector('.recording-indicator');
    
    // Update button state
    testRunning = true;
    runTestBtn.classList.add('running');
    runTestBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running...';
    
    // Show recording indicator
    recordingIndicator.style.display = 'flex';
    playPauseBtn.style.display = 'flex';
    
    // Start the animation
    restartReel();
    isPlaying = true;
    
    // After animation completes, reset button
    setTimeout(() => {
        testRunning = false;
        runTestBtn.classList.remove('running');
        runTestBtn.innerHTML = '<i class="fas fa-play"></i> Run Test';
    }, 10000); // 10 seconds to complete animation
}

// Copy code functionality for Playwright example
function copyCode() {
    const codeElement = document.getElementById('playwright-code');
    const code = codeElement.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const copyBtn = document.querySelector('.reel-info .copy-btn');
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code: ', err);
        alert('Failed to copy code. Please try selecting and copying manually.');
    });
}

// Toggle play/pause for the reel animation
function togglePlayPause() {
    const codeElement = document.getElementById('playwright-code');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const testResults = document.querySelector('.test-results');
    
    if (isPlaying) {
        // Pause
        codeElement.style.animationPlayState = 'paused';
        if (testResults) testResults.style.animationPlayState = 'paused';
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        isPlaying = false;
    } else {
        // Play
        codeElement.style.animationPlayState = 'running';
        if (testResults) testResults.style.animationPlayState = 'running';
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    }
}

// Restart the reel animation
function restartReel() {
    const codeElement = document.getElementById('playwright-code');
    const testResults = document.querySelector('.test-results');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const browserOverlay = document.querySelector('.browser-overlay');
    const browserWindow = document.querySelector('.browser-window');
    const loginForm = document.querySelector('.login-form');
    const dashboardPage = document.querySelector('.dashboard-page');
    const welcomeMessage = document.querySelector('.welcome-message');
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    const testAnnotation = document.querySelector('.test-annotation');
    const usernameCursor = document.querySelector('.username-cursor');
    const passwordCursor = document.querySelector('.password-cursor');
    const clickIndicator = document.querySelector('.click-indicator');
    
    // Remove all existing classes and animations
    codeElement.classList.remove('active');
    if (testResults) testResults.classList.remove('active');
    
    codeElement.style.animation = 'none';
    if (testResults) testResults.style.animation = 'none';
    
    // Reset browser animations
    if (browserOverlay) browserOverlay.style.animation = 'none';
    if (browserWindow) browserWindow.style.animation = 'none';
    if (loginForm) loginForm.style.animation = 'none';
    if (dashboardPage) dashboardPage.style.animation = 'none';
    if (welcomeMessage) welcomeMessage.style.animation = 'none';
    if (testAnnotation) testAnnotation.style.animation = 'none';
    if (usernameCursor) usernameCursor.style.animation = 'none';
    if (passwordCursor) passwordCursor.style.animation = 'none';
    if (clickIndicator) clickIndicator.style.animation = 'none';
    
    dashboardCards.forEach(card => {
        card.style.animation = 'none';
    });
    
    // Force reflow
    void codeElement.offsetWidth;
    
    // Add active class and restart animations
    codeElement.classList.add('active');
    if (testResults) testResults.classList.add('active');
    
    codeElement.style.animation = 'typing 8s steps(80) 1s 1 normal both, blink 0.75s step-end infinite';
    if (testResults) testResults.style.animation = 'fadeIn 1s ease 9s forwards';
    
    if (browserOverlay) browserOverlay.style.animation = 'browserFadeIn 1s ease 2s forwards';
    if (browserWindow) browserWindow.style.animation = 'browserScale 0.5s ease 2.5s backwards';
    if (loginForm) loginForm.style.animation = 'formAppear 0.5s ease 3s backwards';
    if (dashboardPage) dashboardPage.style.animation = 'slideToDashboard 0.8s ease 8s forwards';
    if (welcomeMessage) welcomeMessage.style.animation = 'fadeIn 0.5s ease 8.5s forwards';
    if (testAnnotation) testAnnotation.style.animation = 'fadeIn 0.5s ease 3.5s forwards, fadeOut 0.5s ease 9.5s forwards';
    if (usernameCursor) usernameCursor.style.animation = 'cursorBlink 0.75s step-end 3.5s 3, fillUsername 2s ease 4s forwards';
    if (passwordCursor) passwordCursor.style.animation = 'cursorBlink 0.75s step-end 5.5s 3, fillPassword 2s ease 6s forwards';
    if (clickIndicator) clickIndicator.style.animation = 'clickEffect 0.6s ease 7.5s';
    
    dashboardCards.forEach((card, index) => {
        card.style.animation = `cardPopIn 0.4s ease ${9 + (index * 0.2)}s backwards`;
    });
    
    // Reset to playing state
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
    // Restart result line animations
    const resultLines = document.querySelectorAll('.result-line');
    resultLines.forEach((line, index) => {
        line.style.animation = 'none';
        void line.offsetWidth;
        line.style.animation = `slideIn 0.5s ease ${9.5 + (index * 0.3)}s forwards`;
    });
}

// Make functions available globally
window.copyCode = copyCode;
window.togglePlayPause = togglePlayPause;
window.restartReel = restartReel;
window.runTest = runTest;

console.log('Portfolio website loaded successfully! 🚀');
console.log('Remember to customize the content with your own information.');

// ===== DARK MODE TOGGLE =====
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ===== ANIMATED COUNTER FOR STATS =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Observe stats for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && statNumber.getAttribute('data-target')) {
                animateCounter(statNumber);
                entry.target.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ===== ANIMATED PROGRESS CIRCLES =====
function animateProgressCircle(circle) {
    const progress = parseInt(circle.getAttribute('data-progress'));
    const progressBar = circle.querySelector('.progress-bar');
    const circumference = 2 * Math.PI * 54; // radius is 54
    const offset = circumference - (progress / 100) * circumference;
    
    setTimeout(() => {
        progressBar.style.strokeDashoffset = offset;
    }, 100);
}

// Observe metrics for animation
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            animateProgressCircle(entry.target);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress-circle').forEach(circle => {
    metricsObserver.observe(circle);
});

// ===== ENHANCED NAVIGATION ACTIVE STATE =====
const sections = document.querySelectorAll('section[id]');

function setActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active-link'));
            if (navLink) navLink.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// ===== TESTIMONIALS CAROUSEL (OPTIONAL) =====
// Add swipe functionality for mobile testimonials
let touchStartX = 0;
let touchEndX = 0;

const testimonialsGrid = document.querySelector('.testimonials-grid');

if (testimonialsGrid) {
    testimonialsGrid.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    testimonialsGrid.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - could implement carousel next
            console.log('Swiped left');
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - could implement carousel prev
            console.log('Swiped right');
        }
    }
}

// ===== ENHANCED PROJECT CARD INTERACTION =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== CERTIFICATIONS TILT EFFECT =====
document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== TECH STACK ICONS INTERACTION =====
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});

console.log('🎨 Enhanced features loaded!');
console.log('✅ Dark mode toggle');
console.log('✅ Animated counters');
console.log('✅ Progress circles');
console.log('✅ Interactive cards');

// ===== EXPERIENCE SECTION - EXPAND/COLLAPSE (Accordion) =====
function toggleJob(headerElement) {
    const jobDetails = headerElement.nextElementSibling;
    const isActive = jobDetails.classList.contains('active');
    
    // Close ALL sections first (accordion behavior)
    const allHeaders = document.querySelectorAll('.company-header');
    const allDetails = document.querySelectorAll('.job-details');
    allHeaders.forEach(header => {
        header.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
    });
    allDetails.forEach(detail => detail.classList.remove('active'));
    
    // If this section wasn't already active, open it
    if (!isActive) {
        headerElement.classList.add('active');
        jobDetails.classList.add('active');
        headerElement.setAttribute('aria-expanded', 'true');
    }
}

function toggleAllJobs() {
    const allHeaders = document.querySelectorAll('.company-header');
    const allDetails = document.querySelectorAll('.job-details');
    const expandBtn = document.querySelector('.expand-all-btn');
    
    // Check if all are expanded
    const allExpanded = Array.from(allDetails).every(detail => detail.classList.contains('active'));
    
    if (allExpanded) {
        // Collapse all
        allHeaders.forEach(header => header.classList.remove('active'));
        allDetails.forEach(detail => detail.classList.remove('active'));
        expandBtn.textContent = 'Expand All';
    } else {
        // Expand all
        allHeaders.forEach(header => header.classList.add('active'));
        allDetails.forEach(detail => detail.classList.add('active'));
        expandBtn.textContent = 'Collapse All';
    }
}

// Make toggle functions globally available
window.toggleJob = toggleJob;
window.toggleAllJobs = toggleAllJobs;

// Expand first job by default on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstHeader = document.querySelector('.company-header');
    if (firstHeader) {
        toggleJob(firstHeader);
    }
});
