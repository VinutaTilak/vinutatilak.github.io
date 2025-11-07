// ============================================
// CONTENT PROTECTION - Portfolio Security
// ============================================
(function() {
    'use strict';
    
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    }, false);
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    }, false);
    
    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    }, false);
    
    // Disable image dragging
    document.addEventListener('drag', function(e) {
        e.preventDefault();
        return false;
    }, false);
    
    // Disable keyboard shortcuts for copying
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+P, Ctrl+U, F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.ctrlKey || e.metaKey) {
            // Allow Ctrl+F (find) and Ctrl+K (browser search)
            if (e.key === 'c' || e.key === 'C' || 
                e.key === 'a' || e.key === 'A' || 
                e.key === 's' || e.key === 'S' || 
                e.key === 'p' || e.key === 'P' || 
                e.key === 'u' || e.key === 'U' ||
                e.key === 'i' || e.key === 'I' ||
                e.key === 'j' || e.key === 'J') {
                e.preventDefault();
                return false;
            }
        }
        
        // Disable F12 (Developer Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        
        // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
            if (e.key === 'I' || e.key === 'J' || e.key === 'C') {
                e.preventDefault();
                return false;
            }
        }
    }, false);
    
    // Disable copy event
    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', 'Content is protected. © Vinuta Lakshmi Tilak. All rights reserved.');
        e.preventDefault();
        return false;
    }, false);
    
    // Disable cut event
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    }, false);
    
    // Add CSS to disable text selection globally
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
        }
        
        img, video {
            -webkit-user-drag: none !important;
            -khtml-user-drag: none !important;
            -moz-user-drag: none !important;
            -o-user-drag: none !important;
            user-drag: none !important;
        }
        
        /* Prevent image saving via right-click, but allow clicking for navigation */
        img {
            pointer-events: auto !important;
        }
        
        /* Allow text selection in input fields and textareas for contact form */
        input, textarea {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
    `;
    document.head.appendChild(style);
    
    // Basic developer tools detection (can be bypassed, but deters casual users)
    let devtools = {open: false, orientation: null};
    const threshold = 160;
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                // Optionally redirect or show warning
                // window.location.href = 'about:blank';
            }
        } else {
            devtools.open = false;
        }
    }, 500);
    
    // Console warning
    console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and will give them access to your account.', 'color: red; font-size: 16px;');
    
    // Add copyright notice to console
    console.log('%c© 2024 Vinuta Lakshmi Tilak. All rights reserved.', 'color: #42549b; font-size: 12px;');
    console.log('%cUnauthorized copying, reproduction, or distribution of this portfolio content is prohibited.', 'color: #666; font-size: 10px;');
})();

// ContactSection Component
function ContactSection(props = {}) {
    const {
        title = 'Get In Touch',
        subtitle = 'Let\'s connect and discuss opportunities.',
        showLocation = true,
        links = {
            email: 'mailto:vinutatilak@gmail.com',
            linkedin: 'https://www.linkedin.com/in/vinutatilak/',
            github: 'https://github.com/VinutaTilak/',
            instagram: 'https://www.instagram.com/vinuta_tilak?igsh=MThtOG00OXplMjh1Zg=='
        }
    } = props;

    const sectionId = props.sectionId || 'contact';
    
    return `
        <section id="${sectionId}" class="contact-section">
            <div class="contact-section-container">
                <div class="contact-header">
                    <h2 class="contact-title">${title}</h2>
                    <p class="contact-subtitle">${subtitle}</p>
                    <div class="contact-subtitle-accent"></div>
                </div>
                
                <div class="contact-grid">
                    <!-- Left Panel: Contact Buttons (1/3) -->
                    <div class="contact-buttons-panel">
                        <div class="contact-button" data-cta="contact-email">
                            <a href="${links.email}" class="contact-btn-link" target="_self" rel="noopener noreferrer">
                                <i class="fas fa-envelope"></i>
                                <span>Email</span>
                            </a>
                        </div>
                        <div class="contact-button" data-cta="contact-linkedin">
                            <a href="${links.linkedin}" class="contact-btn-link" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-linkedin-in"></i>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div class="contact-button" data-cta="contact-github">
                            <a href="${links.github}" class="contact-btn-link" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                        </div>
                        <div class="contact-button" data-cta="contact-instagram">
                            <a href="${links.instagram}" class="contact-btn-link" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                        </div>
                        ${showLocation ? `
                            <div class="contact-location-info">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Bangalore</span>
                            </div>
                        ` : ''}
                    </div>
                    
                    <!-- Right Panel: Enquiry Form (2/3) -->
                    <div class="contact-form-panel">
                        <div class="contact-form-messages" id="contact-form-messages" role="alert" aria-live="polite"></div>
                        <form class="contact-enquiry-form" id="contact-enquiry-form" novalidate>
                            <div class="contact-form-field">
                                <label for="contact-name" class="contact-form-label">Your Name <span class="required">*</span></label>
                                <input 
                                    type="text" 
                                    id="contact-name" 
                                    name="name" 
                                    class="contact-form-input" 
                                    placeholder="Enter your full name"
                                    required
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-describedby="contact-name-error"
                                >
                                <span class="contact-form-error" id="contact-name-error" role="alert"></span>
                            </div>
                            
                            <div class="contact-form-field">
                                <label for="contact-email-input" class="contact-form-label">Your Email <span class="required">*</span></label>
                                <input 
                                    type="email" 
                                    id="contact-email-input" 
                                    name="email" 
                                    class="contact-form-input" 
                                    placeholder="your.email@example.com"
                                    required
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-describedby="contact-email-error"
                                >
                                <span class="contact-form-error" id="contact-email-error" role="alert"></span>
                            </div>
                            
                            <div class="contact-form-field">
                                <label for="contact-subject" class="contact-form-label">Subject</label>
                                <input 
                                    type="text" 
                                    id="contact-subject" 
                                    name="subject" 
                                    class="contact-form-input" 
                                    placeholder="What's this about?"
                                    aria-invalid="false"
                                >
                                <span class="contact-form-error" id="contact-subject-error" role="alert"></span>
                            </div>
                            
                            <div class="contact-form-field">
                                <label for="contact-message" class="contact-form-label">Your Message <span class="required">*</span></label>
                                <textarea 
                                    id="contact-message" 
                                    name="message" 
                                    class="contact-form-textarea" 
                                    rows="6"
                                    placeholder="Tell me about your project, opportunity, or just say hello..."
                                    required
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-describedby="contact-message-error"
                                ></textarea>
                                <span class="contact-form-error" id="contact-message-error" role="alert"></span>
                            </div>
                            
                            <!-- Honeypot field -->
                            <input 
                                type="text" 
                                name="website" 
                                class="contact-honeypot" 
                                tabindex="-1" 
                                autocomplete="off"
                                aria-hidden="true"
                            >
                            
                            <button type="submit" class="contact-submit-btn" id="contact-submit-btn">
                                <i class="fas fa-paper-plane"></i>
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize ContactSection functionality
function initContactSection() {
    const contactSection = document.querySelector('.contact-section');
    if (!contactSection) return;
    
    const form = contactSection.querySelector('.contact-enquiry-form');
    const messagesContainer = contactSection.querySelector('.contact-form-messages');
    const submitBtn = contactSection.querySelector('.contact-submit-btn');
    const inputs = contactSection.querySelectorAll('.contact-form-input, .contact-form-textarea');
    const honeypot = contactSection.querySelector('.contact-honeypot');
    
    let isSubmitting = false;
    let lastSubmitTime = 0;
    const RATE_LIMIT_MS = 5000; // 5 second cooldown
    
    // Clear messages
    function clearMessages() {
        messagesContainer.innerHTML = '';
        messagesContainer.className = 'contact-form-messages';
        messagesContainer.setAttribute('role', 'alert');
    }
    
    // Show success message
    function showSuccess() {
        clearMessages();
        messagesContainer.className = 'contact-form-messages success';
        messagesContainer.innerHTML = `
            <div class="contact-message-content">
                <i class="fas fa-check-circle"></i>
                <span>Thanks! Your message has been sent. I'll get back to you soon.</span>
            </div>
        `;
        form.reset();
        // Reset all aria-invalid attributes
        inputs.forEach(input => {
            input.setAttribute('aria-invalid', 'false');
            const errorElement = contactSection.querySelector(`#${input.id}-error`);
            if (errorElement) errorElement.textContent = '';
        });
    }
    
    // Show error message
    function showError(message) {
        clearMessages();
        messagesContainer.className = 'contact-form-messages error';
        messagesContainer.innerHTML = `
            <div class="contact-message-content">
                <i class="fas fa-exclamation-circle"></i>
                <span>${message}</span>
            </div>
        `;
    }
    
    // Show field error
    function showFieldError(input, message) {
        input.setAttribute('aria-invalid', 'true');
        const errorElement = contactSection.querySelector(`#${input.id}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }
    
    // Clear field error
    function clearFieldError(input) {
        input.setAttribute('aria-invalid', 'false');
        const errorElement = contactSection.querySelector(`#${input.id}-error`);
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }
    
    // Validate field
    function validateField(input) {
        const value = input.value.trim();
        const isRequired = input.hasAttribute('required');
        const type = input.type;
        
        clearFieldError(input);
        
        if (isRequired && !value) {
            showFieldError(input, 'This field is required.');
            return false;
        }
        
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(input, 'Please enter a valid email address.');
                return false;
            }
        }
        
        if (input.id === 'contact-message' && value && value.length < 20) {
            showFieldError(input, 'Message must be at least 20 characters long.');
            return false;
        }
        
        return true;
    }
    
    // Validate all fields
    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        return isValid;
    }
    
    // Handle form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Check rate limit
        const now = Date.now();
        if (now - lastSubmitTime < RATE_LIMIT_MS) {
            showError(`Please wait ${Math.ceil((RATE_LIMIT_MS - (now - lastSubmitTime)) / 1000)} seconds before submitting again.`);
            return;
        }
        
        // Check honeypot
        if (honeypot.value.trim()) {
            showError('Spam detected. Submission blocked.');
            return;
        }
        
        // Validate form
        if (!validateForm()) {
            showError('Please correct the errors below.');
            return;
        }
        
        if (isSubmitting) return;
        
        isSubmitting = true;
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        clearMessages();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Web3Forms configuration
        const WEB3FORMS_ACCESS_KEY = 'd9f7345d-2c12-4adb-9ccb-a35cb7931e74';
        const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
        
        // Prepare form data for Web3Forms
        const web3formsData = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: data.subject || 'Contact Form Submission from Portfolio',
            from_name: data.name || 'Portfolio Visitor',
            email: data.email || '',
            message: `Name: ${data.name || 'Not provided'}\nEmail: ${data.email || 'Not provided'}\nSubject: ${data.subject || 'No subject'}\n\nMessage:\n${data.message || ''}`,
            replyto: data.email || ''
        };
        
        // Send email via Web3Forms
        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(web3formsData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                console.log('Email sent successfully!', result);
                isSubmitting = false;
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                lastSubmitTime = Date.now();
                showSuccess();
            } else {
                throw new Error(result.message || 'Failed to send email');
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            isSubmitting = false;
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            showError('Failed to send message. Please try again later or contact me directly at <a href="mailto:vinutatilak@gmail.com" style="color: rgba(255, 107, 107, 0.9); text-decoration: underline;">vinutatilak@gmail.com</a>');
        }
    });
    
    // Real-time validation on blur
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(input);
        });
        
        input.addEventListener('input', function() {
            if (input.getAttribute('aria-invalid') === 'true') {
                validateField(input);
            }
        });
    });
    
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    const panels = contactSection.querySelectorAll('.contact-buttons-panel, .contact-form-panel');
    if (panels.length > 0) {
        // Force a reflow to ensure getBoundingClientRect works
        contactSection.offsetHeight;
        
        panels.forEach((panel, index) => {
            // Always observe for scroll
            observer.observe(panel);
            
            // Also check if already in view and trigger animation immediately
            const rect = panel.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                // Trigger animation after a short delay
                setTimeout(() => {
                    panel.classList.add('animate-in');
                }, 200 + (index * 50));
            }
        });
        
        // Fallback: If panels still aren't visible after 500ms, force them visible
        setTimeout(() => {
            panels.forEach(panel => {
                if (!panel.classList.contains('animate-in')) {
                    panel.classList.add('animate-in');
                }
            });
        }, 500);
    }
    
    // Button hover animations
    const buttons = contactSection.querySelectorAll('.contact-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Force scroll to top when navigating to projects.html
    document.querySelectorAll('a[href="projects.html"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Only if it's a direct link to projects.html (no hash or query params)
            if (this.getAttribute('href') === 'projects.html') {
                // Clear any potential scroll position
                sessionStorage.setItem('projectsPageScroll', '0');
                // Let the navigation happen, scroll will be handled on page load
            }
        });
    });
});

