document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate container on load
    gsap.to('.container', { 
        opacity: 1, 
        duration: 1.2, 
        ease: 'power2.out' 
    });
    
    // Animate sections on scroll
    gsap.utils.toArray('.section').forEach((section, i) => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            }
        });
    });
    
    // Animate skill items with stagger
    gsap.utils.toArray('.skill-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            scale: 0.8,
            y: 20,
            duration: 0.6,
            ease: 'back.out(1.7)',
            delay: i * 0.05,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 80%',
            }
        });
    });
    
    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
            }
        });
    });
    
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            rotation: 5,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
            }
        });
    });

    // Animate certification items
    gsap.utils.toArray('.certifications-list li').forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            x: -30,
            duration: 0.6,
            ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: {
                trigger: '#certifications',
                start: 'top 80%',
            }
        });
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add parallax effect to header
    gsap.to('.profile-pic', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Add typing effect to the title
    const title = document.querySelector('.title');
    const titleText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            title.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after container animation
    setTimeout(typeWriter, 1200);

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Add floating animation to skill items
    gsap.utils.toArray('.skill-item').forEach((item, i) => {
        gsap.to(item, {
            y: -5,
            duration: 2 + (i % 3),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.1
        });
    });

    // Add hover effect for timeline items
    gsap.utils.toArray('.timeline-content').forEach(content => {
        content.addEventListener('mouseenter', () => {
            gsap.to(content, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        content.addEventListener('mouseleave', () => {
            gsap.to(content, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});