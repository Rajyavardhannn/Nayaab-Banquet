/* --- Vintage Old Money Interactive Script --- */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Nayaab Banquet & Lawns - Vintage Experience Loaded Successfully.");

    // Interactive confirmation when clicking the map to open navigation
    const mapLink = document.querySelector('.map-link-container');
    
    if (mapLink) {
        mapLink.addEventListener('click', () => {
            console.log("Opening navigation route to Nayaab Banquet, Ghaziabad...");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement('div');
    container.id = 'particles-container';
    document.body.appendChild(container);

    const sparkleCount = 25;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        

        const size = Math.random() * 4 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.animationDuration = `${Math.random() * 6 + 4}s`;
        sparkle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(sparkle);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.vintage-frame, .wax-seal-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -12; 
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);


    const hiddenElements = document.querySelectorAll('.features-section, .gallery-grid, .media-grid-3, .location-section');
    hiddenElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 1s cubic-bezier(0.165, 0.84, 0.44, 1)";
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.createElement('div');
    spotlight.id = 'cursor-spotlight';
    document.body.appendChild(spotlight);


    spotlight.style.position = 'fixed';
    spotlight.style.width = '500px';
    spotlight.style.height = '500px';
    spotlight.style.borderRadius = '50%';
    spotlight.style.pointerEvents = 'none';
    spotlight.style.background = 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, transparent 70%)';
    spotlight.style.transform = 'translate(-50%, -50%)';
    spotlight.style.zIndex = '998';
    spotlight.style.transition = 'width 0.2s, height 0.2s';

    window.addEventListener('mousemove', (e) => {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const container = document.querySelector('.parchment-container');
    

    if(container) {
        container.style.boxShadow = `0 ${20 + scrolled * 0.05}px ${45 + scrolled * 0.1}px rgba(0, 0, 0, 0.8)`;
    }
});
document.addEventListener("DOMContentLoaded", () => {

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);


    if (!isTouchDevice) {
        const cards = document.querySelectorAll('.vintage-frame, .wax-seal-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    } else {
        // Fallback for mobile: smooth simple touch feedback via CSS active state
        console.log("Touch device detected: optimized for fluid mobile touch interaction.");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop default jump
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.liquid-glass-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const navLinksContainer = document.querySelector('.nav-links');
    const items = document.querySelectorAll('.nav-item');
    const pill = document.querySelector('.nav-slider-pill');

    if (!pill) return;

    function movePillTo(element) {
        const containerRect = navLinksContainer.getBoundingClientRect();
        const elRect = element.getBoundingClientRect();

        const left = elRect.left - containerRect.left;
        const top = elRect.top - containerRect.top;
        const width = elRect.width;
        const height = elRect.height;

        pill.style.opacity = '1';
        pill.style.left = `${left}px`;
        pill.style.top = `${top}px`;
        pill.style.width = `${width}px`;
        pill.style.height = `${height}px`;
    }

    items.forEach(item => {

        item.addEventListener('mouseenter', (e) => {
            movePillTo(e.target);
        });


        item.addEventListener('click', (e) => {
            movePillTo(e.target);
        });
    });


    navLinksContainer.addEventListener('mouseleave', () => {
        pill.style.opacity = '0';
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const navLinksContainer = document.querySelector('.nav-links');
    const items = document.querySelectorAll('.nav-item');
    const pill = document.querySelector('.nav-slider-pill');

    if (!pill) return;

    function movePillTo(element) {
        const containerRect = navLinksContainer.getBoundingClientRect();
        const elRect = element.getBoundingClientRect();

        const left = elRect.left - containerRect.left;
        const top = elRect.top - containerRect.top;
        const width = elRect.width;
        const height = elRect.height;

        pill.style.opacity = '1';
        pill.style.left = `${left}px`;
        pill.style.top = `${top}px`;
        pill.style.width = `${width}px`;
        pill.style.height = `${height}px`;
    }

    items.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            movePillTo(e.target);
        });

        item.addEventListener('click', (e) => {
            movePillTo(e.target);
        });
    });

    navLinksContainer.addEventListener('mouseleave', () => {
       
    });
});
document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

  
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
    

});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
});


window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 50);
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);


document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    

    if (document.activeElement) {
        document.activeElement.blur();
    }
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0);

    if (document.activeElement) {
        document.activeElement.blur();
    }
});

    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 20;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                let startTime = null;
                const duration = 900; 

                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }


                function easeInOutCubic(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                }

                requestAnimationFrame(animation);
            }
        });
    });