// Interactive Category Preview System
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing interactive categories');
    const categoryStrips = document.querySelectorAll('.category-strip');
    const previewSlides = document.querySelectorAll('.preview-slide');
    const previewPanel = document.querySelector('.fixed-preview-panel');
    
    console.log('Found', categoryStrips.length, 'category strips');
    console.log('Found', previewSlides.length, 'preview slides');
    console.log('Preview panel:', previewPanel);
    
    let currentHoveredStrip = null;
    let hideTimeout = null;
    
    // Initially hide the preview panel
    if (previewPanel) {
        previewPanel.classList.remove('show');
    }
    
    // Hide all preview slides initially
    previewSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    function showPreview(category) {
        let targetPreview;
        if (category === 'organizational-design') {
            targetPreview = document.getElementById('organizational-preview');
        } else {
            targetPreview = document.getElementById(`${category.split('-')[0]}-preview`);
        }
        
        // Clear any existing timeout
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
        }
        
        // Show the preview panel
        if (previewPanel) {
            previewPanel.classList.add('show');
        }
        
        // Hide all previews
        previewSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Show target preview
        if (targetPreview) {
            targetPreview.classList.add('active');
        }
    }
    
    function hidePreview() {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }
        
        // For mobile scroll system, hide immediately without delay
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const delay = isTouchDevice ? 0 : 150;
        
        hideTimeout = setTimeout(() => {
            if (previewPanel) {
                previewPanel.classList.remove('show');
            }
            previewSlides.forEach(slide => {
                slide.classList.remove('active');
            });
            currentHoveredStrip = null;
        }, delay);
    }
    
    // Determine if we're in mobile view based on window width
    // This ensures desktop hover works properly even if browser reports touch capability
    const isMobileView = window.innerWidth <= 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isMobileView) {
        // MOBILE MODE: Scroll-triggered preview system
        console.log('Mobile scroll preview system activated');
        
        let activeScrollPreview = null;
        let scrollHandler = null;
        
        function getTriggerZone() {
            // Recalculate trigger zone on each call (handles resize)
            return {
                top: window.innerHeight * 0.4,
                bottom: window.innerHeight * 0.6,
                center: window.innerHeight * 0.5
            };
        }
        
        function findStripInTriggerZone() {
            const zone = getTriggerZone();
            let closestStrip = null;
            let closestDistance = Infinity;
            
            categoryStrips.forEach(strip => {
                const rect = strip.getBoundingClientRect();
                const stripCenter = rect.top + (rect.height / 2);
                
                // Check if strip center is within trigger zone
                if (stripCenter >= zone.top && stripCenter <= zone.bottom) {
                    const distance = Math.abs(stripCenter - zone.center);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestStrip = strip;
                    }
                }
            });
            
            return closestStrip;
        }
        
        function updateScrollPreview() {
            // Only run if still in mobile view
            if (window.innerWidth > 768) {
                // Switched to desktop view, remove scroll handler
                if (scrollHandler) {
                    window.removeEventListener('scroll', scrollHandler, { passive: true });
                    scrollHandler = null;
                }
                return;
            }
            
            const stripInZone = findStripInTriggerZone();
            
            if (stripInZone && stripInZone !== activeScrollPreview) {
                // New strip entered the zone
                activeScrollPreview = stripInZone;
                
                // Remove active class from all strips
                categoryStrips.forEach(s => s.classList.remove('active'));
                
                // Add active class to current strip
                stripInZone.classList.add('active');
                
                const category = stripInZone.getAttribute('data-category');
                console.log('Showing preview for:', category);
                showPreview(category);
            } else if (!stripInZone && activeScrollPreview) {
                // No strip in zone, hide preview
                console.log('Hiding preview - no strip in zone');
                activeScrollPreview = null;
                categoryStrips.forEach(s => s.classList.remove('active'));
                hidePreview();
            }
        }
        
        // Throttled scroll handler - only for mobile
        let scrollThrottle = null;
        scrollHandler = function() {
            if (scrollThrottle) {
                clearTimeout(scrollThrottle);
            }
            scrollThrottle = setTimeout(updateScrollPreview, 50);
        };
        window.addEventListener('scroll', scrollHandler, { passive: true });
        
        // Handle window resize - switch between mobile/desktop modes
        window.addEventListener('resize', function() {
            const nowMobile = window.innerWidth <= 768;
            if (nowMobile) {
                updateScrollPreview();
            } else {
                // Switched to desktop, clean up mobile handlers
                if (scrollHandler) {
                    window.removeEventListener('scroll', scrollHandler, { passive: true });
                    scrollHandler = null;
                }
                activeScrollPreview = null;
                hidePreview();
            }
        }, { passive: true });
        
        // Initial check
        updateScrollPreview();
        
        // Touch/tap handlers for mobile navigation
        categoryStrips.forEach(strip => {
            strip.addEventListener('touchstart', function(e) {
                // Don't prevent default - allow scroll
                // Just add visual feedback
                categoryStrips.forEach(s => s.classList.remove('active'));
                this.classList.add('active');
            });
            
            // Click handler for mobile - navigate
            strip.addEventListener('click', function(e) {
                const category = this.getAttribute('data-category');
                window.location.href = `projects.html?category=${category}`;
            });
        });
    } else {
        // DESKTOP MODE: Mouse hover behavior (no scroll interference)
        console.log('Desktop hover preview system activated');
        
        categoryStrips.forEach(strip => {
            // Mouse enter - show preview
            strip.addEventListener('mouseenter', function() {
                currentHoveredStrip = this;
                const category = this.getAttribute('data-category');
                showPreview(category);
            });
            
            // Mouse leave - hide preview with delay
            strip.addEventListener('mouseleave', function() {
                if (currentHoveredStrip === this) {
                    hidePreview();
                }
            });
            
            // Desktop click handler - navigate immediately
            strip.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                window.location.href = `projects.html?category=${category}`;
            });
        });
    }
    
    // Also handle mouse events on the preview panel itself
    if (previewPanel) {
        previewPanel.addEventListener('mouseenter', function() {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
        });
        
        previewPanel.addEventListener('mouseleave', function() {
            hidePreview();
        });
    }
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Smooth Scrolling for anchor links
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

