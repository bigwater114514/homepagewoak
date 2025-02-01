// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Custom cursor
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Hover effect on interactive elements
document.querySelectorAll('a, button, .project-card, .contact-item').forEach(element => {
  element.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.cursor');
    cursor.style.transform = 'scale(1.5)';
  });
  
  element.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.cursor');
    cursor.style.transform = 'scale(1)';
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Animation for navigation background
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 25, 47, 0.95)';
  } else {
    nav.style.background = 'rgba(10, 25, 47, 0.85)';
  }
});

// GSAP animations
gsap.from(".hero h1", {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: "power4.out"
});

gsap.from(".animated-blocks .block", {
  duration: 0.8,
  scale: 0,
  y: 100,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// Active section highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu-items a');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const scroll = window.pageYOffset;
    
    if (scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Skill circle animation
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'circleAnimation 2s forwards';
    }
  });
};

const observer = new IntersectionObserver(observerCallback);
document.querySelectorAll('.skill-circle').forEach(circle => {
  observer.observe(circle);
});