// --- Liquid Glass Call Dropdown Fluid Physics ---
document.addEventListener("DOMContentLoaded", () => {
    const dropdownContainer = document.querySelector('.call-dropdown-container');
    const dropdownToggle = document.querySelector('.call-dropdown-toggle');

    if (dropdownContainer && dropdownToggle) {
        // Toggle open/close on click
        dropdownToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContainer.classList.toggle('active');
        });

        // Flow back inside like liquid when clicking anywhere outside
        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                dropdownContainer.classList.remove('active');
            }
        });
    }
});
// --- Seamless Liquid Call Button Morph Controller ---
document.addEventListener("DOMContentLoaded", () => {
    const morphContainer = document.querySelector('.call-morph-container');
    const morphBtn = document.querySelector('.call-morph-btn');

    if (morphContainer && morphBtn) {
        morphBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            morphContainer.classList.toggle('active');
        });

        // Flow back into the Call Now button when clicking anywhere outside
        document.addEventListener('click', (e) => {
            if (!morphContainer.contains(e.target)) {
                morphContainer.classList.remove('active');
            }
        });
    }
});
// --- Complete Touch & Mobile Gesture Integration ---
document.addEventListener("DOMContentLoaded", () => {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
        console.log("Touch-Screen hardware active: optimizing layout for touch gestures.");
        
        // Ensure touch triggers work instantly on iOS and Android Safari/Chrome
        document.body.classList.add('touch-optimized');
    }
});
// --- macOS Spring-Physics Liquid Sliding Pill Controller ---
document.addEventListener("DOMContentLoaded", () => {
    const navLinksContainer = document.querySelector('.nav-links');
    const items = document.querySelectorAll('.nav-item');
    const pill = document.querySelector('.nav-slider-pill');

    if (pill && navLinksContainer) {
        function movePillTo(element) {
            const containerRect = navLinksContainer.getBoundingClientRect();
            const elRect = element.getBoundingClientRect();

            const left = elRect.left - containerRect.left;
            const top = elRect.top - containerRect.top;
            const width = elRect.width;
            const height = elRect.height;

            pill.style.opacity = '1';
            pill.style.left = `${left}px`;
            pill.style.top = `${top}px`;
            pill.style.width = `${width}px`;
            pill.style.height = `${height}px`;
        }

        items.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                movePillTo(e.target);
            });
            item.addEventListener('click', (e) => {
                movePillTo(e.target);
            });
        });

        navLinksContainer.addEventListener('mouseleave', () => {
            pill.style.opacity = '0';
        });
    }
});
// --- Ultra-Smooth Butter-Gliding Navigation Scroll Engine ---
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate precise position accounting for the sticky nav height
                const navHeight = document.querySelector('.liquid-glass-nav').offsetHeight + 20;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                let startTime = null;
                
                // 1000ms duration for a luxurious, unhurried glide
                const duration = 1000;

                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    
                    // Smooth easing mathematical formula (easeInOutCubic)
                    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                    
                    window.scrollTo(0, run);
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                function easeInOutCubic(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                }

                requestAnimationFrame(animation);
            }
        });
    });
});
// --- Native Hardware-Accelerated Smooth Scroll ---
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
// --- Zero-Lag Native Hardware-Accelerated Smooth Scroll ---
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);


    const elementsToAnimate = document.querySelectorAll('.vintage-frame, section, .amenity-card, h2, h3');
    elementsToAnimate.forEach(el => {
        el.classList.add('animate-on-scroll');
        scrollObserver.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.vintage-frame, .content-section, .amenity-card, h2, h3, .caption');
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${(index % 4) * 0.12}s`;
        scrollObserver.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const allElements = document.querySelectorAll('.vintage-frame, .content-section, .amenity-card, h2, h3, .caption, #location, iframe, .contact-card');
    allElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        scrollObserver.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const frames = document.querySelectorAll('.vintage-frame');

    frames.forEach(frame => {
        frame.addEventListener('mousemove', (e) => {
            const rect = frame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            requestAnimationFrame(() => {
                frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-6px)`;
            });
        });

        frame.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)';
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Advanced Intersection Observer for Staggered Entrances
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.vintage-frame, .content-section, .amenity-card, h2, h3, .caption, #location, iframe, p');
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${(index % 4) * 0.07}s`;
        scrollObserver.observe(el);
    });

    // High-Performance Cursor Spark Trail Engine
    let lastTime = 0;
    document.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();
        if (currentTime - lastTime > 40) { // Throttle for buttery smoothness
            lastTime = currentTime;
            const spark = document.createElement('div');
            spark.className = 'mouse-spark';
            spark.style.left = `${e.clientX}px`;
            spark.style.top = `${e.clientY}px`;
            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        }
    });

    // High-Refresh 3D Parallax & Mouse Light Tracking
    const frames = document.querySelectorAll('.vintage-frame');
    frames.forEach(frame => {
        frame.addEventListener('mousemove', (e) => {
            const rect = frame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -14;
            const rotateY = ((x - centerX) / centerX) * 14;

            // Update CSS custom variables for dynamic lighting gradients
            frame.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            frame.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

            requestAnimationFrame(() => {
                frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04) translateY(-10px)`;
            });
        });

        frame.addEventListener('mouseleave', () => {
            requestAnimationFrame(() => {
                frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)';
            });
        });
    });
});
// --- High-Performance Gold Mouse Sparkle Trail Engine ---
let lastSparkTime = 0;
document.addEventListener('mousemove', (e) => {
    const currentTime = Date.now();
    if (currentTime - lastSparkTime > 35) { // Throttled for butter-smooth 60fps performance
        lastSparkTime = currentTime;
        const spark = document.createElement('div');
        spark.className = 'mouse-spark';
        spark.style.left = `${e.clientX}px`;
        spark.style.top = `${e.clientY}px`;
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 800);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Navigation Scroll
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 2. Call Dropdown Physics for Mobile & Desktop
    const callToggle = document.querySelector('.call-dropdown-toggle');
    const callContainer = document.querySelector('.call-dropdown-container');
    if (callToggle && callContainer) {
        callToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            callContainer.classList.toggle('active');
        });
        document.addEventListener('click', () => callContainer.classList.remove('active'));
    }

    // 3. Cinematic Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.vintage-frame, .hero-frame, .wax-seal-card, h2, h3, .contact-card').forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${(index % 4) * 0.06}s`;
        observer.observe(el);
    });

    // 4. Parallax only on Desktops with Mouse pointers (Protects mobile battery & performance)
    if (window.matchMedia('(hover: hover)').matches) {
        const frames = document.querySelectorAll('.vintage-frame, .hero-frame');
        frames.forEach(frame => {
            frame.addEventListener('mousemove', (e) => {
                const rect = frame.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
                const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;

                frame.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                frame.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

                requestAnimationFrame(() => {
                    frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-4px)`;
                });
            });

            frame.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)';
                });
            });
        });

        // Mouse Sparkle Trail (Desktop Only)
        let lastSpark = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastSpark > 40) {
                lastSpark = now;
                const spark = document.createElement('div');
                spark.className = 'mouse-spark';
                spark.style.left = `${e.clientX}px`;
                spark.style.top = `${e.clientY}px`;
                document.body.appendChild(spark);
                setTimeout(() => spark.remove(), 800);
            }
        });
    }
});
// --- Magical Firefly Generator & Click Ripple Engine ---
document.addEventListener("DOMContentLoaded", () => {
    // Generate floating fireflies across the page
    const fireflyCount = 18;
    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'magical-firefly';
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.animationDuration = `${6 + Math.random() * 6}s`;
        firefly.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(firefly);
    }

    // Create a magical expanding ripple ring wherever the user clicks or taps
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'magic-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);
    });
});
// --- Dynamic Random Shooting Star Generator ---
document.addEventListener("DOMContentLoaded", () => {
    const spawnShootingStar = () => {
        const star = document.createElement('div');
        star.className = 'shooting-star';

        // Random starting positions across the entire viewport
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * (window.innerHeight * 0.6); // Spawns in upper 60% of screen
        
        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;

        // Random animation duration for varied speeds
        const duration = 1.5 + Math.random() * 2.5;
        star.style.animationDuration = `${duration}s`;

        document.body.appendChild(star);

        // Clean up DOM after animation completes
        setTimeout(() => {
            star.remove();
        }, duration * 1000);

        // Schedule the next random shooting star (between 2 to 6 seconds)
        const nextSpawnTime = 2000 + Math.random() * 4000;
        setTimeout(spawnShootingStar, nextSpawnTime);
    };

    // Trigger the first random star shortly after load
    setTimeout(spawnShootingStar, 1500);
});
document.addEventListener("DOMContentLoaded", () => {
    // 1. Velvet-Smooth Native Scroll with Offset
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 2. Instant Zero-Lag Call Dropdown Toggle
    const callToggle = document.querySelector('.call-dropdown-toggle');
    const callContainer = document.querySelector('.call-dropdown-container');
    if (callToggle && callContainer) {
        callToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            requestAnimationFrame(() => callContainer.classList.toggle('active'));
        });
        document.addEventListener('click', () => {
            requestAnimationFrame(() => callContainer.classList.remove('active'));
        });
    }

    // 3. Buttery-Smooth Intersection Observer Scroll Entrances
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.05
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('is-visible');
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.hero-frame, .vintage-frame, .wax-seal-card, h2, h3, .contact-card, .map-link-container, .content-section');
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.transitionDelay = `${(index % 4) * 0.05}s`;
        scrollObserver.observe(el);
    });

    // 4. Magical Fireflies Generator (Optimized)
    const fireflyCount = 14;
    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'magical-firefly';
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.animationDuration = `${7 + Math.random() * 5}s`;
        firefly.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(firefly);
    }

    // 5. Random Organic Shooting Stars
    const spawnShootingStar = () => {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * (window.innerHeight * 0.5)}px`;
        const duration = 1.5 + Math.random() * 2;
        star.style.animationDuration = `${duration}s`;
        document.body.appendChild(star);
        setTimeout(() => star.remove(), duration * 1000);
        setTimeout(spawnShootingStar, 2500 + Math.random() * 3500);
    };
    setTimeout(spawnShootingStar, 1200);

    // 6. High-Performance Instant Touch & Click Stardust Burst
    const createStardustBurst = (clientX, clientY) => {
        requestAnimationFrame(() => {
            for (let i = 0; i < 8; i++) {
                const dust = document.createElement('div');
                dust.className = 'touch-dust';
                dust.style.left = `${clientX}px`;
                dust.style.top = `${clientY}px`;
                const angle = Math.random() * Math.PI * 2;
                const distance = 30 + Math.random() * 50;
                dust.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
                dust.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
                document.body.appendChild(dust);
                setTimeout(() => dust.remove(), 600);
            }
        });
    };

    document.addEventListener('click', (e) => createStardustBurst(e.clientX, e.clientY));
    document.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
            createStardustBurst(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    // 7. Butter-Smooth Desktop 3D Parallax & Mouse Tracking
    if (window.matchMedia('(hover: hover)').matches) {
        const frames = document.querySelectorAll('.vintage-frame, .hero-frame');
        frames.forEach(frame => {
            frame.addEventListener('mousemove', (e) => {
                const rect = frame.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
                const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;

                frame.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
                frame.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

                requestAnimationFrame(() => {
                    frame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-3px)`;
                });
            });

            frame.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)';
                });
            });
        });

        // Velvet Mouse Sparkle Trail
        let lastSpark = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastSpark > 30) {
                lastSpark = now;
                requestAnimationFrame(() => {
                    const spark = document.createElement('div');
                    spark.className = 'mouse-spark';
                    spark.style.left = `${e.clientX}px`;
                    spark.style.top = `${e.clientY}px`;
                    document.body.appendChild(spark);
                    setTimeout(() => spark.remove(), 700);
                });
            }
        });
    }

    // 8. Sliding Pill Smooth Nav Indicator
    const navItems = document.querySelectorAll('.nav-item');
    const sliderPill = document.querySelector('.nav-slider-pill');
    if (navItems.length && sliderPill) {
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                requestAnimationFrame(() => {
                    sliderPill.style.opacity = '1';
                    sliderPill.style.width = `${item.offsetWidth}px`;
                    sliderPill.style.left = `${item.offsetLeft}px`;
                });
            });
        });
        const navContainer = document.querySelector('.nav-links');
        if (navContainer) {
            navContainer.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    sliderPill.style.opacity = '0';
                });
            });
        }
    }
});
// --- Additional Card Magnetic Tilt & Kinetic Motion Engine ---
document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia('(hover: hover)').matches) {
        const sealCards = document.querySelectorAll('.wax-seal-card');
        sealCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                requestAnimationFrame(() => {
                    card.style.transform = `perspective(800px) rotateX(${-y * 0.08}deg) rotateY(${x * 0.08}deg) translateY(-8px) scale(1.02)`;
                });
            });

            card.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
                });
            });
        });
    }
});
// --- Perfectly Centered Cursor / Touch Ripple Engine ---
document.addEventListener('click', (e) => {
    requestAnimationFrame(() => {
        const ripple = document.createElement('div');
        ripple.className = 'magic-ripple';
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
    });
});

document.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        requestAnimationFrame(() => {
            const ripple = document.createElement('div');
            ripple.className = 'magic-ripple';
            ripple.style.left = `${touch.clientX}px`;
            ripple.style.top = `${touch.clientY}px`;
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    }
}, { passive: true });
// --- Interactive Constellation & Golden Particle Network ---
document.addEventListener("DOMContentLoaded", () => {
    // Create canvas for constellation lines and floating dots
    const canvas = document.createElement('canvas');
    canvas.className = 'constellation-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: 1.5 + Math.random() * 1.5
        });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
        mouseX = -1000;
        mouseY = -1000;
    });

    // Render loop
    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Draw particle dot
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(197, 160, 89, 0.7)';
            ctx.fill();

            // Connect lines to nearby particles
            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(197, 160, 89, ${1 - dist / 120})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Connect lines from cursor to particles
            const mdx = p.x - mouseX;
            const mdy = p.y - mouseY;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mdist < 150) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseX, mouseY);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - mdist / 150})`;
                ctx.lineWidth = 0.75;
                ctx.stroke();
            }
        });

        requestAnimationFrame(animate);
    };

    animate();
});
    // --- Magical Fireflies Generator ---
    const fireflyCount = 16;
    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'magical-firefly';
        firefly.style.left = `${Math.random() * 100}vw`;
        firefly.style.top = `${Math.random() * 100}vh`;
        firefly.style.animationDuration = `${6 + Math.random() * 6}s`;
        firefly.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(firefly);
    }
    // --- Bottom-Up Floating Fire/Embers Generator ---
    const container = document.createElement('div');
    container.id = 'particles-container';
    document.body.appendChild(container);

    const sparkleCount = 25;
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const size = Math.random() * 4 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.animationDuration = `${Math.random() * 6 + 4}s`;
        sparkle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(sparkle);
    }
// --- Cinematic Gallery Lightbox & Immersion Engine ---
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryImages = document.querySelectorAll('.vintage-frame img, .hero-frame img');

    if (lightbox && lightboxImg) {
        galleryImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
        };

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }
});
// --- Interactive Royal Concierge Drawer Engine ---
document.addEventListener("DOMContentLoaded", () => {
    const conciergeContainer = document.getElementById('conciergeWidget');
    const conciergeToggle = document.getElementById('conciergeToggle');

    if (conciergeContainer && conciergeToggle) {
        conciergeToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            conciergeContainer.classList.toggle('active');
        });

        // Close drawer when clicking outside
        document.addEventListener('click', (e) => {
            if (!conciergeContainer.contains(e.target)) {
                conciergeContainer.classList.remove('active');
            }
        });
    }
});
// --- Cinematic Velvet Loader Fade Controller ---
window.addEventListener("load", () => {
    const loader = document.getElementById('velvetLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 600); // Brief luxury pause before dissolving into the site
    }
});
// --- Maximalist Magic Engine: Shockwaves, Gyroscope & Dust Storm ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. High-Density Dust Storm Generator
    for (let i = 0; i < 35; i++) {
        const particle = document.createElement('div');
        particle.className = 'dust-storm-particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${5 + Math.random() * 7}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(particle);
    }

    // 2. Mega Shockwave Ripple on Click & Touch
    const triggerShockwave = (clientX, clientY) => {
        requestAnimationFrame(() => {
            const ripple = document.createElement('div');
            ripple.className = 'mega-ripple';
            ripple.style.left = `${clientX}px`;
            ripple.style.top = `${clientY}px`;
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 900);
        });
    };

    document.addEventListener('click', (e) => triggerShockwave(e.clientX, e.clientY));
    document.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
            triggerShockwave(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    // 3. Mobile Gyroscope 3D Tilt (Makes the phone screen come alive when tilted!)
    if (window.DeviceOrientationEvent && window.matchMedia('(max-width: 768px)').matches) {
        window.addEventListener('deviceorientation', (e) => {
            const tiltX = e.beta;  // Front/back tilt
            const tiltY = e.gamma; // Left/right tilt

            if (tiltX !== null && tiltY !== null) {
                const container = document.querySelector('.parchment-container');
                if (container) {
                    const rotX = (tiltX / 30) * 4;
                    const rotY = (tiltY / 30) * 4;
                    requestAnimationFrame(() => {
                        container.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
                    });
                }
            }
        }, { passive: true });
    }
});