// Back to Top Button
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message (in a real application, you would send this to a server)
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

// URL Parameter Handling for Projects Page
document.addEventListener('DOMContentLoaded', function() {
    // Prevent browser scroll restoration
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    // Check if we're on the projects page
    if (window.location.pathname.includes('projects.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category) {
            // Category parameter exists - scroll to that category after page loads
            setTimeout(() => {
                const categorySection = document.querySelector(`[data-category="${category}"]`);
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
        // Note: Scroll to top is handled in projects.html to avoid conflicts
    }
});

// Project Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-tag');
    const projectItems = document.querySelectorAll('.project-list-item');
    const projectCategories = document.querySelectorAll('.project-category');
    
    if (filterButtons.length === 0 || projectItems.length === 0) {
        return; // Exit if we're not on the projects page
    }
    
    // Filter function
    let filterWasClicked = false;
    function applyFilter(filterValue, wasUserClick = false) {
        filterWasClicked = wasUserClick;
        
        // Update active state on filter buttons
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filterValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Filter projects
        projectItems.forEach(item => {
            const itemFilters = item.getAttribute('data-filter');
            const projectId = item.getAttribute('data-project');
            const expandPanel = document.querySelector(`.project-expand-panel[data-project="${projectId}"]`);
            
            if (filterValue === 'all') {
                // Show all projects
                item.style.display = '';
                item.removeAttribute('data-hidden');
                if (expandPanel) {
                    expandPanel.style.display = '';
                    expandPanel.removeAttribute('data-hidden');
                }
            } else if (itemFilters) {
                // Convert to lowercase for comparison
                const itemFiltersLower = itemFilters.toLowerCase();
                const filterValueLower = filterValue.toLowerCase();
                
                // Map button filter values to project keywords
                let matches = false;
                
                if (filterValueLower === 'business transformation') {
                    // "Business Transformation" button matches projects with "transformation" keyword
                    matches = itemFiltersLower.includes('transformation');
                } else if (filterValueLower === 'change management') {
                    // "Change Management" button matches projects with "change" keyword
                    matches = itemFiltersLower.includes('change');
                } else {
                    // Single word filter: check if word exists in the project's keywords
                    // Split by spaces and check if any word matches
                    const itemWords = itemFiltersLower.split(/\s+/);
                    matches = itemWords.includes(filterValueLower);
                }
                
                if (matches) {
                    // Show project if it matches the filter
                    item.style.display = '';
                    item.removeAttribute('data-hidden');
                    if (expandPanel) {
                        expandPanel.style.display = '';
                        expandPanel.removeAttribute('data-hidden');
                    }
                } else {
                    // Hide project if it doesn't match
                    item.style.display = 'none';
                    item.setAttribute('data-hidden', 'true');
                    if (expandPanel) {
                        expandPanel.style.display = 'none';
                        expandPanel.setAttribute('data-hidden', 'true');
                        expandPanel.classList.remove('expanded');
                        item.classList.remove('expanded');
                    }
                }
            } else {
                // Hide project if it has no filter attribute
                item.style.display = 'none';
                item.setAttribute('data-hidden', 'true');
                if (expandPanel) {
                    expandPanel.style.display = 'none';
                    expandPanel.setAttribute('data-hidden', 'true');
                    expandPanel.classList.remove('expanded');
                    item.classList.remove('expanded');
                }
            }
        });
        
        // Hide/show project categories based on whether they have visible projects
        projectCategories.forEach(category => {
            const categoryProjects = category.querySelectorAll('.project-list-item');
            let hasVisible = false;
            
            categoryProjects.forEach(item => {
                if (!item.hasAttribute('data-hidden')) {
                    hasVisible = true;
                }
            });
            
            if (hasVisible) {
                category.style.display = '';
            } else {
                category.style.display = 'none';
            }
        });
        
        // Scroll to top of projects section after filtering (only if filter was actually clicked)
        // This check prevents scrolling on initial page load
        if (filterWasClicked) {
            setTimeout(() => {
                const projectsSection = document.querySelector('.projects-content');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const filterValue = this.getAttribute('data-filter');
            if (filterValue) {
                applyFilter(filterValue, true); // Pass true to indicate user click
            }
        });
    });
    
    // Initialize with "All" filter active
    applyFilter('all');
});

// Interactive Collapsible Split-Screen Project Layout
document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-list-item');
    
    // Ensure all projects start in collapsed state
    projectItems.forEach((item) => {
        const projectId = item.getAttribute('data-project');
        const expandPanel = document.querySelector(`.project-expand-panel[data-project="${projectId}"]`);
        if (expandPanel) {
            expandPanel.classList.remove('expanded');
            item.classList.remove('expanded');
        }
    });
    
    // Helper function to scroll timeline item into view on mobile
    function scrollTimelineIntoView(timelineItem) {
        if (!timelineItem) return;
        
        const timelineNav = timelineItem.closest('.timeline-nav');
        if (!timelineNav) return;
        
        // Check if we're on mobile (timeline is horizontal)
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) return; // Desktop timeline is vertical, no need to scroll
        
        // Scroll the active timeline item into view
        const itemLeft = timelineItem.offsetLeft;
        const itemWidth = timelineItem.offsetWidth;
        const navWidth = timelineNav.offsetWidth;
        const navScrollLeft = timelineNav.scrollLeft;
        
        // Calculate the position to center the item or keep it visible
        const itemCenter = itemLeft + (itemWidth / 2);
        const navCenter = navScrollLeft + (navWidth / 2);
        const scrollOffset = itemCenter - navCenter;
        
        timelineNav.scrollTo({
            left: navScrollLeft + scrollOffset,
            behavior: 'smooth'
        });
    }
    
    // Arrow navigation setup function - defined outside loop for accessibility
    function setupArrowNavigation(panel) {
        if (!panel) {
            console.log('setupArrowNavigation: No panel provided');
            return;
        }
        
        const prevBtn = panel.querySelector('.slide-nav-prev');
        const nextBtn = panel.querySelector('.slide-nav-next');
        const panelTimelineItems = panel.querySelectorAll('.timeline-item');
        const panelStorySlides = panel.querySelectorAll('.story-slide');
        const panelSlideshow = panel.querySelector('.story-slideshow');
        
        console.log('setupArrowNavigation called:', {
            panel: !!panel,
            prevBtn: !!prevBtn,
            nextBtn: !!nextBtn,
            timelineItems: panelTimelineItems.length,
            storySlides: panelStorySlides.length,
            slideshow: !!panelSlideshow
        });
        
        if (!prevBtn || !nextBtn || !panelTimelineItems.length) {
            console.log('Arrow navigation setup failed:', { prevBtn: !!prevBtn, nextBtn: !!nextBtn, timelineItems: panelTimelineItems.length });
            return;
        }
        
        // Store panel reference for use in closures
        const panelRef = panel;
        const timelineItemsRef = panelTimelineItems;
        const storySlidesRef = panelStorySlides;
        const slideshowRef = panelSlideshow;
        
        function updateArrowButtons(currentIndex, totalSlides) {
            if (prevBtn) prevBtn.disabled = currentIndex === 0;
            if (nextBtn) nextBtn.disabled = currentIndex >= totalSlides - 1;
            console.log('Arrow buttons updated:', { currentIndex, totalSlides, prevDisabled: prevBtn?.disabled, nextDisabled: nextBtn?.disabled });
        }
        
        function navigateSlide(direction) {
            console.log('navigateSlide called:', direction);
            const activeTimeline = panelRef.querySelector('.timeline-item.active');
            if (!activeTimeline) {
                console.log('No active timeline found');
                return;
            }
            
            const currentIndex = Array.from(timelineItemsRef).indexOf(activeTimeline);
            console.log('Current index:', currentIndex);
            
            if (currentIndex === -1) {
                console.log('Current index is -1, returning');
                return;
            }
            
            let newIndex;
            if (direction === 'next') {
                newIndex = Math.min(currentIndex + 1, timelineItemsRef.length - 1);
            } else {
                newIndex = Math.max(currentIndex - 1, 0);
            }
            
            console.log('New index:', newIndex, 'Current index:', currentIndex);
            
            if (newIndex !== currentIndex && timelineItemsRef[newIndex]) {
                // Remove active class from all
                timelineItemsRef.forEach(ti => ti.classList.remove('active'));
                storySlidesRef.forEach(ss => ss.classList.remove('active'));
                
                // Add active class to new slide
                timelineItemsRef[newIndex].classList.add('active');
                if (storySlidesRef[newIndex]) {
                    storySlidesRef[newIndex].classList.add('active');
                }
                
                // Update active slide title
                const activeSlideTitleEl = panelRef.querySelector('.active-slide-title');
                if (activeSlideTitleEl && timelineItemsRef[newIndex]) {
                    const activeLabel = timelineItemsRef[newIndex].querySelector('.timeline-label');
                    if (activeLabel) {
                        activeSlideTitleEl.textContent = activeLabel.textContent.trim();
                    } else {
                        activeSlideTitleEl.textContent = '';
                    }
                }
                
                // Scroll to the corresponding slide
                if (slideshowRef && storySlidesRef[newIndex]) {
                    const slideWidth = storySlidesRef[newIndex].offsetWidth + 32; // 32px gap (2rem)
                    console.log('Scrolling to slide:', newIndex, 'at position:', slideWidth * newIndex);
                    slideshowRef.scrollTo({ 
                        left: slideWidth * newIndex, 
                        behavior: 'smooth' 
                    });
                }
                
                // Scroll timeline item into view on mobile
                scrollTimelineIntoView(timelineItemsRef[newIndex]);
                
                // Update arrow states
                updateArrowButtons(newIndex, timelineItemsRef.length);
            }
        }
        
        // Remove any existing event listeners by using onclick (simpler approach)
        prevBtn.onclick = null;
        nextBtn.onclick = null;
        
        // Add click event listeners using onclick for simplicity
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('Prev button clicked - onclick handler');
            navigateSlide('prev');
            return false;
        };
        
        nextBtn.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('Next button clicked - onclick handler');
            navigateSlide('next');
            return false;
        };
        
        // Also add addEventListener as backup
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('Prev button clicked - addEventListener handler');
            navigateSlide('prev');
        }, true); // Use capture phase
        
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log('Next button clicked - addEventListener handler');
            navigateSlide('next');
        }, true); // Use capture phase
        
        // Initialize arrow button states
        if (timelineItemsRef.length > 0) {
            const activeIndex = Array.from(timelineItemsRef).findIndex(ti => ti.classList.contains('active'));
            updateArrowButtons(activeIndex >= 0 ? activeIndex : 0, timelineItemsRef.length);
        }
        
        // Update arrows when timeline items are clicked
        timelineItemsRef.forEach((timelineItem, index) => {
            timelineItem.addEventListener('click', function() {
                setTimeout(() => {
                    updateArrowButtons(index, timelineItemsRef.length);
                }, 100);
            });
        });
        
        // Update arrows when slideshow scrolls
        if (slideshowRef) {
            slideshowRef.addEventListener('scroll', function() {
                const scrollLeft = slideshowRef.scrollLeft;
                const slideWidth = storySlidesRef[0]?.offsetWidth + 32;
                const activeIndex = Math.round(scrollLeft / slideWidth);
                
                if (activeIndex >= 0 && activeIndex < timelineItemsRef.length) {
                    updateArrowButtons(activeIndex, timelineItemsRef.length);
                }
            });
        }
        
        console.log('Arrow navigation setup complete');
    }
    
    projectItems.forEach((item, index) => {
        const header = item.querySelector('.project-item-header');
        const projectId = item.getAttribute('data-project');
        const expandPanel = document.querySelector(`.project-expand-panel[data-project="${projectId}"]`);
        const collapseBar = expandPanel ? expandPanel.querySelector('.collapse-bar') : null;
        const timelineItems = expandPanel ? expandPanel.querySelectorAll('.timeline-item') : [];
        const storySlides = expandPanel ? expandPanel.querySelectorAll('.story-slide') : [];
        const slideshow = expandPanel ? expandPanel.querySelector('.story-slideshow') : null;
        const storyContent = expandPanel ? expandPanel.querySelector('.story-content') : null;
        const timelineNav = expandPanel ? expandPanel.querySelector('.timeline-nav') : null;
        
        // Create active slide title element for mobile
        let activeSlideTitleEl = null;
        if (expandPanel && timelineNav && storyContent) {
            // Check if title element already exists
            activeSlideTitleEl = expandPanel.querySelector('.active-slide-title');
            if (!activeSlideTitleEl) {
                activeSlideTitleEl = document.createElement('div');
                activeSlideTitleEl.className = 'active-slide-title';
                // Insert between timeline-nav and story-content
                timelineNav.parentNode.insertBefore(activeSlideTitleEl, storyContent);
            }
        }
        
        // Function to update active slide title
        function updateActiveSlideTitle(activeIndex) {
            if (!activeSlideTitleEl || !timelineItems[activeIndex]) return;
            const activeLabel = timelineItems[activeIndex].querySelector('.timeline-label');
            if (activeLabel) {
                activeSlideTitleEl.textContent = activeLabel.textContent.trim();
            } else {
                activeSlideTitleEl.textContent = '';
            }
        }
        
        // Toggle project expansion
        if (header && expandPanel) {
            header.addEventListener('click', function(e) {
                e.preventDefault();
                const isExpanded = expandPanel.classList.contains('expanded');
                
                if (isExpanded) {
                    // Collapse with scroll restoration
                    const currentScrollY = window.scrollY;
                    const projectItemRect = item.getBoundingClientRect();
                    const projectItemTop = projectItemRect.top + currentScrollY;
                    
                    expandPanel.classList.remove('expanded');
                    item.classList.remove('expanded');
                    
                    // Scroll back to the project item position with smooth animation
                    setTimeout(() => {
                        window.scrollTo({
                            top: projectItemTop - 100, // Offset to show the project header nicely
                            behavior: 'smooth'
                        });
                    }, 100); // Small delay to allow collapse animation to start
                } else {
                    // Collapse all other projects first (ensure only one is open at a time)
                    projectItems.forEach((otherItem) => {
                        if (otherItem !== item) {
                            const otherProjectId = otherItem.getAttribute('data-project');
                            const otherExpandPanel = document.querySelector(`.project-expand-panel[data-project="${otherProjectId}"]`);
                            if (otherExpandPanel) {
                                otherExpandPanel.classList.remove('expanded');
                                otherItem.classList.remove('expanded');
                            }
                        }
                    });
                    
                    // Expand current project
                    expandPanel.classList.add('expanded');
                    item.classList.add('expanded');
                    
                    // Initialize first stage as active
                    if (timelineItems.length > 0 && storySlides.length > 0) {
                        timelineItems.forEach(ti => ti.classList.remove('active'));
                        storySlides.forEach(ss => ss.classList.remove('active'));
                        
                        timelineItems[0].classList.add('active');
                        storySlides[0].classList.add('active');
                        
                        // Update active slide title
                        updateActiveSlideTitle(0);
                        
                        // Scroll to first slide
                        if (slideshow) {
                            slideshow.scrollTo({ left: 0, behavior: 'smooth' });
                        }
                    }
                    
                    // Set up arrow navigation after panel is expanded
                    setTimeout(() => {
                        setupArrowNavigation(expandPanel);
                    }, 100);
                }
            });
        }
        
        // Collapse bar functionality - entire bar is clickable
        if (collapseBar) {
            collapseBar.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Store the current scroll position before collapsing
                const currentScrollY = window.scrollY;
                const projectItemRect = item.getBoundingClientRect();
                const projectItemTop = projectItemRect.top + currentScrollY;
                
                // Collapse the project
                expandPanel.classList.remove('expanded');
                item.classList.remove('expanded');
                
                // Scroll back to the project item position with smooth animation
                setTimeout(() => {
                    window.scrollTo({
                        top: projectItemTop - 100, // Offset to show the project header nicely
                        behavior: 'smooth'
                    });
                }, 100); // Small delay to allow collapse animation to start
            });
        }
        
        // Timeline navigation
        timelineItems.forEach((timelineItem, index) => {
            timelineItem.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Remove active class from all timeline items and story slides
                timelineItems.forEach(ti => ti.classList.remove('active'));
                storySlides.forEach(ss => ss.classList.remove('active'));
                
                // Add active class to clicked timeline item and corresponding story slide
                timelineItem.classList.add('active');
                if (storySlides[index]) {
                    storySlides[index].classList.add('active');
                    
                    // Update active slide title
                    updateActiveSlideTitle(index);
                    
                    // Scroll to the corresponding slide
                    if (slideshow) {
                        const slideWidth = storySlides[index].offsetWidth + 32; // 32px gap (2rem)
                        slideshow.scrollTo({ 
                            left: slideWidth * index, 
                            behavior: 'smooth' 
                        });
                    }
                }
                
                // Scroll timeline item into view on mobile
                scrollTimelineIntoView(timelineItem);
            });
        });
        
        // Handle slideshow scroll to update active timeline item
        if (slideshow) {
            slideshow.addEventListener('scroll', function() {
                const scrollLeft = slideshow.scrollLeft;
                const slideWidth = storySlides[0]?.offsetWidth + 32; // 32px gap (2rem)
                const activeIndex = Math.round(scrollLeft / slideWidth);
                
                if (activeIndex >= 0 && activeIndex < timelineItems.length) {
                    timelineItems.forEach(ti => ti.classList.remove('active'));
                    storySlides.forEach(ss => ss.classList.remove('active'));
                    
                    timelineItems[activeIndex]?.classList.add('active');
                    storySlides[activeIndex]?.classList.add('active');
                    
                    // Update active slide title
                    updateActiveSlideTitle(activeIndex);
                    
                    // Scroll timeline item into view on mobile
                    scrollTimelineIntoView(timelineItems[activeIndex]);
                }
            });
        }
        
    });
    
    // Sticky Project Headers
    // Add scroll listener to handle sticky behavior for expanded projects
    window.handleStickyHeaders = function() {
        const expandedPanels = document.querySelectorAll('.project-expand-panel.expanded');
        
        expandedPanels.forEach(panel => {
            const projectId = panel.getAttribute('data-project');
            const projectItem = document.querySelector(`.project-list-item[data-project="${projectId}"]`);
            const header = projectItem ? projectItem.querySelector('.project-item-header') : null;
            
            if (header) {
                const headerRect = header.getBoundingClientRect();
                
                // Check if the header should be sticky (when it reaches the top of viewport)
                if (headerRect.top <= 80 && headerRect.bottom > 80) {
                    // Header is in sticky position, make it sticky
                    header.classList.add('sticky');
                } else {
                    // Header is not in sticky position, remove sticky
                    header.classList.remove('sticky');
                }
            }
        });
    };
    
    // Add scroll event listener for sticky headers
    window.addEventListener('scroll', window.handleStickyHeaders);
    
    // Also handle sticky headers when projects expand/collapse
    // Re-run sticky header check when projects change state
    const originalProjectClickHandler = document.querySelectorAll('.project-item-header');
    originalProjectClickHandler.forEach(header => {
        const originalClickHandler = header.onclick;
        header.addEventListener('click', function(e) {
            // Small delay to allow expansion animation to complete
            setTimeout(() => {
                window.handleStickyHeaders();
            }, 350);
        });
    });
});

