// Inicializar AOS (animaciones)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Typing effect
var typed = new Typed('.typing', {
    strings: ['en PHP.', 'con .NET.', 'en Flutter.', 'con Laravel.', 'en React.', '¡y Docker!'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Cargar proyectos desde JSON
async function loadProjects() {
    try {
        const response = await fetch('js/data.json');
        const data = await response.json();
        const projectsContainer = document.getElementById('projectsContainer');
        
        if (projectsContainer) {
            projectsContainer.innerHTML = data.projects.map(project => `
                <div class="project-card" data-aos="fade-up">
                    <div class="project-img">
                        ${project.icon}
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <p class="project-desc">${project.description}</p>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error cargando proyectos:', error);
    }
}

// Livewire demo counter
let counter = 0;
const counterBtn = document.getElementById('counterBtn');
const counterSpan = document.getElementById('counter');

if (counterBtn) {
    counterBtn.addEventListener('click', () => {
        counter++;
        counterSpan.textContent = counter;
        // Animación de feedback
        counterBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            counterBtn.style.transform = 'scale(1)';
        }, 200);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Smooth scroll para links internos
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

// Form submit demo
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Demo: Mensaje enviado (simulación). En un proyecto real, conectarías con backend en PHP/Laravel o .NET.');
        contactForm.reset();
    });
}

// Inicializar
loadProjects();

// Mostrar tecnologías en consola (demo)
console.log('%c🚀 Portfolio Fullstack | Tecnologías: PHP, Laravel, .NET, React, Vue, Flutter, Docker, Postman', 'color: #6366f1; font-size: 16px; font-weight: bold;');