// Professional Experience Carousel - Horizontal Scroll (like projects page)
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item-exp');
    const experienceCards = document.querySelectorAll('.experience-card');
    const slideshow = document.querySelector('.experience-cards-slideshow');
    
    if (!timelineItems.length || !experienceCards.length || !slideshow) {
        return;
    }
    
    // Timeline navigation - click timeline to scroll to card
    timelineItems.forEach((timelineItem, index) => {
        timelineItem.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Remove active class from all timeline items and cards
            timelineItems.forEach(ti => ti.classList.remove('active'));
            experienceCards.forEach(card => card.classList.remove('active'));
            
            // Add active class to clicked timeline item and corresponding card
            timelineItem.classList.add('active');
            if (experienceCards[index]) {
                experienceCards[index].classList.add('active');
                
                // Scroll to the corresponding card - center it in viewport
                const card = experienceCards[index];
                const cardWidth = card.offsetWidth;
                const gap = 32; // 2rem gap
                const slideshowWidth = slideshow.offsetWidth;
                const cardLeft = card.offsetLeft;
                const scrollPosition = cardLeft - (slideshowWidth / 2) + (cardWidth / 2);
                
                slideshow.scrollTo({ 
                    left: Math.max(0, scrollPosition), 
                    behavior: 'smooth' 
                });
            }
        });
    });
    
    // Handle slideshow scroll to update active timeline item and card
    let scrollTimeout;
    slideshow.addEventListener('scroll', function() {
        // Debounce scroll events for better performance
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            const scrollLeft = slideshow.scrollLeft;
            const firstCard = experienceCards[0];
            if (!firstCard) return;
            
            // Calculate card width including gap more accurately
            const cardWidth = firstCard.offsetWidth;
            const gap = 32; // 2rem gap
            const totalWidth = cardWidth + gap;
            
            // Find which card is currently centered/visible
            let activeIndex = 0;
            let minDistance = Infinity;
            
            experienceCards.forEach((card, index) => {
                const cardLeft = card.offsetLeft;
                const cardCenter = cardLeft + (cardWidth / 2);
                const scrollCenter = scrollLeft + (slideshow.offsetWidth / 2);
                const distance = Math.abs(cardCenter - scrollCenter);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    activeIndex = index;
                }
            });
            
            if (activeIndex >= 0 && activeIndex < timelineItems.length) {
                timelineItems.forEach(ti => ti.classList.remove('active'));
                experienceCards.forEach(card => card.classList.remove('active'));
                
                timelineItems[activeIndex]?.classList.add('active');
                experienceCards[activeIndex]?.classList.add('active');
            }
        }, 50);
    });
    
    // Card click handlers - clicking a card scrolls to it and updates timeline
    experienceCards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on links or buttons inside the card
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            
            // Remove active class from all timeline items and cards
            timelineItems.forEach(ti => ti.classList.remove('active'));
            experienceCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card and corresponding timeline item
            card.classList.add('active');
            if (timelineItems[index]) {
                timelineItems[index].classList.add('active');
            }
            
            // Scroll to the clicked card - center it in viewport
            const cardWidth = card.offsetWidth;
            const slideshowWidth = slideshow.offsetWidth;
            const cardLeft = card.offsetLeft;
            const scrollPosition = cardLeft - (slideshowWidth / 2) + (cardWidth / 2);
            
            slideshow.scrollTo({ 
                left: Math.max(0, scrollPosition), 
                behavior: 'smooth' 
            });
        });
        
        // Make cards keyboard accessible
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View experience ${index + 1}`);
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Initialize - set first card and timeline item as active
    timelineItems[0]?.classList.add('active');
    experienceCards[0]?.classList.add('active');
});

// Capability Framework Grid - Enhanced Animations & Interactions
document.addEventListener('DOMContentLoaded', function() {
    const capabilityGrid = document.querySelector('.capability-framework-grid');
    const capabilityCards = document.querySelectorAll('.capability-card');
    const skillChips = document.querySelectorAll('.capability-skill-chip');
    
    if (!capabilityGrid || capabilityCards.length === 0) {
        return;
    }
    
    // Intersection Observer for scroll animations - Panels
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const gridObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate cards with stagger
                capabilityCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                        
                        // Animate chips sequentially after card animation
                        setTimeout(() => {
                            const chips = card.querySelectorAll('.capability-skill-chip');
                            chips.forEach((chip, chipIndex) => {
                                setTimeout(() => {
                                    chip.classList.add('animate-in');
                                }, chipIndex * 100);
                            });
                        }, 300);
                    }, index * 100);
                });
                
                gridObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    gridObserver.observe(capabilityGrid);
    
    // Parallax effect on mouse move (1-2px)
    let isParallaxEnabled = true;
    let mouseX = 0;
    let mouseY = 0;
    
    capabilityGrid.addEventListener('mousemove', function(e) {
        if (!isParallaxEnabled) return;
        
        const rect = capabilityGrid.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) / rect.width;
        mouseY = (e.clientY - rect.top) / rect.height;
        
        capabilityCards.forEach((card, index) => {
            const offsetX = (mouseX - 0.5) * 2;
            const offsetY = (mouseY - 0.5) * 2;
            const intensity = 1.5;
            
            card.style.transform = `translate(${offsetX * intensity}px, ${offsetY * intensity}px) translateZ(0)`;
        });
    });
    
    capabilityGrid.addEventListener('mouseleave', function() {
        capabilityCards.forEach(card => {
            card.style.transform = '';
        });
    });
    
    // Disable parallax during card hover
    capabilityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            isParallaxEnabled = false;
            this.style.transform = '';
        });
        
        card.addEventListener('mouseleave', function() {
            isParallaxEnabled = true;
            this.style.transform = '';
        });
    });
    
    // Idle effect: Random chip pulse every 10-15 seconds
    function randomChipPulse() {
        if (skillChips.length === 0) return;
        
        const randomChip = skillChips[Math.floor(Math.random() * skillChips.length)];
        randomChip.classList.add('pulse');
        
        setTimeout(() => {
            randomChip.classList.remove('pulse');
        }, 2000);
    }
    
    // Start idle effect after initial animations
    setTimeout(() => {
        setInterval(randomChipPulse, 12000 + Math.random() * 3000); // 12-15 seconds
    }, 5000);
    
    // Accessibility: Keyboard navigation for chips
    skillChips.forEach(chip => {
        chip.setAttribute('tabindex', '0');
        chip.setAttribute('role', 'button');
        
        chip.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        chip.addEventListener('focus', function() {
            this.style.outline = '2px solid rgba(255, 107, 107, 0.6)';
            this.style.outlineOffset = '4px';
        });
        
        chip.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
});

// Beyond Work Section - Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const beyondWorkSection = document.querySelector('.beyond-work-section');
    const beyondWorkCards = document.querySelectorAll('.beyond-work-card');
    
    if (!beyondWorkSection || beyondWorkCards.length === 0) {
        return;
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const beyondWorkObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate cards with stagger (left to right)
                beyondWorkCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 150);
                });
                
                beyondWorkObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    beyondWorkObserver.observe(beyondWorkSection);
    
    // Prevent right-click context menu on cards
    beyondWorkCards.forEach(card => {
        card.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Prevent drag
        card.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    });
});